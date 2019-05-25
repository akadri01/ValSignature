import React, { Fragment, Component } from "react";
import Link from "next/link";
import associateImgPath from "../../helpers/associate-image-path.js";
import isPlural from "../../helpers/isPlural.js";
import { beautifyPrice, beautifyDate } from "../../helpers/beautify.js";
import PaginationBar from "../pagination-bar/pagination-bar.js";
import { getSortQueryFromLocalStorage } from "../../helpers/localStorage";
import createFailedSearchInfo from "../../helpers/create-failed-search-info.js";
import PageInfoTitle from "./_page-title.js";
import SortForm from "./_sort-form.js";
import FilterForm from "./_filter-form.js";
import NotFoundImg from "./_not-found-img.js";
import ImgFix from "./_img-fix.js";
import Pmt from "./pmt.js";



export default props => {
  //window["npm"](15, 20, 68, 17,0);

  const notFoundStr = createFailedSearchInfo(props.searchQuery);



  return (
    
    <div className="body">
    <div className="body-logo">
    <section className="listing mobile-desktop-frame">
     

      <FilterForm />
      
      <PageInfoTitle
        searchResultsQty={props.searchResultsQty}
        notFoundStr={notFoundStr}
      />
      <ImgFix />
      <SortForm searchResultsQty={props.searchResultsQty} />
      
      <form>
        
      <div className="dropdown" id="valueItemDrop">
                                                            <button className="selectbox" id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            Critères prioritaires
                                                            </button>
                                                            <ul className="dropdown-menu" aria-labelledby="dLabel">
                                                                <li className="checkbox form-group">
                                                                    <input type="checkbox" id="valuePot" value="Value Pot" name="Value Pot" />
                                                                    <label htmlFor="valuePot">critere1</label>
                                                                </li>
                                                                <li className="checkbox form-group">
                                                                    <input type="checkbox" id="payback" value="Payback" name="Payback" />
                                                                    <label htmlFor="payback">critere2</label>
                                                                </li>
                                                                
                                                                <li className="checkbox form-group">
                                                                    <input type="checkbox" id="offset" value="Offset" name="Offset" />
                                                                    <label htmlFor="offset">critere3</label>
                                                                </li>
                                                                <li className="checkbox form-group">
                                                                    <input type="checkbox" id="genValuePot" value="Gen Value Pot" name="Gen Value Pot" />
                                                                    <label htmlFor="genValuePot">critere4</label>
                                                                </li>
                                                                <li className="checkbox form-group">
                                                                    <input type="checkbox" id="mancValuePot" value="Manc Value Pot" name="Manc Value Pot" />
                                                                    <label htmlFor="mancValuePot">critere5</label>
                                                                </li>
                                                            </ul>
                                                        </div>
</form>




      <NotFoundImg
        searchResultsQty={props.searchResultsQty}
        notFoundStr={notFoundStr}
      />
      <div className="listing__container2">
      <a className="listing__container-item2">
                    
                    <h2 className="listing__container-item-info-fbutton">
                      SAUVEGARDER RECHERCHE
                    </h2>
                    <h2 className="listing__container-item-info-sbutton">
                      Sauvegardez cette recherche pour recevoir tous les jours par email les meilleures propriétés de luxe sur le marché
                    </h2>
                    <h2 className="listing__container-item-info-ssbutton">
                      Sauvegarder et recevoir une alerte email
                    </h2>
                    <h2 className="listing__container-item-info-ssvip">
                      Découvrez Club VIP
                    </h2>
                    <img
                        src="/static/images/icons/vip.jpeg"
                        alt="ValorysSignature"
                        width="250px"
                        
                        float="center"
                      />
      </a>
      </div>
      
      <div className="listing__container">
        {props.properties.map(
          ({
            url,
            images,
            img_directory,
            title,
            detail,
            advert_type,
            premises_type,
            town, 
            price,
            date,
            located_floor,
            furniture,
            total_floor,
            garden,
            d3,
            rotate,
            area,
            rooms_qty,
            age
          }) => {
            const imageTitle =
              (advert_type === "rent" ? "Rental " : "Habiter ");
              /* + `${premises_type} in ${town}`;*/
            return (
              
              <Link href={`/property/${url}`}>
                
                <a className="listing__container-item">
                  <img
                    src={associateImgPath(img_directory, images[0])}
                    className="listing__container-item-img"
                    alt={`Property in ${town}`}
                    title={imageTitle}
                  />
                  
                  <div className="listing__container-item-info">
                    <h2 className="listing__container-item-info-title">
                      {title}
                      
                    </h2>
                    
                    {/* A JSX comment <div className="listing__container-item-info-location">{`${premises_type} - ${town}`}</div>*/}
                    
                    <div className="listing__container-item-info-icons">
                      <div className="listing__container-item-info-price">
                      {beautifyPrice(price)}
                      
                    </div>
                      <span className="listing__container-item-info-icons-area">
                        {area}m²
                      </span>
                      {<span className="listing__container-item-info-icons-rooms">
                      
                        {rooms_qty == 0 ?(
                          "no rooms"
                        ) : (
                          <Fragment>{rooms_qty} chambres</Fragment>
                        )}
                      </span>}
                      <span className="listing__container-item-info-icons-floor">
                        {total_floor == 0 ? (
                          "Rez de chausée"
                        ) : (
                          <Fragment>{total_floor} étages</Fragment>
                        )}
                      </span>
                      <span className="listing__container-item-info-icons-detail">
                        {garden == "yes" ? (
                          <span className="listing__container-item-info-icons-vip">
                          </span>   
                        ) : (
                          <Fragment></Fragment>
                        )}
                      </span>
                       
                      
                      <h2 className="listing__container-item-info-detail">
                      {detail}
                      </h2>
                      <h2 className="listing__container-item-info-pret">
                      Remboursement de prêt indicatif sur :
                      </h2>
                      <h2 className="listing__container-item-info-pret">
                      10 ans : {beautifyPrice(price)}   -15 ans : {beautifyPrice(price)}   -20 ans : {beautifyPrice(price)}   -25 ans : {beautifyPrice(price)}
                      </h2>

                      <span>
                      <img
                        src="/static/images/icons/icon-small.png"
                        alt="ValorysSignature"
                        width="30px"
                        float="left"
                      />
                      </span> 


                    </div>
                    
                    
                     {/*     
                    <div className="listing__container-item-info-date">
                      {beautifyDate(date)}
                    </div>
                    {age == 0 && (
                      <div className="listing__container-item-info-age">
                        Nouveau
                      </div>
                    )}*/}
                  </div>
                  <span className="listing__container-item--type">
                        {garden == "yes" && (
                          <Fragment>{images.length}  </Fragment>
                        )}
                  </span>
                  <span className="listing__container-item--3d">
                        {d3 == "yes" ? (
                          <span className="listing__container-item-icons2-3d">
                          </span>   
                        ) : (
                          <Fragment></Fragment>
                        )}
                  </span>
                  <span className="listing__container-item--360d">
                        {d3 == "yes" ? (
                          <span className="">
                          </span>   
                        ) : (
                          <Fragment></Fragment>
                        )}
                  </span>
                  
                </a>
                
              </Link>
            );
          }
        )}
      </div>
      
      <PaginationBar {...props} />
    </section>
    </div>
    </div>
  );
};
