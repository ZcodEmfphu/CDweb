import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Restaurants from './Restaurants'
import './App.css'

function RestaurantPage() {

    const [openSidebarToggle, srtOpenSidebarToggle] = useState(false);

    const OpenSidebar = () => {
        srtOpenSidebarToggle(!openSidebarToggle);
    }

    return (
        <div className="grid-container">
            <Header OpenSidebar={OpenSidebar} />
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
            <Restaurants />
        </div>
    )
}


export default RestaurantPage