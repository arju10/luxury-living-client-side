import React from 'react';
import TestimonialsCard from './TestimonialsCard';
import image1 from '../../../Image_Icon/Image/Ellipse 90.png';
import image2 from '../../../Image_Icon/Image/Ellipse 91.png';
import image3 from '../../../Image_Icon/Image/Ellipse 92.png';
const Testimonials = () => {
    const testimonialsData = [
        {
            name: "Nash Patrik",
            companyName:"CEO, Manpol",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, nulla.",
            star: "",
            image : image1
        },
        {
            name: "Mirian Barron",
            companyName:"CEO, Manpol",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, nulla.",
            star: "",
            image : image2
        },
        {
            name: "Bria Malone",
            companyName:"CEO, Manpol",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, nulla.",
            star: "",
            image : image3
        }
    ]
    return (
        <>
        <section className="bg-light mt-5">

        <div className = "container mt-3 mb-5 ">
         <h2 className = "text-center ">Testimonials</h2>
           
           
            <div class="row row-cols-1 row-cols-md-3 g-4 mt-3  ">
            {
                testimonialsData.map(testimonial=><TestimonialsCard testimonial={testimonial}></TestimonialsCard>)
            }
        </div>
    
        </div>
        </section>
        </>
    );
};

export default Testimonials;