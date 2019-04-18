import Link from "next/link";
import { searchFormSubmit } from "../../helpers/form-handles.js";

export default () => (
  <form className="banner__form" id="searchForm" onSubmit={searchFormSubmit}>
  
    <select name="location">
      <option value="">Localité</option>
      <optgroup label="Villes">
        <option value="TOWN_Paris">Paris</option>
        <option value="TOWN_La Rochelle">La Rochelle</option>
        <option value="TOWN_Bordeaux">Bordeaux</option>
        <option value="TOWN_Nice">Nice</option>
        <option value="TOWN_Nimes">Nimes</option>
        <option value="TOWN_Bruxelles">Bruxelles</option>
        <option value="TOWN_Basel">Basel</option>
      </optgroup>
      <optgroup label="Regions">
        <option value="REGION_greater_accra">Iles de France</option>
        <option value="REGION_central">Centre</option>
        <option value="REGION_eastern">Poitou-charentes</option>
        <option value="REGION_western">Charente-maritimes</option>
        <option value="REGION_ashanti">Sud-Ouest</option>
        <option value="REGION_northern">Nord</option>
      </optgroup>
    </select>
    <div className="banner__form-radios">
      <div className="banner__form-radios-radio">
        <input
          id="forRent"
          type="radio"
          name="advert_type"
          value="sale"
          defaultChecked={true}
        />
        <label htmlFor="forRent">Habiter</label>
      </div>
      <div className="banner__form-radios-radio">
        <input id="forSale" type="radio" name="advert_type" value="rent" />
        <label htmlFor="forSale">Investir</label>
      </div>
    </div>
    <button type="submit">Rechercher</button>
    <button type="submit">Recherche avancée</button>
  </form>
);
