import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import data from './data';

const Reviews = () => {

 const [index, setIndex] = useState(0);

 let newData = data[index];

 const nextPerson = () => {
  setIndex((index) => {
    let newIndex = index + 1;
    return checkNumber(newIndex);
  });
};
const prevPerson = () => {
  setIndex((index) => {
    let newIndex = index - 1;
    return checkNumber(newIndex);
  });
};

const checkNumber = (number) => {
  if (number > data.length -1) {
    return 0;
  }
  if (number < 0) {
    return data.length -1;
  }
  return number;
};
 
 
    return (
        <article className='review'>
        <div className='img-container'>
          <img src={newData.image} alt={newData.name}  className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{newData.name}</h4>
        <p className='job'>{newData.job}</p>
        <p className='info'>{newData.text}</p>
        <div className='button-container'>
          <button className='prev-btn' onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className='random-btn'>
          surprise me
        </button>
      </article>
    )
}



export default Reviews;