import React from 'react';
import Sidebar from '../../../Shared/Sidebar/Sidebar';

const OrderList = () => {
    return (
        <div>
        <Sidebar/>
      <div className="content">
      <h3 className = "mt-1">Order List</h3>

      <table class="table table-light mt-4">
  <thead className="table-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email ID</th>
      <th scope="col">Service</th>
      <th scope="col">Pay With</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Emon Mollah</td>
      <td>emon@gmail.com</td>
      <td>Interior Design</td>
      <td>Paypal</td>
      
      <td>Done</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Atik Sarker</td>
      <td>atik@gmail.com</td>
      <td>Office Interior Design</td>
      <td>Creadit Card</td>
      <td>Pending</td>
    </tr>
   
   
  </tbody>
</table>
      </div>
    </div>
    
    );
};

export default OrderList;