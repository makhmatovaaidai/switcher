import "./App.css";
import useLocalStorage from "use-local-storage";
import "./index.css";
import { useState } from "react";
// import ColorItem from "./components/ColorItem";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const [isToggle, setIsToggle] = useState(false);

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className={isToggle ? "App black" : "App white"} data-theme={theme}>
      <div className="Login">
        <h1 className={isToggle ? "white" : "black"}>Login</h1>
        <div
          className={!isToggle ? "container bgblack" : "container bgwhite"}
        >
          <div className="top">
            <i className="fab fa-google"></i>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-apple"></i>
          </div>
          <p className="divider">
            <span className={!isToggle ? " white" : " black"}>Or</span>
          </p>
          <form>
            <label className={!isToggle ? " white" : " black"}>E-mail</label>
            <input type="email" placeholder="Enter your email" />
            <label className={!isToggle ? " white" : " black"}>Password</label>
            <input type="password" placeholder="Enter your password" />
            <div className="remember">
              <input type="checkbox" checked="checked" />
              <p className={!isToggle ? " white" : " black"}>Remember me</p>
            </div>
            <button className={!isToggle ? "create white" : "create black"}>
              Log In
            </button>
          </form>
          <div className="bottom">
            <p className={!isToggle ? " white" : " black"}>
              Forget your password
            </p>
            <a className={!isToggle ? " white" : " black"} href="/">
              Reset Password
            </a>
          </div>
          <p className={!isToggle ? "create white" : "create black"}>
            Create account
          </p>
        </div>
        <div className="theme-toggle">
          <h2 className={isToggle ? "white" : "black"}>Light Theme</h2>
          {/* <i onClick={switchTheme} class="fas fa-toggle-on"></i> */}
          <div
            className={isToggle ? "night" : "switch"}
            onClick={() => setIsToggle((prevState) => !prevState)}
          >
            <div className="light"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
