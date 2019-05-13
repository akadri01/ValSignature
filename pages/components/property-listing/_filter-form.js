import { locationTownSelectField, minPrice, maxPrice, premisesTypeSelectField } from "../shared/data.js";

import { filterFormSubmit } from "../../helpers/form-handles.js";
import { searchFormSubmit } from "../../helpers/form-handles.js";
import {
  renderCheckbox
} from "../../helpers/reduxForm";
import {
  featuresCheckboxFieldList
} from "../shared/data";

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
        Chasseur virtuel
      </button>
      <form
        className="listing__filter-form default-redux-form"
        id="filterForm"
        onSubmit={filterFormSubmit}
      >
        <div className="redux-input-container">
          <label>Type de biens:</label>
          <select name="premises_type">
            <option value="house" selected>
              Maison
            </option>
            <option value="flat">Appartement</option>
            <option value="office">Loft</option>
            <option value="land">Biens de prestige</option>
          </select>
        </div>
        <div className="redux-input-container">
                    <label>Nombre de pièces:</label>
                    <input name="advert_type" placeholder="minimum" type="number" min="1" max="10"/> 
        </div>
        <div className="redux-input-container">
                    <label> </label>
                    <input name="advert_type" placeholder="maximum" type="number" min="1" max="10"/> 
        </div>
        <div className="redux-input-container">
                    <label>Surface en m²:</label>
                    <input name="advert_type" placeholder="minimale" type="number" min="20" max="1000"/> 
        </div>
        <div className="redux-input-container">
                    <label> </label>
                    <input name="advert_type" placeholder="maximale" type="number" min="20" max="1000"/>            
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

        <div className="redux-input-container">
                    <label>Rez de chaussée:</label>
                    <input name="advert_type" type="checkbox"/>
                    <label for="scales"></label>                 
        </div>

        <div className="redux-input-container">
                    <label>biens exposés Nord:</label>
                    <input name="advert_type" type="checkbox"/>
                    <label for="scales"></label>                 
        </div>

        <div className="redux-input-container">
                    <label>Cuisine Fermée:</label>
                    <input name="advert_type" type="checkbox"/>
                    <label for="scales"></label>                 
        </div>

        
        <button className="listing__filter-form-btn">Recherche avancée</button>
      </form>
    </section>
  );
};
