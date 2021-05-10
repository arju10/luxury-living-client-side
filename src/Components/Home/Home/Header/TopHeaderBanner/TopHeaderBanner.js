import React from 'react';
import top_banner from '../../../../../Image_Icon/Image/pierre-chatel-innocenti-AlSlE8IAjZo-unsplash 1.png';
const Top_Header_Banner = () => {
    return (
        <div className = "container mt-5 d-flex flex-wrap ">
            <div className="row mt-5 ms-5 ">
                <div className="col-md-6 mt-5">
                    <h1>We Build <br/> your dream</h1>
                    <p>online easte agengy, the modern way to sell your own home <br/>
                    You can use Griffin Residensial to market your property</p>
                    <button className = "btn btn-dark text-white">Booking</button>
                </div>
                <div className="col-md-6 mb-5">
                    <img src={top_banner} alt="" style = {{height:"450px"}} className = "flex-wrap"/>
                </div>
            </div>
            
        </div>
    );
};

export default Top_Header_Banner;