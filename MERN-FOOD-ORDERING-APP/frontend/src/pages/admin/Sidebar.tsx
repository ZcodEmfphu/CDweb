import React from 'react';
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsLockFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
interface SidebarProps {
  openSidebarToggle: boolean;
  OpenSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ openSidebarToggle, OpenSidebar }) => {
  const { logout } = useAuth0();
  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" />&nbsp;&nbsp;&nbsp;&nbsp;<p>SHOP</p>
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>X</span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
        <Link to="/admin/dashboard" className="sidebar-link">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
        <Link to="/admin/products" className="sidebar-link">
            <BsFillArchiveFill className="icon" />Products
            </Link>
        </li>
        <li className="sidebar-list-item">
        <Link to="/admin/restaurants" className="sidebar-link">
            <BsFillGrid3X3GapFill className="icon" />Restaurants
            </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/admin/customers" className="sidebar-link">
            <BsPeopleFill className="icon" /> Customers
          </Link>
        </li>
        <li className="sidebar-list-item">
        <Link to="/admin/orders" className="sidebar-link">
            <BsListCheck className="icon" />Orders
            </Link>
        </li>
        <li className="sidebar-list-item">
        <Link to="/admin/reports" className="sidebar-link">
            <BsMenuButtonWideFill className="icon" />Reports
            </Link>
        </li>
        <li className="sidebar-list-item">
        <Link to="/logout" onClick={() => handleLogout()}>
            <BsLockFill className="icon" /> Log Out
        </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;