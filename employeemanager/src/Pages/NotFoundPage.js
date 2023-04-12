import ErrorComponent from "../Components/Error"; 

function NotFoundPage(){
    return (
        <ErrorComponent errorTitle="Error 404 Page Not Found" errorMessage="Return to " errorLink="/HomePage" errorLinkText="Home Page" />
    )
}

export default NotFoundPage;