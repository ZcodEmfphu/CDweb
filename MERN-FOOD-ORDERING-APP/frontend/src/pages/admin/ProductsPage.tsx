import { useState } from 'react'
import Sidebar from './Sidebar'
import './App.css'
import Products from './Products'

function ProductPage() {

    const [openSidebarToggle, srtOpenSidebarToggle] = useState(false);

    const OpenSidebar = () => {
        srtOpenSidebarToggle(!openSidebarToggle);
    }

    return (
        <div className="grid-container">
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
            <Products />
        </div>
    )
}


export default ProductPage