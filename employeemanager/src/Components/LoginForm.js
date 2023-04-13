import './LoginForm.css'
import Header from "../Components/Header";

function LoginForm(){
    return (
        <div className="LoginScreenDiv">
            <Header headerTitle="Employee Manager" /> 
            <form>
            <label className="LoginLabels" htmlFor="UserNameinput">Username:</label>
            <br></br>
            <input type="text" placeholder="username" className="LogininputBox" id="UsernameInput" /><br></br>
            <br></br>
            <label className="LoginLabels" htmlFor="PasswordInput">Password:</label>
            <br></br>
            <input type="password" placeholder="password" className="LogininputBox" id="PasswordInput" />
            </form>

            <div className="Login-Pri">Login</div>
            <p className="Login-Pri-Text">Or login using</p>

            <div className="Login-Alt">
                <div className="facebook"></div>
                <div className="google"></div>
            </div>
        </div>
    )
}

export default LoginForm;