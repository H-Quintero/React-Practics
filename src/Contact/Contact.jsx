import React from "react"
import './contactStyle.css'

export default function Contact({ id, name, img, phone, email }) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{id} {name}</h2>
        <img src={img} alt="avatar-img" className="circle-img"/>
      </div>
      <div className="bottom">
        <p className="info">{email}</p>
        <p className="info">{phone}</p>
      </div>
    </div>
  );
}
