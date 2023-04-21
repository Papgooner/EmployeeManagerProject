import './LoginForm.css'
import Header from "../Components/Header";
import { useState } from 'react';

function LoginForm(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
    const users = [{username: "Papgooner", password: "4322"}];

    function handleSubmit(e) {
        e.preventDefault()
        const account = users.find((user) => user.username === username);
        if(account && account.password === password) {
            setAuthenticated(true)
            localStorage.setItem("authenticatd", true);
        }
    };

    function passwordCheck(){
        console.log("Password Check");
        if(currentPassword === "Thomas4322") {
            console.log("true");

        }
        else {
            console.log("false");
        }
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

            <div className="Login-Pri" onClick={passwordCheck}>Login</div>
            <p className="Login-Pri-Text">Or login using</p>

            <div className="Login-Alt">
                <div className="facebook Alt-Btn"></div>
                <div className="google Alt-Btn"></div>
            </div>
        </div>
    )
}

export default LoginForm;