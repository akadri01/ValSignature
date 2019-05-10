import { locationTownSelectField, minPrice, maxPrice, premisesTypeSelectField } from "../shared/data.js";
import { filterFormSubmit } from "../../helpers/form-handles.js";
import { searchFormSubmit } from "../../helpers/form-handles.js";

export default () => {
  return (
    <section className="listing__filter">
            <form className="listing__filter__form" id="searchForm" onSubmit={searchFormSubmit}>
              
              <select name="saleorrent">
                  <option value="sale">HABITER</option>
                  <option value="rent">INVESTIR</option>
              </select>
              <input type="search" id="address-input" placeholder="         PARIS" />
              <input type="number" id="Prix" min="1" step="1000" placeholder="     Prix Max" />
              <button type="submit">RECHERCHE Classique</button>
              
            </form>
      <button
        className="listing__filter--expose-filter-btn"
        onClick={() => {
          document
            .getElementById("filterForm")
            .classList.toggle("display-filter-options");
        }}
      >
        Plus de critères
      </button>
      <form
        className="listing__filter-form default-redux-form"
        id="filterForm"
        onSubmit={filterFormSubmit}
      >
        <div className="redux-input-container">
          <label>Type de biens</label>
          <select name="premises_type">
            <option value="house" selected>
              Maison
            </option>
            <option value="flat">Appartement</option>
            <option value="office">Bureau</option>
            <option value="land">terrain</option>
            <option value="building">local commercial</option>
            <option value="surface">surfaces diverses</option>
            <option value="shop">parking</option>
          </select>
        </div>
        <div className="redux-input-container">
          <label>Type de contrat</label>
          <select name="advert_type">
            <option value="sale" selected>
              Achat
            </option>
            <option value="rent">Location</option>
          </select>
        </div>
        <div className="redux-input-container">
          <label>Surface minimale de</label>
          <select name="premises_type">
            <option value="house" selected>
              50 m²
            </option>
            <option value="flat">60 m²</option>
            <option value="office">70 m²</option>
            <option value="land">80 m²</option>
            <option value="building">100 m²</option>
            <option value="surface">200 m²</option>
            <option value="shop">+ 300 m²</option>
          </select>
        </div>
        <div className="redux-input-container">
          <label>Nombre de pièces</label>
          <select name="premises_type">
            <option value="house" selected>
              1
            </option>
            <option value="flat">2</option>
            <option value="office">3</option>
            <option value="land">4</option>
            <option value="building">5</option>
            <option value="surface">6</option>
            <option value="shop">7+</option>
          </select>
        </div>
        <div className="redux-input-container">
          <label>Situé au minimum au</label>
          <select name="premises_type">
            <option value="house" selected>
              1er étage
            </option>
            <option value="flat">2</option>
            <option value="office">3</option>
            <option value="land">4</option>
            <option value="building">5</option>
            <option value="surface">6</option>
            <option value="shop">7+</option>
          </select>
        </div>
        
        
        
        <button className="listing__filter-form-btn">Recherche avancée</button>
      </form>
    </section>
  );
};
