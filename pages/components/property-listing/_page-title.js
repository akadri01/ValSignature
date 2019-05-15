import { Fragment } from "react";
import isPlural from "../../helpers/isPlural.js";

export default ({ searchResultsQty, notFoundStr }) => (
  <h1 className="listing--title">
    {searchResultsQty == 0 ? (
      `Aucun résultat pour ces critères de recherche ( ${notFoundStr} )`
    ) : (
      <Fragment>
        {searchResultsQty} {isPlural(searchResultsQty, "Resultat", "s")} trouvé(s)
      </Fragment>
    )}
  </h1>
);
