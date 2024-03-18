

const Banner = () => {
    return (
        <div className="roun">
           <div className="lg:h-[80vh] h-[40vh] relative rounded-2xl bg-base-100">
            <img src="/image/WhatsApp Image 2024-03-16 at 07.58.06_2f677e62.jpg" className="h-full bg-base-100 rounded-2xl w-full absolute z-10" alt=""/>
                <div className="flex justify-center items-center z-20">
                    <div className="z-30 text-white flex flex-col text-center justify-center items-center lg:px-[100px]">
                        <h1 className="lg:text-5xl text-xl font-bold text-center mt-3 lg:mt-[100px]">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="lg:py-6 py-3 text-center lg:px-[90px]">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                        <div className="flex justify-around lg:gap-[100px]">
                            <button className="btn bg-green-400 border-none w-2/5 lg:w-2/3 rounded-3xl py-3 text-white">Explore Now</button>
                            <button className="btn bg-transparent text-white w-2/5 lg:w-2/3 rounded-3xl py-3">Our Feedback</button>
                            </div>
                            </div>
                            </div>
                            </div>
                            
  
        </div>
    );
};

export default Banner;