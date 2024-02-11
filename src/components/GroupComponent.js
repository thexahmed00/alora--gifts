import React from 'react';
import "./GroupComponent.css";

const GroupComponent = () => {
  const handleScroll = () => {
    // Replace 'yourElementId' with the id of the element you want to scroll to
 
    const element = document.querySelector('.iphone-14-pro-max-3-inner');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }

  };

  return (
    <div className="group-div">
      <b className="shop-now3" onClick={handleScroll}>Shop Now</b>
      <img className="component-child" alt="" src="/group-1000001716.svg" />
    </div>
  );
};

export default GroupComponent;