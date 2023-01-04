import React from "react";
import "./Login.scss";
import loginImg from "../../assets/img/Frame (1).svg";
import { Link, useNavigate } from "react-router-dom";


const data = [
  {
    id:1,
    name:'ali',
    password:123
  },
  {
    id:2,
    ism:'vali',
    password:321
  }
]


function Login() {
  const navigate = useNavigate()
  const loginHandler = (env)=>{
    env.preventDefault()
    let userName = env.target.elements.username.value
    let userPassword = env.target.elements.password.value


    for(let i = 0;i<data.length; i++){
      if(data[i].name === userName && data[i].password === parseInt(userPassword)){
        console.log('true');
        window.localStorage.setItem('key', 'secretkey')
        break
      }else{
        window.localStorage.setItem('key', 'err')
      }
    }


    if(window.localStorage.getItem('key') === 'secretkey'){
      navigate('/home')
    }
  }
  return (
    <div className="login">
      <div className="logImg">
        <img src={loginImg} alt="" />
      </div>
      <div className="logText">
        <div>
          <p>Sign in</p>
          <span>
            Do not you have an account? <Link>Sign up</Link>
          </span>
          <form action="/" onSubmit={loginHandler}>
            <input type="text" placeholder="Email" name="username" />
            <br />
            <input type="password" placeholder="Paassword" name="password" />
            <br />
            <button className="submit">Next step</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
