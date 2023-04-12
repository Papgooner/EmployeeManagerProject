import Header from "../Components/Header";
import LoginScreen from "../Components/LoginScreen";

function StartPage() {
    return (
        <div>
            <Header headerTitle="Employee Manager" /> 
            <LoginScreen />
        </div>
    )
}

export default StartPage;