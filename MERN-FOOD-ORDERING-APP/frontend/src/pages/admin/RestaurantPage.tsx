import { useState } from 'react'
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
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
            <Restaurants />
        </div>
    )
}


export default RestaurantPage