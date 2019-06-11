import { featuresCheckboxFieldList } from "../components/shared/data";
import { getUserDataFromLocalStorage } from "./localStorage";

const sortFeatures = formValues => {
  const arr = [];
  featuresCheckboxFieldList.forEach(obj => {
    if (formValues.hasOwnProperty(obj.idAndName)) {
      arr.push(obj.labelAndValue);
    }
  });
  return arr;
};

export default formValues => {
  const formData = new FormData();
  const { _id, name, email } = getUserDataFromLocalStorage();

  formData.append(
    "inputValues",
    JSON.stringify({
      advert_type: formValues.advert_type,
      //age: formValues.age,
      area: formValues.area,
      detail: formValues.detail,
      features: sortFeatures(formValues),
      furniture: formValues.furniture,
      garden: formValues.garden,
      located_floor: formValues.located_floor,
      phone: formValues.phone,
      posted_by: formValues.posted_by,
      premises_type: formValues.premises_type,
      price: formValues.price,
      region: formValues.region,
      rooms_qty: formValues.rooms_qty,
      title: formValues.title,
      //total_balcony: formValues.total_balcony,
      total_bathroom: formValues.total_bathroom,
      //total_floor: formValues.total_floor,
      //proximite_com:formValues.proximite_com,
      type_dessert: formValues.type_dessert,
      type_chauffage: formValues.type_chauffage,
      exposition: formValues.exposition,

      
     actabilite: formValues.actabilite,
      rentabilite: formValues.rentabilite,
      loyer_marche: formValues.loyer_marche,
      loyer_pinel: formValues.loyer_pinel,
      description: formValues.description,
      price_box: formValues.price_box,
      price_parking: formValues.price_parking,
      area_jardin: formValues.area_jardin,
      area_balcon: formValues.area_balcon,
      area_terrasse: formValues.area_terrasse,
      proprietaire: formValues.proprietaire,
      constructeur: formValues.constructeur,
      n_lot: formValues.n_lot,

      town: formValues.town,
      userName: name,
      userId: _id,
      userEmail: email
    })
  );
  // append if any image uploaded
  if (formValues.mainImage || formValues.images)  {
    formValues.mainImage =
      !formValues.mainImage || !formValues.mainImage.length
        ? [formValues.images[0]]
        : formValues.mainImage;
    const allImages =
      formValues.images && formValues.images.length
        ? [formValues.mainImage[0], ...formValues.images]
        : [formValues.mainImage[0]];
    allImages.forEach((singleImg, i) => {
      const imgName = "img" + i;
      formData.append(imgName, singleImg);
    });
    
  }
  return formData;
};