import '../css/App.css';
import React, { useState, useEffect } from "react";
import argentinaflag from '../images/argentinaflag_pic5.png';
import cat from '../images/cat_pic7.png.jpg';
import coco from '../images/coco_pic6.jpg';
import ferrari from '../images/ferarri_pic2.png';
import formula1 from '../images/formula1_pic1.png';
import greys from '../images/greys_pic12.png';
import invincible from '../images/invincible_pic11.png';
import ittakes2 from '../images/ittakestwo_pic4.png.jpg';
import leclerc from '../images/leclerc_pic3.png';
import mate from '../images/mate_pic9.jpg';
import messi from '../images/messi_pic10.png';
import rubiu from '../images/rubiu_pic14.png';
import simba from '../images/simba_pic8.png.jpg';
import spiderman from '../images/spiderman_pic15.png';


function FindAPair() {
  const imageList = [
    argentinaflag, cat, coco, ferrari, formula1,
    greys, invincible, ittakes2, leclerc, mate,
    messi, rubiu, simba, spiderman
  ];
  
  return (
    <div className="image-gallery">
      <h1>All Images</h1>
      <div className="images">
        {imageList.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} className="image"/>
        ))}
      </div>
    </div>
  );
}

export default FindAPair;
