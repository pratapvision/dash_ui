import React from 'react'
import vision_logo from '../../assests/vision_logo.png'
import './Sidebar.css'

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id='sidebar'>
            <div className='sidebar__title'>
                <div className='sidebar__img'>
                    <img src={vision_logo} alt="logo" height="30px" width="30px" />
                    <h1 style={{ color: "#000" }}> Vision Education <br /> <p style={{ textAlign: 'center' }}>Hub</p></h1>
                </div>
                <i className='fa fa-times'
                    id="sidebarIcon"
                    onClick={() => closeSidebar()}
                ></i>
            </div>
            <div className='sidebar__menu'>
                <div className='sidebar__link'>
                    <i className='fa fa-home'></i>
                    <a href='#'>Dashboard</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-user-secret'></i>
                    <a href='#'>Event Management</a>
                </div>
                <div className='sidebar__link active_menu_link'>
                    <i className='fa fa-user-secret'></i>
                    <a href='#'>Professors</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar