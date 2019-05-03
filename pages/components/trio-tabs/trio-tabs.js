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
      

       <div id="slider">
      <div class="container">
        <div class="slide">
        
          <h3>Parce que votre temps est précieux, sollicitez le chasseur virtuel,</h3>
          <p>
          Alors détendez-vous, il chasse pour vous
          </p>
          
        </div>
        <div class="slide">
         
          <h3>Parce qu’un investissement immobilier est un engagement à long terme, </h3>
          <p>
          Profitez de notre expertise pour faire les bons choix 
          </p>
          
        </div>
        <div class="slide">
        <center>
          <h3>Difficile de vous projeter à partir d’un plan, </h3>
          <p>
          Visitez votre futur logement ou investissement en immersion 
          </p>
          </center>
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

