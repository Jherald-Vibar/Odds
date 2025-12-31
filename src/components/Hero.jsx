    import React, { useEffect } from 'react'
    import gsap from 'gsap'
    import "../box.css"
    const Hero = () => {

    useEffect(() => {
        gsap.to(".box", {
        rotationY: 360,
        rotationX: 360,
        duration: 5,
        repeat: -1,
        ease: "linear"
        });
    }, []);

    return (
        <section className='flex h-[500px] px-3 py-3 overflow-hidden border-b-2 border-gray-400'>
            <div className='w-1/2 flex flex-col justify-center items-center'>
                <div className="box">
                    <div className="face front"></div>
                    <div className="face back"></div>
                    <div className="face right"></div>
                    <div className="face left"></div>
                    <div className="face top"></div>
                    <div className="face bottom"></div>
                </div>
            </div>

            <div className='w-1/2 flex flex-col justify-center items-center'>
                <div className='w-[300px] h-[200px] flex flex-col items-start justify-start px-3 py-3 gap-3'>
                    <span className='text-xl font-semibold font-sans md:text-3xl '>What are the</span>
                    <span className='text-3xl font-bold font-sans md:text-7xl'>ODDS ?</span>
                    <span className='border-3 w-60 border-black'></span>

                    <button className='w-[100px] bg-gray-600 rounded-full px-2 py-2 border border-black'>
                        Contact
                    </button>
                </div>
            </div>
        </section>
    )
    }

    export default Hero