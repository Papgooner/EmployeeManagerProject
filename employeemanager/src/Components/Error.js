function ErrorComponent(props) {
    return (
        <div>
            <h1>{props.errorTitle}</h1>
            <p>{props.errorMessage} <a href={props.errorLink}>{props.errorLinkText}</a></p>
        </div>
    )
}

export default ErrorComponent;