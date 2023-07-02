import React, { useState } from "react";
import styles from "./MobileCarousal.module.css";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className={styles.carouselItem} style={{ width: width }}>
      {children}
    </div>
  );
};

const MobileCarousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }
    setActiveIndex(newIndex);
  };

  const updateIndicator = (newIndex) => {
    setActiveIndex(newIndex);
  }

  return (
    <div className={styles.carousel}>
      <div
        className={styles.inner}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className={styles.indicators}>
        {[...Array(React.Children.count(children))].map((item, index) => {
            return (
                <div  
                onClick={() => {
                    updateIndicator(index);
                  }} 
                  key={index} 
                  className={`${styles.indicatorsItem} ${activeIndex === index ? styles.indicatorsItemActive : ''}` }
                  ></div>
            )
        })}
      </div>
    </div>
  );
};

export default MobileCarousel;
