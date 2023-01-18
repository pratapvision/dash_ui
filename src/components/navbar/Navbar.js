import "./Navbar.css"
import professor from '../../assests/professor.png'

const Navbar = ({ sidebarOpen, openSidebar }) => {
    return (
        <nav className="navbar">
            <div className="navbar" onClick={() => openSidebar()}>
                <i className="fa fa-bars" />
            </div>
            <div className="navbar__left">
                <a href="#">Subscribers</a>
                <a href="#">Video Management</a>
                <a className="active_link" href="#">Admin</a>
            </div>
            <div className="navbar__right">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>
                <a href="#">
                    <i className="fa fa-clock-o"></i>
                </a>
                <a href="#">
                    <img src={professor} alt='avatar' width="30" />
                </a>
            </div>
        </nav>
    )
}

export default Navbar