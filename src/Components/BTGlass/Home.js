import React, { Component } from "react";
import "./style.css";
import Change from "./Change";


export default class Home extends Component {
  mangGlasses = [
    {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./glassesImage/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 2,
        "price": 50,
        "name": "GUCCI G8759H",
        "url": "./glassesImage/v2.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 3,
        "price": 30,
        "name": "DIOR D6700HQ",
        "url": "./glassesImage/v3.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 4,
        "price": 70,
        "name": "DIOR D6005U",
        "url": "./glassesImage/v4.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 5,
        "price": 40,
        "name": "PRADA P8750",
        "url": "./glassesImage/v5.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 6,
        "price": 60,
        "name": "PRADA P9700",
        "url": "./glassesImage/v6.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 7,
        "price": 80,
        "name": "FENDI F8750",
        "url": "./glassesImage/v7.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 8,
        "price": 100,
        "name": "FENDI F8500",
        "url": "./glassesImage/v8.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 9,
        "price": 60,
        "name": "FENDI F4300",
        "url": "./glassesImage/v9.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
]

state = {
  glasses : this.mangGlasses[0]

}

hienThiDSGlasses = () => {
  return this.mangGlasses.map((glasses) => {
    let {url} = glasses;
    return <div className="col-2 mt-3">
        <button onClick={() => {this.doiGlasses(glasses)}}>
        <img src={url} alt="" className="img-fluid"></img>
        </button>
      </div>
  })
}

doiGlasses = (newGlasses) =>{
  let newState = {
    glasses: newGlasses
  }
  this.setState(newState);
}







  render() {
 
    return (
      <div className="container mt-5">
        <div>
          <h2>TRY GLASSES APP ONLINE</h2>
        </div>
        <div className="row mt-5">
          <div className="col-3"></div>
          <div className="col-3">
            <img src="./glassesImage/model.jpg" className="card-model card-img-top" alt="..." />
            {/* đổi kính  */}
            <Change glasses={this.state.glasses}/>
          </div>
          <div className="col-3">
            <img src="./glassesImage/model.jpg" className="card-img-top" alt="..." />
          </div>
          
        </div>

     {/* danh sách glasses */}
     <div className="row">
     {this.hienThiDSGlasses()}


     </div>
       
      </div>
    );
  }
}
