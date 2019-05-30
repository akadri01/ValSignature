import { locationTownSelectField, minPrice, maxPrice, premisesTypeSelectField } from "../shared/data.js";

import { filterFormSubmit } from "../../helpers/form-handles.js";
import { searchFormSubmit } from "../../helpers/form-handles.js";


export default () => {
  return (
    <div className="nav">

    <section className="listing__filter">
            <form className="listing__filter__form" id="searchForm" onSubmit={searchFormSubmit}>
              
              <select name="saleorrent">
                  <option value="sale">Habiter</option>
                  <option value="rent">Investir</option>
              </select>

              

              <input type="search" id="address-input" placeholder="         Localité" />
            
              <select name="premises_type">
              <option value="Maison" selected>
              Type de Biens
            </option>
            <option value="flat">Maison</option>
            <option value="flat">Appartement</option>
            <option value="office">Loft</option>
            <option value="land">Biens de prestige</option>
            <option value="land">Surfaces diverses</option>
              </select>

              <input type="number" id="Prix" min="1" step="1000" placeholder="     Budget " />

              <input name="advert_type" placeholder=" Surface en m²" type="number" min="20" max="1000"/> 


              <button type="submit">RECHERCHE CLASSIQUE</button>
              
              


            </form>
      
    </section>
    </div>
     );
    };