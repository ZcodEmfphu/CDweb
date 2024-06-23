import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import './App.css'

function ReportPage() {

    const [openSidebarToggle, srtOpenSidebarToggle] = useState(false);

    const OpenSidebar = () => {
        srtOpenSidebarToggle(!openSidebarToggle);
    }

    return (
        <div className="grid-container">
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
            <div className="p-4 flex flex-col">
            <h1 className="text-3xl text-white">Reports</h1>
            </div>
        </div>
    )
}


export default ReportPage