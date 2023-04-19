import './LoginForm.css'
import Header from "../Components/Header";
import { useState } from "react";

function LoginForm(){

    const [PopUpStyle, ShowPopUp] = useState("hide");

    function PopUp(){
        ShowPopUp("loginPopUp")
        setTimeout(() => ShowPopUp("hide"), 3000)
    }
    return (
        <div className="LoginScreenDiv">
            <Header headerTitle="Employee Manager" /> 
            <form className="LoginForm">
            <br></br>
            <input type="text" placeholder="USERNAME" className="LogininputBox" id="UsernameInput" /><br></br>
            <br></br>
            <br></br>
            <input type="password" placeholder="PASSWORD" className="LogininputBox" id="PasswordInput" />
            </form>

            <div className="Login-Pri" onClick={PopUp}>Login</div>
            <p className="Login-Pri-Text">Or login using</p>

            <div className="Login-Alt">
                <div className="facebook Alt-Btn"></div>
                <div className="google Alt-Btn"></div>
            </div>
        </div>
    )
}

export default LoginForm;