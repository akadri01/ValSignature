import React, { Component, Fragment } from "react";
import { reduxForm, Field } from "redux-form";
import { required, email, length, confirmation } from "redux-form-validators";
import Router from "next/router";
import axios from "axios";
import { connect } from "react-redux";
import { popupWindow } from "../../helpers/popup.js";
import { renderFormInput, renderTextarea } from "../../helpers/reduxForm";
import { postEnquire } from "../../redux/actions";

class ContactUsForm extends Component {
  render() {
    return (
      <section className="contactus mobile-desktop-frame" id="contact-form">
        <h1>Contact us</h1>
        <div className="contactus__info">
          <div>
            <b>Phone</b> &nbsp;+33769855801
          </div>
          <div>
            <b>Email</b>&nbsp;&nbsp;&nbsp; info@info.com
          </div>
        </div>
        {!this.props.enquire ? (
          <form
            className="default-redux-form"
            id="postEnquireForm"
            onSubmit={this.props.handleSubmit(this.receieveEnquire)}
          >
            <div className="desktop-flex">
              <Field
                name="name"
                label=" Nom"
                placeholder=" Your name"
                type="text"
                component={renderFormInput}
                validate={[required(), length({ min: 2, max: 30 })]}
              />
            </div>
            <div className="desktop-flex">
              <Field
                name="contact"
                label=" Phone or Email"
                placeholder=" email"
                type="text"
                component={renderFormInput}
                validate={[required(), length({ min: 6, max: 40 })]}
              />
            </div>
            <Field
              name="text"
              label="Your message"
              placeholder=" ..."
              type="textarea"
              component={renderTextarea}
              validate={[required(), length({ min: 10, max: 3000 })]}
            />
            <button type="submit" disabled={this.props.submitting}>
              Envoyer
            </button>
          </form>
        ) : (
          <div style={{ "margin-bottom": "40vh" }} />
        )}
      </section>
    );
  }
  receieveEnquire = async formValues => {
    const { payload } = await this.props.dispatch(postEnquire(formValues));
    const msg = payload
      ? "We have received your enquire, please allow us 24 hours to process."
      : "Unfortunately we were not able to receive your enquire. Please try again later.";
    return popupWindow("postEnquireForm", msg);
  };
}

ContactUsForm = reduxForm({
  form: "ContactUsForm"
})(ContactUsForm);

function mapStateToProps({ enquire }) {
  return { enquire };
}

export default connect(mapStateToProps)(ContactUsForm);
