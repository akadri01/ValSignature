import React, {Component, Fragment } from "react";
import PreviousPage from "../shared/previous-page.js";

import { beautifyDate, beautifyPrice } from "../../helpers/beautify.js";
import Carousel from "../carousel/carousel.js";
import SocialMediaShare from "../social-media-share/social-media-share.js";
import {
  featuresCheckboxFieldList,
  premisesAgeSelectField,
  yesNoSelectField
} from "../shared/data.js";
const featuresList = featuresCheckboxFieldList.map(obj => obj.labelAndValue);


export default property => {
  console.log(property);
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
    user_email,
    user_name
  } = property;
  return (
    <Fragment>
      <section className="single-property-page mobile-desktop-frame">
        <section className="property">
          <div className="property__header">
            <div className="property__header-info">
              <h3>{title}</h3>
              <p>
                {town}
              </p>
            </div>
            <h2>{beautifyPrice(price)}</h2>
          </div>
          
          <Carousel images={images} directory={img_directory} />
          <div className="property__icons">
            <div className="property__icons-rooms icon-frame">
              <span>Nombre de chambres </span>
              <h3>{rooms_qty == 0 ? "No rooms" : rooms_qty}</h3>
            </div>
            <div className="property__icons-area icon-frame">
              <span>Sufrace </span>
              <h3>
                {area}M<sup>2</sup>
              </h3>
            </div>
            <div className="property__icons-floor icon-frame">
              <span>Situé au minimum au</span>
              <h3>{located_floor == 0 ? "Ground floor" : located_floor}</h3>
            </div>
          </div>
          <div className="property__info">
            <h2 className="property-default-title">General Information</h2>
            <div className="property__info-list">
              <ul>
                <li>
                  <span>Type de biens</span>
                  <b>{advert_type == "habiter" ? "Habiter" : "Investir"}</b>
                </li>

                <li>
                  <span>Type de biens</span>
                  <b>{premises_type}</b>
                </li>

                <li>
                  <span>Type desserte</span>
                  <b>{type_desserte}</b>
                </li>
                

                <li>
                  <span>Proprietaire</span>
                  <b>{proprietaire}</b>
                </li>
                <li>
                  <span>Constructeur</span>
                  <b>{constructeur}</b>
                </li>
                <li>
                  <span>N de lot (constructeur)</span>
                  <b>{n_lot}</b>
                </li>
                <li>
                  <span>Surface du balcon</span>
                  <b>{area_jardin}</b>
                </li>
                <li>
                  <span>Surface de la terrasse</span>
                  <b>{area_terrasse}</b>
                </li>
                <li>
                  <span>Surface du balcon</span>
                  <b>{area_balcon}</b>
                </li>

                <li>
                  <span>Rentabilité</span>
                  <b>{rentabilite}</b>
                </li>
                <li>
                  <span>Rentabilité</span>
                  <b>{rentabilite}</b>
                </li>
                <li>
                  <span>Actabilite</span>
                  <b>{actabilite}</b>
                </li>
                <li>
                  <span>Loyer_marche</span>
                  <b>{loyer_marche}</b>
                </li>
                <li>
                  <span>Loyer_pinel</span>
                  <b>{loyer_pinel}</b>
                </li>
               

                <li>
                  <span>Prix du box</span>
                  <b>{price_box}</b>
                </li>
                <li>
                  <span>Prix du parking</span>
                  <b>{price_parking}</b>
                </li>
               
             
                
                <li>
                  <span>Nombre de salle de bains</span>
                  <b>{total_bathroom == 0 ? "Pas de salle de bains" : total_bathroom}</b>
                </li>
                
              </ul>
              <ul>
                <li>
                  <span>Exposition</span>
                  <b>{exposition}</b>
                </li>
                <li>
                  <span>Type de chauffage</span>
                  <b>{type_chauffage}</b>
                </li>
                
                <li>
                  <span>Nombre de chambres</span>
                  <b>{rooms_qty == 0 ? "Pas de chambres" : rooms_qty}</b>
                </li>
                
                <li>
                  <span>Etage</span>
                  <b>{located_floor == 0 ? "Rez de chaussée" : located_floor}</b>
                </li>
                <li>
                  <span>Date de livraison</span>
                  <b>{date_livraison}</b>
                </li>
              </ul>
            </div>
          </div>
          <div className="property__features">
            <h2 className="property-default-title">Features</h2>
            <div className="property__features-list">
              {featuresList.map(feature => {
                const cssClass = features.includes(feature)
                  ? "selected-feature"
                  : "non-selected-feature";
                return <div className={cssClass}>{feature}</div>;
              })}
            </div>
          </div>
          <div className="property__details">
            <h2 className="property-default-title">Plus de détails</h2>
            <h4>{title}</h4>
            <pre dangerouslySetInnerHTML={{ __html: detail }} />
          </div>
        </section>
        <aside className="prop-sidebar">
          <button
            className="prop-sidebar-print-btn sidebar-btns"
            onClick={() => {
              window.print();
            }}
          >
            Print
          </button>
          <div className="prop-sidebar__share">
            <button
              className="prop-sidebar__share-btn sidebar-btns"
              onClick={() => {
                document
                  .getElementById("socialMediaHidder")
                  .classList.toggle("expose-social-media-share-icons");
              }}
            >
              Partager
            </button>
            <div id="socialMediaHidder">
              <SocialMediaShare />
            </div>
          </div>
          <div className="prop-sidebar__contact">
            <h4 className="prop-sidebar__contact-name">{user_name}</h4>
            <div className="prop-sidebar__contact-email">
              <button
                className="prop-sidebar__contact-email-btn"
                onClick={() => {
                  document
                    .getElementById("emailHidden")
                    .classList.toggle("expose-contact-icons");
                }}
              >
                Nous contacter
              </button>
              <div
                className="prop-sidebar__contact-email-hidden"
                id="emailHidden"
              >
                {user_email}
              </div>
            </div>
            <div className="prop-sidebar__contact-phone">
              <button
                className="prop-sidebar__contact-phone-btn"
                onClick={() => {
                  document
                    .getElementById("phoneHidden")
                    .classList.toggle("expose-contact-icons");
                }}
              >
                Par téléphone
              </button>
              <div
                className="prop-sidebar__contact-phone-hidden"
                id="phoneHidden"
              >
                {phone}
              </div>
            </div>
          </div>
          <div className="prop-sidebar__reference">
            <div>
              N° de lot <b>{reference}</b>
            </div>
            <div>
              Date Posté <b>{beautifyDate(date, true)}</b>
            </div>
          </div>
        </aside>
      </section>
      <PreviousPage />
    </Fragment>
  );
};
