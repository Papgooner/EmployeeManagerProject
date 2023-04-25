import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import Header from "../Components/Header";
function HomePage() {
    const [authenticated, setAuthenticated] = useState(null);
    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        console.log(loggedInUser);
        if (loggedInUser) {
            setAuthenticated(loggedInUser);
        }
    }, []);

    if (!authenticated) {
        console.log("auth failed")
    } else {
        return (
            <div>
                <Header headerTitle="HomePage" />
            </div>
        );
    }
};

export default HomePage;