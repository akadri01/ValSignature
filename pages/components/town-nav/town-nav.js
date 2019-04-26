import Link from "next/link";
import { Picture } from "react-responsive-picture";

const insertImageFrame = (link, locationName, mobileImg, desktopImg) => (
  <Link href={link}>
    <a className="town-nav__town">
      <div className="town-nav__town-content">
        <h2>{locationName}</h2>
        
      </div>
      <Picture
        sources={[
          {
            srcSet: `/static/images/photos/${mobileImg}`,
            media: "(max-width: 890px)"
          },
          {
            srcSet: `/static/images/photos/${desktopImg}`,
            type: "image/jpg"
          }
        ]}
        style={{ width: "100%" }}
        alt="Rechercher des biens en France"
      />
    </a>
  </Link>
);

const _paris = insertImageFrame(
  "/properties/latest?town=paris",
  "PARIS",
  "paris-desktop.jpg",
  "paris-desktop.jpg"
);
const _larochelle = insertImageFrame(
  "/properties/latest?town=larochelle",
  "NIICE",
  "lr-desktop.jpg",
  "lr-desktop.jpg"
);
const _bordeaux = insertImageFrame(
  "/properties/latest?town=bordeaux",
  "BORDEAUX",
  "bordeaux-desktop.jpg",
  "bordeaux-desktop.jpg"
);
const _nice = insertImageFrame(
  "/properties/latest?town=nice",
  "NICE",
  "nice-desktop.jpg",
  "nice-desktop.jpg"
);
const _nimes = insertImageFrame(
  "/properties/latest?town=nimes",
  "NIMES",
  "nimes-desktop.jpg",
  "nimes-desktop.jpg"
);
const _marseille = insertImageFrame(
  "/properties/latest?town=marseille",
  "MARSEILLE",
  "marseille-desktop.jpg",
  "marseille-desktop.jpg"
);
const _cannes = insertImageFrame(
  "/properties/latest?town=cannes",
  "CANNES",
  "cannes-desktop.jpg",
  "cannes-desktop.jpg"
);
const _strasbourg = insertImageFrame(
  "/properties/latest?town=strasboourg",
  "STRASBOURG",
  "strasbourg-desktop.jpg",
  "strasbourg-desktop.jpg"
);
const _strasbourg1 = insertImageFrame(
  "/properties/latest?town=strasboourg",
  "STRASBOURG",
  "strasbourg1-desktop.jpg",
  "strasbourg1-desktop.jpg"
);
const _strasbourg2 = insertImageFrame(
  "/properties/latest?town=strasboourg",
  "",
  "strasbourg2-desktop.jpg",
  "strasbourg2-desktop.jpg"
);
const _lyon1 = insertImageFrame(
  "/properties/latest?town=lyon",
  "LYON",
  "lyon1-desktop.jpg",
  "lyon1-desktop.jpg"
);
const _lyon2 = insertImageFrame(
  "/properties/latest?town=lyon",
  "",
  "lyon2-desktop.jpg",
  "lyon2-desktop.jpg"
);
const _toulouse = insertImageFrame(
  "/properties/latest?town=toulouse",
  "TOULOUSE",
  "toulouse-desktop.jpg",
  "toulouse-desktop.jpg"
);

export default () => (
  <section className="town-nav mobile-desktop-frame">
     
    <div className="default-group">
      <img src="/static/images/icons/favicon-icon.png" alt="Icon" />
      <p> RECHERCHER DES BIENS EN FRANCE OU A L’ETRANGER </p>
      <h1>Toutes nos opportunités immobilières pour habiter ou investir</h1>
      <h1>Biens de prestige, maisons, appartements, surfaces diverses, lofts, bureaux, locaux commerciaux,  parkings!</h1>
      <p />
      <img src="/static/images/icons/favicon-icon.png" alt="Logo" />
      
      <p />
      <p />
      <p />
      
    </div>
    <div className="top">
      {_paris}
      {_lyon1}
      {_lyon2}
    </div>
      
    
    
    <div className="middle">
      {_bordeaux}
      {_cannes}
      {_nimes}
    </div>
    <div className="bottom">{_strasbourg1}{_strasbourg2}{_toulouse}</div>
  </section>
);
