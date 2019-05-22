import Link from "next/link";
import { searchFormSubmit } from "../../helpers/form-handles.js";
import Angolia from "./algolia";



export default () => (
  <form className="banner__form" id="searchForm" onSubmit={searchFormSubmit}>
  
    <select name="saleorrent">
    <option value="sale">Habiter</option>
        <option value="rent">Investir</option>
    </select>
    <input type="search" id="address-input" placeholder="         Localité" />

    
    
    <button type="submit">RECHERCHER</button>
    
  </form>

  
);
