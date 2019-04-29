import Link from "next/link";
import { searchFormSubmit } from "../../helpers/form-handles.js";



export default () => (
  <form className="banner__form" id="searchForm" onSubmit={searchFormSubmit}>
  
    <select name="saleorrent">
    <option value="sale">HABITER</option>
        <option value="rent">INVESTIR</option>
    </select>
    <input type="search" id="address-input" placeholder="         PARIS" />

    
    
    <button type="submit">RECHERCHER</button>
    
  </form>

  
);
