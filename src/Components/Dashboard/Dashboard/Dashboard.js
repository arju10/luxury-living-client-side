import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import '../../Shared/Sidebar/Sidebar.css';

const Dashboard = () => {
    return (
        <div>
            <Sidebar/>
            <div className = "content">
                This is Dash board ...
            </div>
        </div>
    );
};

export default Dashboard;