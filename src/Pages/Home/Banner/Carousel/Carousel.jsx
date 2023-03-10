import React from 'react';

const Carousel = ({slide}) => {
    const {id, image, prev, next} = slide;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <img src={image} alt='' className="w-full" />
            <div className="absolute flex justify-start transform -translate-y-1/2 left-20 top-1/4">
                <h1 className='lg:text-5xl md:text-3xl sm:text-2xl font-bold text-white'>
                    Need A Car 
                </h1>
            </div>
            <div className="absolute md:flex justify-start transform -translate-y-1/2 left-20 top-1/2 md:w-2/5 sm:w-2/3 hidden">
                <p className=' text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-20 top-2/3 w-2/5">
                <button className="btn btn-warning mr-5 ">Discover More</button>
                <button className="btn btn-outline btn-warning">Latest work</button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle hover:bg-red-500">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle hover:bg-red-500">❯</a>
            </div>
        </div>
    );
};

export default Carousel;