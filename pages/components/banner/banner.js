import {Component} from 'react';
import SearchForm from "./_search-form.js";


const images = [
 
  'banner-1.jpg',
  'banner-3.jpg',
  'banner-5.jpg',
  'banner-6.jpg',
  'banner-7.jpg',
  'banner-8.jpg',
  'banner-9.jpg',
  'banner-10.jpg',
  'banner-11.jpg'
  
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
