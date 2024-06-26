import { useState } from 'react'
import Sidebar from './Sidebar'
import Orders from './Orders'
import './App.css'

function OrderPage() {

    const [openSidebarToggle, srtOpenSidebarToggle] = useState(false);

    const OpenSidebar = () => {
        srtOpenSidebarToggle(!openSidebarToggle);
    }

    return (
        <div className="grid-container">
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
            <Orders />
        </div>
    )
}


export default OrderPage