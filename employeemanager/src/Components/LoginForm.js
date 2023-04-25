import './LoginForm.css'
import Header from "../Components/Header";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function LoginForm() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated") || false));
    const users = [{ username: "Tom", password: "testpassword" }];

    function handleSubmit(e) {
        e.preventDefault()
        const account = users.find((user) => user.username === username);
        if (account && account.password === password) {
            setAuthenticated(true)
            localStorage.setItem("authenticated", true);
            console.log(localStorage.getItem("authenticated"));
            return navigate("/HomePage")
        }
        else {
            localStorage.setItem('authenticated', false);
            console.log("after:" && localStorage.getItem('authenticated'))
        }
    }

    function showAuth(){
        console.log(localStorage.getItem('authenticated'))
    }
    return (
        <div className="LoginScreenDiv">
            <Header headerTitle="Employee Manager" />
            <form onSubmit={handleSubmit} className="LoginForm">
                <br></br>
                <input type="text" placeholder="USERNAME" className="LogininputBox" id="UsernameInput" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="PASSWORD" className="LogininputBox" id="PasswordInput" value={password} onChange={(e) => setPassword(e.target.value)} />

                <input className="Login-Pri" type="submit" value="submit" />
                <p className="Login-Pri-Text">Or login using</p>
            </form>

            <div className="Login-Alt">
                <button onClick={showAuth}>Show auth local storage</button>
                <div className="facebook Alt-Btn"></div>
                <div className="google Alt-Btn"></div>
            </div>
        </div>
    )
}

export default LoginForm;