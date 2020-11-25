import React from 'react';
import products from './List.constants';
import Element from '../Element';
import './List.css';

const List = () => {
  return (
    <div className='list__main--wrapper'>
      {products.map(({ name, price, description}, index) => (
        <Element
          key={index} 
          name={name} 
          price={price} 
          description={description} 
        />
      ))}
    </div>
  );
};

export default List;