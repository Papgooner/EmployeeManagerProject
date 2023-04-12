import '../Components CSS/LoginScreen.css';
function LoginScreen(){
    return (
        <div className="LoginScreenDiv">
            <form>
            <label className="LoginLabels" htmlFor="UserNameinput">Username:</label>
            <br></br>
            <input className="LogininputBox" id="UsernameInput" /><br></br>
            <br></br>
            <label className="LoginLabels" htmlFor="PasswordInput">Password:</label>
            <br></br>
            <input className="LogininputBox" id="PasswordInput" />
            </form>
        </div>
    )
}

export default LoginScreen;