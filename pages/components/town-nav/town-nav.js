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
  "La Rochelle",
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

export default () => (
  <section className="town-nav mobile-desktop-frame">
    <div className="default-group">
      <h1>Rechercher des biens en France</h1>
      <p>Propriétés de prestige en France </p>
      <hr />
    </div>
    <div className="top">
      {_paris}
      {_larochelle}
    </div>
    <div className="middle">
      {_bordeaux}
      {_nice}
      {_nimes}
    </div>
    <div className="bottom">{_marseille}</div>
  </section>
);
