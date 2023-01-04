import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import "./Home.scss";

// IMG
import bookIcon from "../../assets/img/bookIcon.svg";
//DATA
import Users from "../../data/Users";
import { Context } from "../../context/Context";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
//CODE

const arrCategory = [];
function Home() {
  Users.forEach((e, i) => {
    if (!arrCategory.includes(e.genre)) {
      arrCategory.push(e.genre);
    }
  });
  const { setData } = useContext(Context);
  const [category, setCategory] = useState("jahon");
  return (
    <div className="home">
      <Header />
      <Slider />
      <div className="categorys container">
        <p>Asosiy kategoriyalar</p>
        <ul className="category__list menu">
          <li onClick={() => setCategory("")}>
            <Link>Hamma Yozuvchi</Link>
          </li>
          {arrCategory?.map((e, i) => (
            <li key={i} onClick={() => setCategory(e)} className="menu-link">
              <Link>{e} Yozuvchi</Link>
            </li>
          ))}
        </ul>
      </div>

      <ul className="persons container">
        {Users?.filter((f) => f.genre === category).map((e, i) => (
          <li className="persons__person" onClick={() => setData(e)} key={i}>
            <Link to={"/aboutData"} className="bg">
              <img src={e.img} alt="" />
              <div className="persons__person_text">
                <h5>{e.name}</h5>
                <span>
                  {e.born} - {e.died}
                </span>
                <div className="div">
                  <h4>
                    <img src={bookIcon} alt="" />
                    {e.books}
                  </h4>
                  <h4>
                    <i className="bi bi-headphones"></i> {e.audio}
                  </h4>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
