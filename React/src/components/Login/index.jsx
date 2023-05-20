import styles from "./Login.module.scss";
import { admin , AuthContext } from "../";
import { useState,useContext } from "react";
import { path } from '../../route/path';
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [nameStatus, setNameStatus] = useState(false)
    const [passwordStatus, setPasswordStatus] = useState(false)
    const { handleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        
        e.preventDefault();
        let isNameValid = false;
        let isPasswordValid = false;
    
        if (admin.name === name) {
          isNameValid = true;
        }
    
        if (admin.password === password) {
          isPasswordValid = true;
        }
    
        setNameStatus(!isNameValid);
        setPasswordStatus(!isPasswordValid);
    
        if (isNameValid && isPasswordValid) {
          handleLogin();
          navigate(path.home);
        }
      };
  
    return (
        <form className={styles.login} onSubmit={handleSubmit}>
        <label>
          <h3>Name</h3>
          <input
            type="text"
            className={`${styles.login__input} ${nameStatus ? styles.error : ''}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <h3>Password</h3>
          <input
            type="password"
            className={`${styles.login__input} ${passwordStatus ? styles.error : ''}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" className={styles.login__button}>Log In</button>
      </form>
    )
  }