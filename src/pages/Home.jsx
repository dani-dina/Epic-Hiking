import Hero from '../components/layouts/Hero';
import Jumbotron from '../components/widgets/Jumbotron';
import Card from '../components/widgets/Card';
import { card } from '../constants';
import Hipo from '../assets/icons/Hipo';
import Water from '../assets/icons/Water';
import Binacular from '../assets/icons/Binacular';
import River from '../assets/icons/River';

import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';

import banner2 from '../assets/banner2.jpg';
import Button from '../components/widgets/Button';
import Empty from '../assets/icons/Empty';
import travler from '../assets/travler.jpg';

import wildness from '../assets/wildness.png';
import sunset from '../assets/sunset.png';
import automun from '../assets/automun.png';
import moon from '../assets/moon.png';
import wine from '../assets/wine.png';
import fire from '../assets/fire.png';

const Home = () => {
    const datas = [
        {
            id : '0',
            title : 'Full Moon',
            image : moon
        },
        {
            id : '1',
            title : 'Sunset & Stargazing',
            image : sunset
        },
        {
            id : '2',
            title : 'Guided Campfire',
            image : fire
        },
        {
            id : '3',
            title : 'Wine & Dine',
            image : wine
        },
        {
            id : '4',
            title : 'Wilderness Survival',
            image : wildness
        },
        {
            id : '5',
            title : 'Autumn Foliage',
            image : automun
        }
    ];
    return (
        <div className="">

            {/* Hero Section */}
            <Hero />

            {/* Entire Place of Choice */}
            <section className="w-full h-[200vh] lg:h-[80vh] flex items-center justify-around">
                <div className="w-[85%] h-[90%] flex flex-col items-center justify-around">
                    <h1 className="text-center text-4xl font-bold h-[10%] lg:h-[20%]">
                        Entire Place of Choice
                    </h1>
                    <div className="relative w-full h-[90%] lg:h-[60%] rounded-lg bg-[#E3F2F5] flex
                         items-center justify-around">
                        <div className="w-full h-[100%] lg:h-[95%] flex flex-col lg:flex-row items-center justify-around 
                             lg:translate-y-[-3em]">
                            {card.map((item) => (
                                <Card
                                    key={item.id} // Added key for each item
                                    image={item.image}
                                    title={item.title}
                                    btnText={item.btnText}
                                    price={item.price}
                                    id={item.id}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Hiking Surprises Section */}
            <section className="w-full h-[65vh] lg:h-[80vh] flex items-center justify-center bg-[#E3F2F5]
                     lg:bg-white">
                <div className="w-[88%] h-[90%] flex items-center justify-between">
                    {/* Left Side Content */}
                    <div className="w-[100%] lg:w-[45%] h-[90%] flex items-center justify-center">
                        <div className="w-[90%] h-[80%] flex flex-col justify-around">
                            <h1 className="font-bold text-4xl">
                                Hiking Surprises
                            </h1>
                            <p className=''>
                                Here are some of the best hiking surprises that can make your adventure unforgettable
                            </p>
                            <div className="h-[60%] flex flex-col justify-around ">
                                <div className="w-[90%] lg:w-[50%] flex items-center justify-between">
                                    <div className=' rounded-[50%] w-[30px] h-[30px] flex items-center
                                         justify-center bg-[rgba(44,9,220,0.3)]'> 
                                       <Hipo /> 
                                    </div>
                                    <div className='w-[75%]'><h2 className='text-2xl lg:text-[1em] font-bold'>Wildlife Encounter</h2></div>
                                </div>
                                <div className="w-[90%] lg:w-[50%] flex items-center justify-between ">
                                    <div className=' rounded-[50%] w-[30px] h-[30px] flex items-center
                                         justify-center bg-[rgba(44,9,220,0.3)]'> 
                                       <Water /> 
                                    </div>
                                   <div className='w-[75%]'><h2 className='text-2xl lg:text-[1em] font-bold'>Hidden Waterfalls</h2></div>
                                </div>
                                <div className="w-[90%] lg:w-[50%] flex items-center justify-between ">
                                    <div className=' rounded-[50%] w-[30px] h-[30px] flex items-center
                                         justify-center bg-[rgba(44,9,220,0.3)]'> 
                                       <Binacular/> 
                                    </div>
                                   <div className='w-[75%]'><h2 className='text-2xl lg:text-[1em] font-bold'>Scenic Views</h2></div>
                                </div>
                                <div className="w-[90%] lg:w-[50%] flex items-center justify-between">
                                    <div className=' rounded-[50%] w-[30px] h-[30px] flex items-center
                                         justify-center bg-[rgba(44,9,220,0.3)]'> 
                                       <River /> 
                                    </div>
                                   <div className='w-[75%] lg:w-[75%]'><h2 className='text-2xl lg:text-[1em] font-bold'>Natural Springs</h2></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Content with Image Gallery */}
                    <div className="hidden relative w-[60%] h-[81%] lg:flex justify-center">
                        <div className="absolute bottom-0 w-[90%] h-[70%] bg-[rgba(44,9,220,0.1)]
                             rounded-md">
                            <div className="relative w-full h-[60%] flex justify-center">
                                <div className="absolute top-[-7em] w-[80%] h-[150%] border-2 border-white
                                      rounded-md">
                                    <img className="w-full h-full rounded-md" src={img1} alt="Image 1" />
                                </div>
                            </div>
                            <div className="w-full h-[40%] flex flex-col items-center justify-around">
                                <div className="w-[70%] flex items-center justify-between">
                                    {[img1, img2, img3, img4, img5].map((img, index) => (
                                        <img
                                            key={index}
                                            className="w-[2.5em] h-[2.5em] rounded-[50%] cursor-pointer"
                                            src={img}
                                            alt={`Image ${index + 1}`}
                                        />
                                    ))}
                                </div>
                                <h1 className="font-semibold">Enjoy Your Favorite Places</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-full h-[80vh] lg:h-[100vh] flex flex-col items-center justify-around'>
                {/* Relax section */}
                <div className='w-full h-[90%] lg:h-[90%] flex flex-col lg:flex-row'>
                    <div className='w-[95%] lg:w-[60%] h-[50%] lg:h-full flex items-center justify-center'>
                        <img className='h-[100%] lg:h-[70%] w-[95%] lg:w-[85%]' src={banner2} />
                    </div>
                    <div className='w-[95%] lg:w-[50%] h-full flex items-center justify-center'>
                      <div className='w-[90%] h-[95%] lg:h-[55%] flex flex-col items-start justify-around
                                     '>
                        <div>
                        <span className='text-[rgb(44,9,220)]'>Welcome to Epic Hikings</span>
                        <h1 className='text-3xl font-bold'> Relaxing Pleasure</h1>
                        </div>
                        <p className='w-[100%] lg:w-[85%]'>
                          Explore the great outdoors with our expert hiking guides, trail recommendations,
                          and gear tips. Whether you're a beginner or an experienced adventurer, we help
                          you discover breathtaking landscapes and hidden gems. Start your journey today
                          and experience nature like never before!
                        </p>
                        <Button
                            title={'Exlplore ...'}
                            Child={Empty}
                            className={'w-[7em] h-[2.5em] bg-[rgb(44,9,220)] text-white rounded-md'}
                        />
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-full h-[80vh] lg:h-[100vh] flex items-center justify-center'>
                {/* Top Events section*/}
                <div className='w-full h-[60%] bg-[#E3F2F5] flex items-center justify-center'>
                    <div className='h-[90%] w-[100%] lg:w-[80%] bg-white rounded-lg flex'>
                        <div className='w-[100%] lg:w-[60%] h-full flex items-center justify-center'>
                            <div className='w-full lg:w-[90%] h-[90%] flex flex-col items-center justify-around'>
                                <h1 className='text-4xl font-bold mt-[2em] w-[80%]'>
                                    Search For Top Hiking Events
                                </h1>
                                <div className='w-full lg:w-[90%] h-[90%] flex items-center justify-center'>
                                    <div className='w-[90%] grid grid-cols-2 grid-rows-2 gap-7'>
                                        {
                                            datas.map((item)=>(
                                                <div key={item.id} className='w-[95%] flex items-center gap-[1em]'>
                                                    {<img  src={item.image} className='w-[20px] '/>}
                                                     <span className='font-semibold'> {item.title}</span>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='hidden lg:flex relative w-[40%] h-full '>
                            <img 
                            src={travler}
                            className='hidden lg:flex absolute top-[-12em] w-[100%] h-[160%]'
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;