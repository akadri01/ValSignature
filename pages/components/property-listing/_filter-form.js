import { locationTownSelectField, minPrice, maxPrice, premisesTypeSelectField } from "../shared/data.js";

import { filterFormSubmit } from "../../helpers/form-handles.js";
import { searchFormSubmit } from "../../helpers/form-handles.js";


export default () => {
  return (
    <div className="nav">

    <section className="listing__filter">
            <form className="listing__filter__form" id="searchForm" onSubmit={searchFormSubmit}>
              
              <select name="saleorrent">
                  <option value="sale">HABITER</option>
                  <option value="rent">INVESTIR</option>
              </select>

              

              <input type="search" id="address-input" placeholder="         PARIS" />
            
              <select name="premises_type">
              <option value="house" selected>
              MAISON
            </option>
            <option value="flat">APPARTEMENT</option>
            <option value="office">LOFT</option>
            <option value="land">BIENS DE PRESTIGE</option>
              </select>

              <input type="number" id="Prix" min="1" step="1000" placeholder="     BUDGET MAX" />

              <input name="advert_type" placeholder=" SURFACE MINIMALE EN M²" type="number" min="20" max="1000"/> 


              <button type="submit">RECHERCHE CLASSIQUE</button>
              
              


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
          <label></label>
          <select name="premises_type">
            <option value="house" selected>
            CRITERES PRIORITAIRES
            </option>
            <option value="flat">TEST 2</option>
            <option value="office">TEST 3</option>
            <option value="land">TEST 4</option>
            <option value="building"> TEST 5</option>
            <option value="surface"> TEST 6</option>
            <option value="shop">TEST 7+</option>
          </select>
        </div>

        <div className="redux-input-container">
          <label></label>
          <select name="premises_type">
            <option value="house" selected>
            CRITERES FACULTATIFS
            </option>
            <option value="flat">TEST 2</option>
            <option value="office">TEST 3</option>
            <option value="land">TEST 4</option>
            <option value="building">TEST 5</option>
            <option value="surface">TEST 6</option>
            <option value="shop">TEST 7+</option>
          </select>
        </div>

        <div className="redux-input-container">
          <label></label>
          <select name="premises_type">
            <option value="house" selected>
            CRITERES REDHIBITOIRES
            </option>
            <option value="flat">TEST 2</option>
            <option value="office">TEST 3</option>
            <option value="land">TEST 4</option>
            <option value="building">TEST 5</option>
            <option value="surface">TEST 6</option>
            <option value="shop">TEST 7+</option>
          </select>
        </div>
    
    <button className="listing__filter-form-btn">Recherche avancée</button>
    </form>
    </section>
    </div>
    
  );
};
