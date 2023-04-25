import "./Header.css";

function Header(props) {
    return (
        <div>
            <h2 className="header-title">{props.headerTitle}</h2>
        </div>
    )
}

export default Header;