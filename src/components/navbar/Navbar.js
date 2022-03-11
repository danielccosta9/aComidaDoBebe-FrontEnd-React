import avatar from "../../assets/avatar.png";
import "./Navbar.css";

const Navbar = ({ sidebarOpen, openSidebar }) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>

            <div className="navbar__left">
                <a href="#" className="active_link">Paciente</a>
                <a href="#">Nutricionista</a>
                <a href="#">Produtos</a>
            </div>

            <div className="navbar__rigth">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>

                <a href="#">
                    <img width="30" src={avatar} alt="avatar"/>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;