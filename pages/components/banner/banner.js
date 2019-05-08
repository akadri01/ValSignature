import {Component} from 'react';
import SearchForm from "./_search-form.js";
//import Algolia from "./algolia.js";


const images = [
 
  'banner-1.webp',
  'banner-2.webp',
  'banner-3.webp',
  'banner-4.webp',
  'banner-5.webp',
  'banner-6.webp',
  'banner-7.webp',
  'banner-8.webp',
  'banner-9.webp'
  
];

export default class banner extends Component {
  state = {
    counter: 0,
    sliderTimer: 4000
  }
  render() {
    return (
      <section className="banner" style={{backgroundImage: `url(/static/images/photos/${images[this.state.counter]})`}}>
        
        <SearchForm />
       
      </section> 
    )
  }
  componentDidMount() {
    setInterval(() => {
      this.setState(prevState => ({
        counter: prevState.counter === images.length -1  ? 0 : prevState.counter + 1
      }));
    },this.state.sliderTimer)
  }
} 
