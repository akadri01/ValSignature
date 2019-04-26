import Link from "next/link";
import { searchFormSubmit } from "../../helpers/form-handles.js";



export default () => (
  <form className="banner__form" id="searchForm" onSubmit={searchFormSubmit}>
  
    <select name="saleorrent">
    <option value="sale">Habiter</option>
        <option value="rent">Investir</option>
    </select>
    <input type="search" id="address-input" placeholder="         Paris" />

    <script src="https://cdn.jsdelivr.net/npm/places.js@1.16.4"></script>
    <script src="/algolia.js"></script>
    
    <button type="submit">RECHERCHER</button>
    
  </form>

  
);
