import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
const Sidebar = () => {
    return (
        <div className="sidebar">
        <NavLink  to="/home">Home</NavLink>
        <NavLink to="/dashboard/booking">Booking</NavLink>
        <NavLink to="/dashboard/bookingList">Booking List</NavLink>
        <NavLink to="/dashboard/review">Review</NavLink>
        <NavLink to="/dashboard/orderList">Order List</NavLink>
        <NavLink to="/dashboard/addService">Add Service</NavLink>
        <NavLink to="/dashboard/makeAdmin">Make Admin</NavLink>
        <NavLink to="/dashboard/manageService">Manage Service</NavLink>
      </div>
    );
};

export default Sidebar;