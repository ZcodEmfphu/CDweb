import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Users from './Users'
import './App.css'

function Customers() {

    const [openSidebarToggle, srtOpenSidebarToggle] = useState(false);

    const OpenSidebar = () => {
        srtOpenSidebarToggle(!openSidebarToggle);
    }

    return (
        <div className="grid-container">
            <Header OpenSidebar={OpenSidebar} />
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
            <Users />
        </div>
    )
}


export default Customers