import React from "react";
import "./Slider.scss";
function Slider() {
  return (
    <div className="sliderBig">
      <div className="slider container">
        <div className="gradient">
          <div className="leftBtm">
            <div className="topCenter">
              <div className="rightBtm">
                <h2>Temuriylar davri adabiyoti</h2>
                <div className="slide__line">
                  <span className="slide__line_item"></span>
                  <span className="slide__line_item"></span>
                  <span className="slide__line_item"></span>
                  <span className="slide__line_item"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="search">
        <p>Qidirish</p>
        <form action="#">
            <input type="text" placeholder="Adiblar, kitoblar, audiolar, maqolalar..." />
            <button type="submit"><i className="bi bi-search"></i> Izlash</button>
        </form>
      </div>
      </div>

      
    </div>
  );
}

export default Slider;
