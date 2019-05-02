import {Component} from 'react';



const images = [
 
  'sider.jpeg',
   
];

export default class TrioTabs extends Component {
  state = {
    counter: 0,
    sliderTimer: 4000
  }
  render() {
    return (
      <section className="trio" style={{backgroundImage: `url(/static/images/photos/${images[this.state.counter]})`}}>
       <p>  </p>
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

