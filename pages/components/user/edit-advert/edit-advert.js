import React, { Component, Fragment } from "react";
import Router from "next/router";
import { reduxForm, Field } from "redux-form";
import { required, email, length, confirmation } from "redux-form-validators";
import { popupWindow } from "../../../helpers/popup.js";
import { delay } from "../../../helpers/delay.js";
import { displayLoader, removeLoader } from "../../../helpers/btn-loader.js";
import { saveUserDataToLocalStorage } from "../../../helpers/localStorage.js";
import PreviousPage from "../../shared/previous-page.js";
import {
  renderFormInput,
  renderSelectField,
  renderTextarea
} from "../../../helpers/reduxForm";
import { editAdvert } from "../../../redux/actions";
import {
  premisesTypeSelectField,
  featuresCheckboxFieldList,
  yesNoSelectField,
  purposeSelectField,
  balconyQtySelectField,
  bathroomQtySelectField,
  floorQtySelectField,
  toiletQtySelectField,
  type_chauffageSelectField,
  type_desserteSelectField,
  expositionSelectField,
  postedBySelectField,
  premisesAgeSelectField,
  roomsSelectField,
  locationRegionSelectField,
  locationTownSelectField
} from "../../shared/data";

class EditAdvert extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  editAd = async formValues => {
    displayLoader("#editAdvertSubmit");
    const { payload } = await this.props.dispatch(editAdvert(formValues));
    removeLoader("#editAdvertSubmit");
    if (!payload.success) {
      return Router.push(
        "/user/adverts?popup=Unfortunately%20we%20were%20not%20able%20to%20edit%20your%20ad.%20Please%20try%20again%20later."
      );
    }
    Router.push("/user/adverts?popup=Advert%20is%20updated!");
  };
  componentWillMount() {
    // initialize form values
    const {
      advert_type,
      area,
      age,
      date,
      date_livraison,
      detail,
      features,
      images,
      img_directory,
      located_floor,
      phone,
      premises_type,
      price,
      reference,
      region,
      posted_by,
      furniture,
      garden,
      rooms_qty,
      title,
      total_balcony,
      total_bathroom,
      //total_floor,
      type_chauffage,
      type_desserte,
      exposition,
  
      actabilite,
      rentabilite,
      loyer_marche,
      loyer_pinel,
      price_box,
      price_parking,
      area_jardin,
      area_balcon,
      area_terrasse,
      proprietaire,
      constructeur,
      n_lot,
  
      //proximite_com,
      town,
      _id
    } = this.props.property;
    this.props.initialize({
      advert_type,
      area,
      age,
      date,
      date_livraison,
      detail,
      features,
      images,
      img_directory,
      located_floor,
      phone,
      premises_type,
      price,
      reference,
      region,
      posted_by,
      furniture,
      garden,
      rooms_qty,
      title,
      total_balcony,
      total_bathroom,
      //total_floor,
      type_chauffage,
      type_desserte,
      exposition,
  
      actabilite,
      rentabilite,
      loyer_marche,
      loyer_pinel,
      price_box,
      price_parking,
      area_jardin,
      area_balcon,
      area_terrasse,
      proprietaire,
      constructeur,
      n_lot,
  
      //proximite_com,
      town,
      _id
    });
  }

  render() {
    const { img_directory, images, title } = this.props.property;
    return [
      <section className="edit-advert mobile-desktop-frame">
        <h1 className="section-main-title">Modifier les informations du biens</h1>
        <p className="edit-advert--warning">
          * Pour des raisons de sécturité, vous ne pouvez pas changer les images des biens
        </p>
        <div className="edit-advert__header">
          <img
            src={`/static/images/property-uploads/${img_directory}/${
              images[0]
            }`}
            alt="Advert main image"
            title="Advert main image"
            className="edit-advert__header-img"
          />
          <h3 className="edit-advert__header-title">{title}</h3>
        </div>
        <form
          onSubmit={this.props.handleSubmit(this.editAd)}
          id="editAdvertForm"
          className="console__post-advert-form default-redux-form"
        >
          <h3 className="console__post-advert-form-section-title">
            Informations
          </h3>
          <section className="desktop-flex-container">
          <div className="desktop-flex">
              <Field
                name="n_lot"
                label="N° lot (constructeur)"
                placeholder=" e.g. D5RT432"
                type="text"
                component={renderFormInput}
                validate={required()}
              />
            </div>
            
            <div className="desktop-flex">
              <Field
                name="constructeur"
                label="Constructeur"
                placeholder=" ..."
                type="text"
                component={renderFormInput}
                validate={required()}
              />
            </div>

            <div className="desktop-flex">
              <Field
                name="proprietaire"
                label="Proprietaire"
                placeholder=" ..."
                type="text"
                component={renderFormInput}
                validate={required()}
              />
            </div>

            <div className="desktop-flex">
              <Field
                name="town"
                //component={renderSelectField}
                label="Ville d'implantation"
                type="text"
                component={renderFormInput}
                validate={required()}
              >
              
              </Field>
            </div>

            <div className="desktop-flex">
              <Field
                name="premises_type"
                component={renderSelectField}
                label="Type de biens"
                validate={required()}
              >
                {premisesTypeSelectField.map(option => (
                  <option value={option.value} key={option.value}>
                    {option.text}
                  </option>
                ))}
              </Field>
            </div>
            <div className="desktop-flex">
              <Field
                name="advert_type"
                component={renderSelectField}
                label="Destination de biens"
                validate={required()}
              >
                {purposeSelectField.map(option => (
                  <option value={option.value} key={option.value}>
                    {option.text}
                  </option>
                ))}
              </Field>
            </div>

            <div className="desktop-flex">
              <Field
                name="area"
                label=" Surface habitable (m²)"
                placeholder=" 130.00"
                type="number"
                component={renderFormInput}
                validate={required()}
              />
            </div>

            <div className="desktop-flex">
              <Field
                name="area_terrasse"
                label=" Surface de la terrasse(m²)"
                placeholder=" 20.00"
                type="number"
                component={renderFormInput}
                validate={required()}
              />
            </div>

            <div className="desktop-flex">
              <Field
                name="area_balcon"
                label=" Surface du balcon (m²)"
                placeholder=" 20.00"
                type="number"
                component={renderFormInput}
                validate={required()}
              />
            </div>

            <div className="desktop-flex">
              <Field
                name="area_jardin"
                label=" Surface du jardin (m²)"
                placeholder="20.00"
                type="number"
                component={renderFormInput}
                validate={required()}
              />
            </div>

            
            <div className="desktop-flex">
              <Field
                name="price"
                label=" Prix (€)"
                placeholder="74300.00"
                type="number"
                component={renderFormInput}
                validate={required()}
              />
            </div>

            <div className="desktop-flex">
              <Field
                name="price_parking"
                label=" Prix du parking (€)"
                placeholder="1300.00"
                type="number"
                component={renderFormInput}
                validate={required()}
              />
            </div>

            <div className="desktop-flex">
              <Field
                name="price_box"
                label=" Prix du box (€)"
                placeholder=" 850000.00 "
                type="number"
                component={renderFormInput}
                validate={required()}
              />
            </div>

            <div className="desktop-flex">
              <Field
                name="located_floor"
                component={renderSelectField}
                label="Etage"
                type="number"
                component={renderFormInput}
                validate={required()}
              >
                
              </Field>
            </div>


            <div className="desktop-flex">
              <Field
                name="rooms_qty"
                //component={renderSelectField}
                label="Nombre de chambres"
                type="number"
                component={renderFormInput}
                validate={required()}
              >
                
              </Field>
            </div>
            
            <div className="desktop-flex">
              <Field
                name="total_bathroom"
                //component={renderSelectField}
                label="Nombre de salles de bains"
                type="number"
                component={renderFormInput}
                validate={required()}
              >
                
              </Field>
            </div>
            <div className="desktop-flex">
              <Field
                name="total_toilet"
                label="Nombre de salles d'eau"
                type="number"
                component={renderFormInput}
                validate={required()}
              >
                
              </Field>
            </div>

            <div className="desktop-flex">
              <Field
                name="exposition"
                component={renderSelectField}
                label="Exposition"
                validate={required()}
              >
                {expositionSelectField.map(option => (
                  <option value={option.value} key={option.value}>
                    {option.text}
                  </option>
                ))}
                
              </Field>
            </div>

            <div className="desktop-flex">
              <Field
                name="type_chauffage"
                component={renderSelectField}
                label="Type de chauffage"
                validate={required()}
              >
                {type_chauffageSelectField.map(option => (
                  <option value={option.value} key={option.value}>
                    {option.text}
                  </option>
                ))}
              </Field>
            </div>


            <div className="desktop-flex">
              <Field
                name="annee_construction"
                label="Année de construction"
                placeholder="YEAR"
                type="text"
                component={renderFormInput}
                validate={required()}
              />
            </div>
            

           

            <div className="desktop-flex">
              <Field
                name="type_desserte"
                component={renderSelectField}
                label="Type de desserte"
                validate={required()}
              >
                {type_desserteSelectField.map(option => (
                  <option value={option.value} key={option.value}>
                    {option.text}
                  </option>
                ))}
              </Field>
            </div>
            <div className="desktop-flex">
              <Field
                name="date_livraison"
                label=" Date de livraison"
                placeholder="JJ/MM/YEAR"
                type="text"
                component={renderFormInput}
                validate={required()}
              />
            </div>
          </section>
          <h3 className="console__post-advert-form-section-title">
            Description du bien
          </h3>
          <Field
            name="title"
            label="Titre"
            placeholder=" Appartement de luxe à paris"
            type="text"
            component={renderFormInput}
            validate={required()}
          />
          <Field
            name="detail"
            label=" Description du bien"
            placeholder=" ..."
            type="textarea"
            component={renderTextarea}
            validate={required()}
          />
          <Field
            name="description"
            label=" Description du programme"
            placeholder=" ..."
            type="textarea"
            component={renderTextarea}
            validate={required()}
          />
          <button
            className="console__post-advert-form-submit-btn"
            id="editAdvertSubmit"
            type="submit"
            disabled={this.props.submitting}
          >
            Post
          </button>
        </form>
        <br />
        <br />
        <br />
      </section>,
      <PreviousPage />
    ];
  }
}

EditAdvert = reduxForm({
  form: "EditAdvertForm"
})(EditAdvert);

export default EditAdvert;
