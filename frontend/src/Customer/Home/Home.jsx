import React from 'react';
import services from '../../data/services';
import Banner from './Banner';
import HomeServiceCard from './HomeServiceCard';

import hairSalonImg from '../../assets/services/hair-salon-3173422_1280.jpg';
import combingImg from '../../assets/services/combing-6881725_1280.jpg';
import pexelsrdneImg from '../../assets/services/pexels-rdne-7755461.jpg';
import pexelsollyImg from '../../assets/services/pexels-olly-3764568.jpg';
import SalonList from './Salon/SalonList';



const Home = () => {
    return (
        <div className="space-y-20">

            {/* Banner Section */}
            <section>
                <Banner />
            </section>

            {/* Main Section (Left Services + Right Image Grid) */}
            <section className="space-y-10 lg:space-y-0 lg:flex items-start gap-5 px-20">

                {/* LEFT SIDE */}
                <div className="w-full lg:w-1/2">
                    <h1 className="text-2xl font-semibold pb-9">
                        What are you looking for, Bestie?
                    </h1>

                    <div className="flex flex-wrap justify-center items-center gap-5">
                        {services.map((item) => (
                            <HomeServiceCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE – IMAGE GRID */}
                <div className="w-full lg:w-1/2 border grid gap-3 grid-cols-2 grid-rows-12 h-auto md:h-[90vh]">

                    <div className="row-span-7">
                        <img
                            src={hairSalonImg}
                            alt="Hair Salon"
                            className="w-full h-full object-cover rounded-md"
                        />
                    </div>

                    <div className="row-span-5">
                        <img
                            src={combingImg}
                            alt="Combing"
                            className="w-full h-full object-cover rounded-md"
                        />
                    </div>

                    <div className="row-span-7">
                        <img
                            src={pexelsrdneImg}
                            alt="RDNE"
                            className="w-full h-full object-cover rounded-md"
                        />
                    </div>

                    <div className="row-span-5">
                        <img
                            src={pexelsollyImg}
                            alt="Olly"
                            className="w-full h-full object-cover rounded-md"
                        />
                    </div>

                </div>

            </section>
<section className='=px-20'>
    <h1 className='text3xl font-bold pb-10'>Book Your Favourite salon</h1>
<SalonList/>
</section>
        </div>
    );
};

export default Home;



// import React from 'react';
// import services from '../../data/services';
// import Banner from './Banner';
// import HomeServiceCard from './HomeServiceCard';
// import hairSalonImg from '../../assets/services/hair-salon-3173422_1280.jpg';
// import combingImg from '../../assets/services/combing-6881725_1280.jpg';
// import pexelsrdneImg from '../../assets/services/pexels-rdne-7755461.jpg';
// import pexelsollyImg from '../../assets/services/pexels-olly-3764568.jpg';
// const Home = () => {
//     return (
//         <div className='space-y-20'>
//             <section>
//                 <Banner />
//             </section>

// <section className="space-y-10 lg:space-y-0 lg:flex items-center gap-5 px-20">

//     {/* LEFT SIDE */}
//     <div className="w-full lg:w-1/2">
//         <h1 className="text-2xl font-semibold pb-9">
//             What are you looking for, Bestie?
//         </h1>

//         <div className='flex flex-wrap justify-center items-center gap-5'>
//             {services.map((item) => (
//                 <HomeServiceCard key={item.id} item={item} />
//             ))}
//         </div>
//     </div>

//     {/* RIGHT SIDE — Grid Images */}
//     <div className='w-full lg:w-1/2 border grid gap-3 grid-cols-2 grid-rows-12 h-[45vh] md:h-[90vh]'>
//         <div className="row-span-7">
//             <img src={hairSalonImg} alt="" className="w-full h-full object-cover rounded-md" />
//         </div>

//         <div className="row-span-5">
//             <img src={combingImg} alt="" className="w-full h-full object-cover rounded-md" />
//         </div>

//         <div className="row-span-7">
//             <img src={pexelsrdneImg} alt="" className="w-full h-full object-cover rounded-md" />
//         </div>

//         <div className="row-span-5">
//             <img src={pexelsollyImg} alt="" className="w-full h-full object-cover rounded-md" />
//         </div>
//     </div>

// </section>


//             {/* <section className="space-y-10 lg:space-y-0 lg:flex items-center gap-5 px-20">
//                 <div className="w-full lg:w-1/2">
//     <h1 className="text-2xl font-semibold pb-9">
//         What are you looking for, Bestie?
//     </h1>

//     <div className='flex flex-wrap justify-center items-center gap-5'>
//         {services.map((item) => (
//             <HomeServiceCard key={item.id} item={item} />
//         ))}
//     </div>
// </div>
//                 {/* <div className="w-full lg:w-1/2">
//                     <h1 className="text-2xl font-semibold pb-9">
//                         What are you looking for, Bestie?
//                     </h1>
//                     <div className='flex flex-wrap justify-center items-center gap-5'>
//                         {services.map((item) => (
//                             <HomeServiceCard key={item.id} item={item} />
//                         ))}
//                     </div> */}
// {/* 
//                     Fixed grid div */}
//                     {/* <div className='w-full lg:w-1/2 border grid gap-3  grid-cols-2 grid-rows-12 h-[45vh] md:h-[90vh]'>
//                         <div className="row-span-7">
//                             <img 
                                 
//                                  src={hairSalonImg} 
//                                 alt="" 
//                                className="w-full h-full object-cover rounded-md"
//                             />
//                         </div>
//                          <div className="row-span-5">
//                             <img  */}
                               
//                                  {/* src={combingImg} 
//                                 alt="" 
//                                className="w-full h-full object-cover rounded-md" */}
//             //                 /> */}
//             {/* //             </div> */}
//             {/* //              <div className="row-span-7">
//             //                 <img  */}
                                
//             {/* //                      src={pexelsrdneImg} 
//             //                     alt="" 
//             //                    className="w-full h-full object-cover rounded-md"
//             //                 />
//             //             </div> */}
//             {/* //              <div className="row-span-5">
//             //                 <img 
//                                   */}
//             {/* //                      src={pexelsollyImg} 
//             //                     alt="" 
//             //                    className="w-full h-full object-cover rounded-md"
//             //                 />
//             //             </div> */}
//             {/* //      </div> */}

//             //     </div>
//             // </section>
//             {/* home page */}
    
//     );
// };

// export default Home;


// //  import React from 'react'
 
// // import services from '../../data/services';

// // import Banner from './Banner'
// // import HomeServiceCard from './HomeServiceCard'
// // const Home=()=> {
// //     return (
// //         <div className='space-y-20'>
// //             <section>
// //                 <Banner/>
// //             </section>
// //             <section className="space-y-10 lg:space-y-0 lg:flex items-center gap-5 px-20">
// //                 <div className="w-full lg:w-1/2">
// //                     <h1 className="text-2xl font-semibold pb-9">What are you looking for, Bestie?</h1>
// //                <div className='flex flex-wrap justify-center items-center gap-5'>
// //                 {
// //                     services.map((item)=>(
// //                     <HomeServiceCard key={item.id} item={item}/>)
// //                ) }
// //                </div>

// //                 <div className='w-full lg:w-1/2 border gap-3 grid grid-cols-2 grid-rows-12 h-[45vh] md:h-[90vh]'>
// //                 d gap-3 grid-cols-2 grid-rows-12 h-[45vh] md:h[90vh] '>

// //                 <div className="row-span-7">
// //                     <img src='"/assets/services/hair-salon-3173422_1280.jpg" alt="" />
// //             </div>

// //                 </div>
// //             </section>
// //             {/* home page */}
// //         </div>
// //     );
// // };

// // export default Home