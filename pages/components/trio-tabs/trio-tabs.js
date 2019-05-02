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
       <h1>Test Slider</h1>

       <div id="slider">
      <div class="container">
        <div class="slide">
          <h3>Slide 1</h3>
          <p>
            test 1
          </p>
        </div>
        <div class="slide">
          <h3>Slide 2</h3>
          <p>
            test2
          </p>
        </div>
        <div class="slide">
          <h3>Slide 3</h3>
          <p>
            test3
          </p>
        </div>
        <div class="slide">
          <h3>Slide 4</h3>
          <p>
            test4
          </p>
        </div>
        <div class="slide">
          <h3>Slide 5</h3>
          <p>
            test5
          </p>
        </div>
      </div>
    </div>
  
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

