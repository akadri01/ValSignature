"use strict";

const mongoose = require("mongoose");
const schema = mongoose.Schema;
const randomstring = require("randomstring");
const logError = require("../../server/helpers").logError;
const generateUrl = require("../../server/helpers").generateUrl;

const PropertySchema = new schema({
  advert_type: String,
  //age: Number,
  area: Number,
  detail: String,
  features: Array,
  furniture: String,
  garden: String,
  located_floor: Number,
  phone: String,
  posted_by: String,
  premises_type: String,
  price: Number,
  region: String,
  rooms_qty: String,
  title: String,
  //total_balcony: Number,
  total_bathroom: Number,
  type_chauffage: String,
  type_desserte: String,
  exposition: String,

  actabilite: String,
  rentabilite: Number,
  loyer_marche: Number,
  loyer_pinel: Number,
  description: String,
  price_box: Number,
  price_parking: Number,
  area_jardin: Number,
  area_balcon: Number,
  area_terrasse: Number,
  proprietaire: String,
  constructeur: String,
  n_lot: String,

  //proximite_com: String,
  town: String,
  img_directory: String,
  images: Array, // [thumbnail, main, ...]
  date: {
    type: Date,
    default: Date.now
  },
  date_livraison: {
    type: Date,
    default: Date.now
  },
  reference: String,
  url: String,
  user_name: String,
  user_id: String,
  user_email: String
});

PropertySchema.statics.createNew = function(body, session) {
  // set images
  const placeholders = ["thumbnail.jpg", "main.jpg"];
  const images =
    session.filename && session.filename.length
      ? session.filename
      : placeholders;
  const directory =
    session.filename && session.filename.length
      ? body.uniqueDirectory
      : "placeholders";
  // save
  const newProperty = new Property({
    advert_type: body.advert_type,
   
    detail: body.detail,
    features: body.features,
    furniture: body.furniture,
    garden: body.garden,
    phone: body.phone,
    posted_by: body.posted_by,
    premises_type: body.premises_type,
    region: body.region,
    rooms_qty: body.rooms_qty,
    title: body.title,

    age: parseInt(body.age),
    area: parseInt(body.area),
    located_floor: parseInt(body.located_floor),
    price: parseInt(body.price),
    //total_balcony: parseInt(body.total_balcony),
    total_bathroom: parseInt(body.total_bathroom),
    total_floor: parseInt(body.total_floor),

    type_chauffage: body.type_chauffage,
    type_desserte: body.type_desserte,
    expostion: body.exposition,

    actabilite: body.actabilite,
    description: body.description,
    proprietaire: body.proprietaire,
    constructeur: body.constructeur,

    n_lot: body.n_lot,

    rentabilite: parseInt(body.rentabilite),
    loyer_marche: parseInt(body.loyer_marche),
    loyer_pinel: parseInt(body.loyer_pinel),
    price_box: parseInt(body.price_box),
    price_parking: parseInt(body.price_parking),
    area_jardin: parseInt(body.area_jardin),
    area_balcon: parseInt(body.area_balcon),
    area_terrasse: parseInt(body.area_terrasse),

    town: body.town,
    user_name: body.userName,
    user_id: body.userId,
    user_email: body.userEmail,
    images: images,
    img_directory: directory,
    url: generateUrl(body),
    reference: randomstring.generate(7).toUpperCase()
  });
  return newProperty.save();
};

// Property search
PropertySchema.statics.searchSortWithTotalRecordQty = function(
  queryObj,
  sortObj,
  limitQty,
  skipQty,
  cb
) {
  // create search query object
  const {
    advert_type,
    region,
    town,
    premises_type,
    minPrice,
    maxPrice,
    posted_by
  } = queryObj;
  const queryOptions = {};
  if (advert_type) {
    queryOptions.advert_type = advert_type;
  }
  if (region) {
    queryOptions.region = region;
  }
  if (town) {
    queryOptions.town = town;
  }
  if (premises_type) {
    queryOptions.premises_type = premises_type;
  }
  if (posted_by) {
    queryOptions.posted_by = posted_by;
  }
  if (maxPrice && minPrice) {
    queryOptions.price = { $gt: parseInt(minPrice), $lt: parseInt(maxPrice) };
  } else if (maxPrice) {
    queryOptions.price = { $lt: parseInt(maxPrice) };
  } else if (minPrice) {
    queryOptions.price = { $gt: parseInt(minPrice) };
  }

  // first find record count to display
  this.find(queryOptions).count((e, totalRecordQty) => {
    if (e || !totalRecordQty) {
      logError(e, "Error: db/models/Property/ searchDetailed()");
      return cb(false);
    }
    this.find(queryOptions)
      .sort(sortObj)
      .limit(limitQty)
      .skip(skipQty)
      .then(properties => {
        return cb(properties, totalRecordQty);
      })
      .catch(e => {
        logError(e, "Error: db/models/Property/ searchDetailed()");
        return cb(false);
      });
  });
};

// Edit Property
PropertySchema.statics.editContent = function(body, cb) {
  const updateObj = {
    phone: body.phone,
    price: parseInt(body.price),
    detail: body.detail,
    advert_type: body.advert_type,
    premises_type: body.premises_type,
    rooms_qty: body.rooms_qty,
    posted_by: body.posted_by,
    region: body.region,
    town: body.town,
    age: parseInt(body.age),
    located_floor: parseInt(body.located_floor),
    //total_floor: parseInt(body.total_floor),
    type_chauffage: body.type_chauffage,
    type_desserte: body.type_desserte,
    expostion: body.exposition,

    actabilite: body.actabilite,
    rentabilite: parseInt(body.rentabilite),
    loyer_marche: parseInt(body.loyer_marche),
    loyer_pinel: parseInt(body.loyer_pinel),
    description: body.description,
    price_box: parseInt(body.price_box),
    price_parking: parseInt(body.price_parking),
    area_jardin: parseInt(body.area_jardin),
    area_balcon: parseInt(body.area_balcon),
    area_terrasse: parseInt(body.area_terrasse),
    proprietaire: body.proprietaire,
    constructeur: body.constructeur,
    n_lot:body.n_lot,

    total_bathroom: parseInt(body.total_bathroom),
    total_balcony: parseInt(body.total_balcony),
    area: body.area,
    furniture: body.furniture,
    garden: body.garden
  };
  this.findByIdAndUpdate(body._id, updateObj)
    .then(doc => {
      if (!doc) {
        return cb(false);
      }
      return cb(true);
    })
    .catch(e => {
      if (e) {
        return cb(false);
      }
    });
};

const Property = mongoose.model("propertyy", PropertySchema);

module.exports = Property;
