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


export default props => {
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
      
      <NotFoundImg
        searchResultsQty={props.searchResultsQty}
        notFoundStr={notFoundStr}
      />
      
      <div className="listing__container">
        {props.properties.map(
          ({
            url,
            images,
            img_directory,
            title,
            advert_type,
            premises_type,
            town,
            price,
            date,
            located_floor,
            area,
            rooms_qty,
            age
          }) => {
            const imageTitle =
              (advert_type === "rent" ? "Rental " : "For Sale ") +
              `${premises_type} in ${town}`;
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
                    
                    <div className="listing__container-item-info-location">{`${premises_type} - ${town}`}</div>
                    <div className="listing__container-item-info-price">
                      {beautifyPrice(price)}
                    </div>
                    <div className="listing__container-item-info-icons">
                      {/*<span className="listing__container-item-info-icons-rooms">
                      
                        {rooms_qty == 0 ? "No rooms" : rooms_qty}
                      </span>*/}
                      <span className="listing__container-item-info-icons-area">
                        {area}m²
                      </span>
                      <span className="listing__container-item-info-icons-floor">
                        {located_floor == 0 ? (
                          "Rez de chausée"
                        ) : (
                          <Fragment>{located_floor}ème étage</Fragment>
                        )}
                      </span>
                    </div>
                    
                    
                     {/*     
                    <div className="listing__container-item-info-date">
                      {beautifyDate(date)}
                    </div>*/}
                    {age == 0 && (
                      <div className="listing__container-item-info-age">
                        Nouveau
                      </div>
                    )}
                  </div>
                  <span className="listing__container-item--type">
                    {advert_type === "rent" ? "Rental " : "Nbre d'images "}
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
