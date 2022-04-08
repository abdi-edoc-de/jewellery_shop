import { FaHourglassEnd ,FaWindowClose, FaEdit} from "react-icons/fa";
import React from 'react'
import './card.css'
 function card({product}) {
  return (
      
    <div>
        <div class="container">
  <div class="post-card">
    <div class="post-card__nav">
      <ul>
        <li>
          <a href="#" class="active"><FaWindowClose/></a>
        </li>
        <li>
          <a href="#"><FaHourglassEnd/></a>
        </li>
        <li>
         <a href="#"><FaEdit/></a>
        </li>
      </ul>
    </div>
    <div class="post-card__content">
      <div class="post-card__info">
        <h1>{product.title}</h1>
        <h5>184&nbsp;<span>Reviews</span></h5>
        <p>{product.description}</p>
        <a href="#">Read more</a>
      </div>
      
    </div>
    <div class="post-card__img" id="post-card__img">
      <div class="post-card__social">
        
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default card