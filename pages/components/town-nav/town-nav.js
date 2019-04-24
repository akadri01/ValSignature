import Link from "next/link";
import { Picture } from "react-responsive-picture";

const insertImageFrame = (link, locationName, mobileImg, desktopImg) => (
  <Link href={link}>
    <a className="town-nav__town">
      <div className="town-nav__town-content">
        <h2>{locationName}</h2>
        <p>-</p>
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
  "Paris",
  "paris-mobile.jpg",
  "paris-desktop.jpg"
);
const _larochelle = insertImageFrame(
  "/properties/latest?town=larochelle",
  "Nice",
  "lr-mobile.jpg",
  "lr-desktop.jpg"
);
const _bordeaux = insertImageFrame(
  "/properties/latest?town=bordeaux",
  "Bordeaux",
  "bordeaux-mobile.jpg",
  "bordeaux-desktop.jpg"
);
const _nice = insertImageFrame(
  "/properties/latest?town=nice",
  "Nice",
  "nice-mobile.jpg",
  "nice-desktop.jpg"
);
const _nimes = insertImageFrame(
  "/properties/latest?town=nimes",
  "Nimes",
  "nimes-mobile.jpg",
  "nimes-desktop.jpg"
);
const _marseille = insertImageFrame(
  "/properties/latest?town=marseille",
  "Marseille",
  "marseille-mobile.jpg",
  "marseille-desktop.jpg"
);
const _cannes = insertImageFrame(
  "/properties/latest?town=cannes",
  "Cannes",
  "marseille-mobile.jpg",
  "cannes-desktop.jpg"
);
const _strasbourg = insertImageFrame(
  "/properties/latest?town=strasboourg",
  "Strasburg",
  "strasbourg-mobile.jpg",
  "strasbourg-desktop.jpg"
);
const _lyon1 = insertImageFrame(
  "/properties/latest?town=lyon",
  "Lyon",
  "strasbourg-mobile.jpg",
  "lyon1-desktop.jpg"
);
const _lyon2 = insertImageFrame(
  "/properties/latest?town=lyon",
  "",
  "strasbourg-mobile.jpg",
  "lyon2-desktop.jpg"
);

export default () => (
  <section className="town-nav mobile-desktop-frame">
    <div className="default-group">
      <p> RECHERCHER DES BIENS EN FRANCE OU A L’ETRANGER </p>
      <h1>Toutes nos opportunités immobilières pour habiter ou investir</h1>
      <h1>(Biens de prestige, maisons, appartements, surfaces diverses, lofts, bureaux, locaux commerciaux,  parkings)</h1>
      
      
      <hr />
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
    <div className="bottom">{_strasbourg}</div>
  </section>
);
