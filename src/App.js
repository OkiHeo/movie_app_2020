import React from 'react';
import PropTypes from 'prop-types';

function Food(props){
  const { name, picture, ratings } = props;  // 구조 분해 할당. props에 포함된 데이터의 개수가 많아질수록 편하다.
  return (
    <div>
      <img alt="" src={picture} />
      <h2>I like {name}</h2>
      <h4>{ratings}</h4>
    </div>
  );
}


Food.propTypes = {
	name: PropTypes.string.isRequired,
	picture: PropTypes.string.isRequired,
	ratings: PropTypes.number,
};

const foodILike = [
  {
    id: 1,
    name: 'kimchi',
    rating: 3,
    image: 'http://image.auction.co.kr/itemimage/1b/45/1c/1b451c3fa6.jpg',
  },
  {
    id: 2,
    name: '순두부찌개',
    rating: 4.8,
    image: 'https://i.ytimg.com/vi/iCRj9VWDCt4/maxresdefault.jpg',
  },
];

function App() {
  return (
    <div>
      <h1>Hello</h1>
      { foodILike.map( dish=>(
        <Food id={dish.id} name={dish.name} picture={dish.image} ratings={dish.rating} />
         )) }
    </div>)
  ;
}

export default App;
