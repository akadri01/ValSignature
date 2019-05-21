import { Fragment } from "react";
import isPlural from "../../helpers/isPlural.js";

export default ({ searchResultsQty, notFoundStr, props, town }) => (
  
  <h1 className="listing--title">
    {searchResultsQty == 0 ? (
      `Aucun résultat pour ces critères de recherche ( ${notFoundStr} )`
    ) : (
      
      <Fragment>
          <h1 className="listing--title--titre">Valorys Signature – France – Ile de France – Paris</h1>
         {searchResultsQty} {isPlural(searchResultsQty, "Resultat", "s")} trouvé(s) pour {town}
         
      </Fragment>
      
    )}
  </h1>
);
