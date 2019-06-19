import { Component } from "react";
import Link from "next/link";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  Stats
} from "react-instantsearch/dom";

const Hit = ({ hit }) => (
  <div className="searched">
    <Link href={`/properties/latest?${hit.type}=${hit.value}&advert_type=sale`}>
      <a>
        <Highlight attribute="text" hit={hit} />
        <small>Pour Habiter</small>
      </a>
    </Link>
    <Link href={`/properties/latest?${hit.type}=${hit.value}&advert_type=rent`}>
      <a>
        <Highlight attribute="text" hit={hit} />
        <small>Pour Investir</small>
      </a>
    </Link>
  </div>
);

export default class Angolia extends Component {
  componentDidMount() {
    document
      .querySelector(".ais-SearchBox-input")
      .addEventListener(
        "focus",
        () => (document.querySelector(".ais-Hits").style.display = "block")
      );
    document
      .querySelector(".ais-SearchBox-submit")
      .addEventListener("click", function() {
        if (!this.classList.contains("active-button-msg")) {
          this.classList.add("active-button-msg");
        }
      });
  }
  render() {
    return (
      <section className="algoliaSearch">
        <InstantSearch
          apiKey="e49482b3fbd74a27b27bb4a28baf5702"
          appId="DBHMJQTDMY"
          indexName="towns-regions"
        >
          <SearchBox translations={{ placeholder: "Localité .." }} />
          
          <Hits hitComponent={Hit} />
          <style>{`
          .searched em {
            font-weight: 900;
          }
          `}</style>
        </InstantSearch>
      </section>
    );
  }
}
