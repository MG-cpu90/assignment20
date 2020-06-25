import React from "react";
import Button from "../Button";
import "./style.css";
// import GoogleMapContainer from './Map';

function Card(props) {
  return (
    <div
    className="card bg-light m-6 sm-12 text-center renderCard"
    // style={{max-width: 20rem, min-width: 18 rem}}
    style={{width: 300}}
  >
    <img src="img/note_taker.png" class="card-img-top" alt="Assignment_11-Screen-shot" width="650" height="200"
      id="assignment11-screenshot"></img>
    <div className="card-body">
      <h5 className="card-title">Assignment #11: Note Taker</h5>
      <p className="card-text">A web application that allows users to create and save notes to a json file, or
        delete them.</p>
    </div>
    <div className="card-body">
      <a href="https://floating-cliffs-26268.herokuapp.com/" target="_blank">Deployed URL
        Link</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="https://github.com/MG-cpu90/assignment11" target="_blank">GitHub Repository Link</a>
    </div>
  </div>
  );
}

export default Card;

// class BusinessCard extends Component {
//   constructor (props) {
//     super(props)

//     // LOOK MORE WHAT 'this' means!! <- the key of javascript = execution context
//     this.renderMap = this.renderMap.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   renderMap(){
//     // careful!!! bar is undefined. Look more what 'this' means in javascript
//     const bar = this.props.selectedBar;
//     return (
//       <GoogleMapContainer barLat={bar.coordinates.latitude} barLong={bar.coordinates.longitude} />
//     );
//   }

//   handleClick() {
//     const newCard = this.props.newCard;

//     // call the newCard function prop (if only is a function!!!)
//     newCard();

//     // another method call
//     this.anotherMethod();
//   }

//   anotherMethod() {
//     console.log('heyo!');
//   }

//   render() {
//     const newCard = this.props.newCard
//     const bar = this.props.selectedBar
//     // console.log("this are the coordinates", bar["coordinates"])
//     if(bar.coordinates){
//       const renderMap = this.renderMap();
//       return (
//         <div>
//           <p>{bar.coordinates.longitude}</p>
//           <p>{bar.name}</p>
//           <img src={bar.image_url} />
//           <button> X </button>
//           <button onClick={this.handleClick}> Yes </button>
//           { renderMap }
//         </div>
//       )
//     } else {
//       return(
//         <div>Loading...</div>
//       )
//     }
//   }
// }