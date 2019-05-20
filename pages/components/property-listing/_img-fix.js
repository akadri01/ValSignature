import {Component} from 'react';



const images = [
 
  
  'sider2.jpg',
  
];

export default class ImgFix extends Component {
  state = {
    counter: 0,
    sliderTimer: 4000
  }
  render() {
    return (
      <section className="trios" style={{backgroundImage: `url(/static/images/photos/${images[this.state.counter]})`}}>
      

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

