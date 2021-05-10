import React from "react";
import Sidebar from "../../../Shared/Sidebar/Sidebar";

const BookingList = () => {
  return (
    <div>
        <Sidebar/>
      <div className="content">
      <h2 className = "mt-1">Booking History</h2>

      <table class="table table-light mt-4">
  <thead className="table-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Service</th>
      <th scope="col">Price</th>
      <th scope="col">Date</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Interior Design</td>
      <td>299</td>
      <td>12/10/10</td>
      <td>Done</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Home Design</td>
      <td>399</td>
      <td>10/10/10</td>
      <td>Pending</td>
    </tr>
   
  </tbody>
</table>
      </div>
    </div>
  );
};

export default BookingList;
