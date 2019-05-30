import React, { Component, Fragment } from "react";
import Router from "next/router";
import { reduxForm, Field } from "redux-form";
import { required, email, length, confirmation } from "redux-form-validators";
import { popupWindow } from "../../../helpers/popup.js";
import { delay } from "../../../helpers/delay.js";
import { displayLoader, removeLoader } from "../../../helpers/btn-loader.js";
import { saveUserDataToLocalStorage } from "../../../helpers/localStorage.js";
import {
  RenderFileInput,
  renderFormInput,
  renderSelectField,
  renderTextarea,
  renderCheckbox
} from "../../../helpers/reduxForm";
import { postAdvert } from "../../../redux/actions";
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

class PostAdvert extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  postAd = async formValues => {
    displayLoader("#postAdvertSubmit");
    const { payload } = await this.props.dispatch(postAdvert(formValues));
    removeLoader("#postAdvertSubmit");
    if (!payload._id) {
      return popupWindow(
        "postAdvertForm",
        "Unfortunately we were not able to post your ad. Please try again later."
      );
    }
    saveUserDataToLocalStorage(payload);
    popupWindow("postAdvertForm", "Congratulations, le bien est mis en ligne");
    // await delay(3500);
    // payload.posts_allowed > 20
       //? Router.push("/user/topup")
      // : window.location.reload(false);
  };

  render() {
    return (
      <Fragment>
        <h1 className="section-main-title">Create new advert</h1>
        <form
          onSubmit={this.props.handleSubmit(this.postAd)}
          id="postAdvertForm"
          className="console__post-advert-form default-redux-form"
        >
          <h3 className="console__post-advert-form-section-title">
            General information
          </h3>
          <section className="desktop-flex-container">
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
                label="Type de biens"
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
                name="rooms_qty"
                component={renderSelectField}
                label="Nombre de chambres min"
                validate={required()}
              >
                {roomsSelectField.map(option => (
                  <option value={option.value} key={option.value}>
                    {option.text}
                  </option>
                ))}
              </Field>
            </div>
            
            <div className="desktop-flex">
              <Field
                name="town"
                component={renderSelectField}
                label="Ville"
                validate={required()}
              >
                {locationTownSelectField.map(option => (
                  <option value={option.value} key={option.value}>
                    {option.text}
                  </option>
                ))}
              </Field>
            </div>
            <div className="desktop-flex">
              <Field
                name="age"
                component={renderSelectField}
                label="Ancienneté"
                validate={required()}
              >
                {premisesAgeSelectField.map((option, i) => (
                  <option value={option.value} key={option.value + i}>
                    {option.text}
                  </option>
                ))}
              </Field>
            </div>
            <div className="desktop-flex">
              <Field
                name="located_floor"
                component={renderSelectField}
                label="Situé au minimum au"
                validate={required()}
              >
                {floorQtySelectField.map(option => (
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
                name="total_bathroom"
                component={renderSelectField}
                label="Nombre de salle de bains min"
                validate={required()}
              >
                {bathroomQtySelectField.map(option => (
                  <option value={option.value} key={option.value}>
                    {option.text}
                  </option>
                ))}
              </Field>
            </div>
            <div className="desktop-flex">
              <Field
                name="total_toilet"
                component={renderSelectField}
                label="Nombre de salle d'eau min"
                validate={required()}
              >
                {toiletQtySelectField.map(option => (
                  <option value={option.value} key={option.value}>
                    {option.text}
                  </option>
                ))}
              </Field>
            </div>
            <div className="desktop-flex">
              <Field
                name="total_balcony"
                component={renderSelectField}
                label="Balcon"
                validate={required()}
              >
                {balconyQtySelectField.map(option => (
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
                validate={[required(), length({ min: 2, max: 11 })]}
              />
            </div>

            <div className="desktop-flex">
              <Field
                name="price"
                label=" Prix (€)"
                placeholder=" e.g. 85000"
                type="number"
                component={renderFormInput}
                validate={[required(), length({ min: 2, max: 11 })]}
              />
            </div>
            <div className="desktop-flex">
              <Field
                name="area"
                label=" Surface min (m²)"
                placeholder=" e.g. 130"
                type="number"
                component={renderFormInput}
                validate={[required(), length({ min: 1, max: 9 })]}
              />
            </div>
          </section>
          <h3 className="console__post-advert-form-section-title">
            Description
          </h3>
          <Field
            name="title"
            label="Titre"
            placeholder=" Appartement de luxe à paris"
            type="text"
            component={renderFormInput}
            validate={[required(), length({ min: 10, max: 110 })]}
          />
          <Field
            name="detail"
            label=" Description"
            placeholder=" ..."
            type="textarea"
            component={renderTextarea}
            validate={[required(), length({ min: 10, max: 3000 })]}
          />
          <h3 className="console__post-advert-form-section-title">Features</h3>
          <div className="console__post-advert-form-features-container">
            {featuresCheckboxFieldList.map(({ labelAndValue, idAndName }) => {
              return (
                <Field
                  key={idAndName}
                  name={idAndName}
                  labelAndValue={labelAndValue}
                  id={idAndName}
                  component={renderCheckbox}
                />
              );
            })}
          </div>
          <h3 className="console__post-advert-form-section-title">
            Upload images
          </h3>
          <Field
            name="mainImage"
            label=" Image principale"
            component={RenderFileInput}
          />
          <Field
            name="images"
            label=" Autre images"
            isMultiple={true}
            component={RenderFileInput}
          />
          <Field
            name="images"
            label="3D images"
            isMultiple={true}
            component={RenderFileInput}
          />
          <Field
            name="images"
            label="360 D images"
            isMultiple={true}
            component={RenderFileInput}
          />
          <button
            className="console__post-advert-form-submit-btn"
            id="postAdvertSubmit"
            type="submit"
            disabled={this.props.submitting}
          >
            Post
          </button>
        </form>
      </Fragment>
    );
  }
}

PostAdvert = reduxForm({
  form: "PostAdvertForm"
})(PostAdvert);

export default PostAdvert;
