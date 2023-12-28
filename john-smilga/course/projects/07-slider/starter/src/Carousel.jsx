import React, { useState } from 'react';
import { shortList, list, longList } from './data.js';
import { FaQuoteRight } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function Carousel() {
  const [currentItem, setCurrentItem] = useState(0);
  const [peopleList, setPeopleList] = useState(list);

  function prevSlide() {
    setCurrentItem((oldValue) => (oldValue + 1) % peopleList.length);
  }

  function nextSlide() {
    setCurrentItem(
      (oldValue) => (oldValue - 1 + peopleList.length) % peopleList.length
    );
  }
  return (
    <article className="slider-container">
      <button onClick={prevSlide} className="prev" type="button">
        <IoIosArrowBack />
      </button>
      <button onClick={nextSlide} className="next" type="button">
        <IoIosArrowForward />
      </button>
      {peopleList.map((people, peopleIndex) => {
        const { image, name, quote, title, id } = people;
        return (
          <div
            style={{
              transform: `translateX(${(currentItem - peopleIndex) * 100}%)`,
              opacity: peopleIndex === currentItem ? '1' : '0',
            }}
            className="slide"
            key={id}
          >
            <img src={image} alt={name} />
            <h1 className="name">{name}</h1>
            <h2 className="title">{title}</h2>
            <p className="quote">{quote}</p>
            <FaQuoteRight className="icon" />
          </div>
        );
      })}
    </article>
  );
}

export default Carousel;
