import React, { Component } from 'react'

export default class Change extends Component {
  render() {
    let{url, name,desc} = this.props.glasses
    return (
      <div>
      
            <img src={url} alt="" className="card-glasses card-img-top"></img>
            <div className="card-img-overlay">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">
              {desc}
              </p>
         
         
            </div>
      </div>
    )
  }
}
