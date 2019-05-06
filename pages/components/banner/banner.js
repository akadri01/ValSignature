import {Component} from 'react';
import SearchForm from "./_search-form.js";
//import Algolia from "./algolia.js";


const images = [
 
  'banner-1.jpeg',
  'banner-2.jpeg',
  'banner-3.jpeg',
  'banner-4.jpeg',
  'banner-5.jpeg',
  'banner-6.jpeg',
  'banner-7.jpeg',
  'banner-8.jpeg',
  'banner-9.jpeg'
  
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
