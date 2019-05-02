import Link from "next/link";
import { Fragment } from "react";
import { towns, seoLinks, typeLinks } from "../shared/data";

const createLink = (base, link, key, val) => (
  <Link
    href={`/${base}${key}=${val ? val.toLowerCase() : link.toLowerCase()}`}
    key={link}
  >
    <a>{link}</a>
  </Link>
);

export default () => (
  <Fragment>
    <footer className="footer">
      <div className="mobile-desktop-frame">
        <div className="footer__top">
          <div className="footer__top-locations">
            <h2>OPPORTUNITES POUR HABITER OU INVESTIR DISPONIBLES A </h2>
            <div>
              {towns.map(link => {
                return createLink("properties/latest?", link, "town");
              })}
            </div>
          </div>
          <div className="footer__top-types">
            <h2>NOTRE SELECTION A PARIS</h2>
            <div>
              {seoLinks.map((link, i) => {
                return createLink(
                  "properties/latest?town=paris&",
                  link,
                  "premises_type",
                  typeLinks[i]
                );
              })}
            </div>
          </div>
          <div className="footer__top-advert">
            <h2>CONFIEZ-NOUS LA VENTE DE VOTRE BIEN</h2>
            <p>
              
              <img src="/static/images/icons/icon-small.png" alt="Icon" />
            </p>
            <form>
              <label>Faites estimer votre bien</label>
              <label type="number" placeholder=" Faites-estimer votre bien" />
              <Link href="/user/auth">
                <a>
                  <button type="button">Connexion</button>
                </a>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </footer>
    <section className="footer-end">
      <div className="mobile-desktop-frame">
        <img
          src="/static/images/icons/logo-small.png"
          alt="ValorysSignature"
          width="150px"
        />
        <div className="footer-end__links">
          <Link href="/contact-us">
            <a>Contactez-nous</a>
          </Link>
          <Link href="/faq">
            <a>FAQ</a>
          </Link>
          <Link href="/about-us">
            <a>Qui sommes-nous?</a>
          </Link>
          <Link href="/terms">
            <a>Conditions d'utilisation</a>
          </Link>
          <Link href="/privacy-policy">
            <a>Politique de confidentialité</a>
          </Link>
        </div>
      </div>
    </section>
  </Fragment>
);
