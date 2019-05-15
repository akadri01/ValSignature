import {Component} from 'react';
import Link from "next/link";
//import {ALGOLIA_API_KEY,ALGOLIA_APP_ID} from '../config/development.js';
import {InstantSearch, SearchBox, Hits, Highlight,Stats} from 'react-instantsearch/dom';



const Hit = ({hit}) => 
    <div className="searched">
      <Link href={`/properties/latest?${hit.type}=${hit.value}&advert_type=sale`}>
        <a>
          <div>For Sale</div>
          <Highlight attribute="text" hit={hit}/>  
        </a>
      </Link>
      <Link href={`/properties/latest?${hit.type}=${hit.value}&advert_type=rent`}>
        <a>
          <div>To Rent</div>
          <Highlight attribute="text" hit={hit}/>  
        </a>
      </Link>
    </div>
    
export default class Angolia extends Component {
  render(){
    return(
      <section>
        <InstantSearch
          apiKey='pl6JJHSA0ECU'
          appId='4a7d7781c45f8078b7fb15ccf11fbd7d'
          indexName="towns-regions"
          
        >
         <SearchBox translations={{placeholder: 'Testing algolia in server'}}/>
         <Stats/>
         <Hits hitComponent={Hit}/>
         <style>{`
          .searched em {
            font-weight: 1500;
          }
          `}</style>
        </InstantSearch>
      </section>
    )
  }
} 
