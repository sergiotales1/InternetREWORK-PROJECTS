import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import people from './data.js/';
import { useState } from 'react';
import Loading from './Loading';

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const [isLoading, setIsLoading] = useState(true);

  const checkLimit = (number) => {
    if (number >= people.length - 1) return 0;
    if (number < people.length - people.length) return people.length - 1;
    return number;
  };

  const nextPeople = () => {
    setIndex((currentIndex) => {
      return checkLimit(currentIndex + 1);
    });
  };

  const prevPeople = () => {
    setIndex((currentIndex) => {
      return checkLimit(currentIndex - 1);
    });
  };

  const pickOne = () => {
    let randomNum = Math.floor(Math.random() * (people.length - 1));
    if (randomNum === index) randomNum += 1;
    setIndex(checkLimit(randomNum));
    return;
  };
  return (
    <div className="my-container">
      {isLoading ? <Loading /> : null}
      <img
        onLoad={() => {
          setIsLoading(false);
        }}
        src={image}
        width={'100px'}
        className="my-img"
        alt={name}
      />

      <h1>{name}</h1>
      <h2>{job}</h2>
      <p>{text}</p>
      <button type="button" className="left-btn" onClick={prevPeople}>
        <FaChevronLeft />
      </button>
      <button type="button" className="right-btn" onClick={nextPeople}>
        <FaChevronRight />
      </button>
      <button className="random-btn" type="button" onClick={pickOne}>
        Pick one random
      </button>
    </div>
  );
};
export default App;
