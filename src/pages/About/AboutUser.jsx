import React, { useContext } from "react";
import "./AboutUser.scss";
import { Context } from "../../context/Context";
import Header from "../../components/Header/Header";
// IMG
import book from "../../assets/img/book.png";
import favo from "../../assets/img/favorities.png";
function AboutUser() {
  const { data } = useContext(Context);
  const dataArr = [];
  dataArr.push(data);
  // bookObjMy

  console.log(dataArr);
  return (
    <>
      <Header />
      <div className="aboutUser">
        {dataArr &&
          dataArr.map((e, i) => (
            <>
              <div className="bgBig" key={i}>
                <div className="bg1">
                  <img src={e.img} alt="" />
                </div>
                <div className="wasBorn">
                  <span>
                    Tavallud sanasi <h4>Tavallud sanasi</h4>
                  </span>
                  <span>
                    {e.bornDate}-{e.bornMoth}
                    {e.born}
                    <h5>
                      {e.diedDate}-{e.diedMonth}
                      {e.born}
                    </h5>
                  </span>
                  <span>
                    {e.location} <h6>{e.location}</h6>
                  </span>
                </div>
              </div>
              <div className="aboutPerson">
                <div className="text__aboutPerson">
                  <span>
                    {e.lastName} {e.name}
                  </span>
                  <p>{e.desc}</p>
                  <div className="ijodi">
                    <h6>
                      <img src={"favo"} alt="" /> IJODI
                    </h6>
                    <p>{e.jobs}</p>
                  </div>
                  <div className="Kitoblar">
                    <div className="kitob">
                      {e.bookObj?.map((map) => (
                        <div>
                          <img src={map.bookImg} alt="" />
                          <h6>{map.bookName}</h6>
                          <h5><i className="bi bi-star-fill"></i>{map.bookRating} {map.bookRating}</h5>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
    </>
  );
}

export default AboutUser;
