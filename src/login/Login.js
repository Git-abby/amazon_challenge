import React, { useState } from "react";
import "../login/login.css";
import logo from "../img/amazon-light.svg";
import { Link, useNavigate} from "react-router-dom";
// import { auth } from "../../src/firebase";
import { db, auth } from '../firebase';
// import firebase from "firebase";

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // console.log(email, password);

    const signIn = e =>{
        e.preventDefault();

        //firebase
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) =>{
          navigate('/');
        })
        .catch(error => alert(error.message))
    }
    
    const join = e =>{
        e.preventDefault();
        
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) =>{
            // console.log(auth);
            if(auth){
              navigate('/');
            }
        })
        .catch(error => alert(error.message))
        //firebase
    }
  return (
    <div className="login">
      <Link to="/">
        <img className="login__img" src={logo} alt="logo-picture" />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <label>E-mail</label>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

          <label>Password</label>
          <input type="Password" value={password} onChange={e => setPassword(e.target.value)}/>

          <button className="login__sign" type="submit" onClick={signIn}>Sign In</button>
        </form>

        <p>
          By continuing, you agree to Amazon's <a href="/">Conditions of Use</a> and <a href="/">Privacy
          Notice.</a> 
          <p><span>*</span>Need help?</p>
        </p>
        <button className="login__join" onClick={join}>Create your Amazon account</button>
      </div>
    </div>
  );
}

export default Login;
