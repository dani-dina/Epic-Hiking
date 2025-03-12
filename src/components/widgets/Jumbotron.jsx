import ac from '../../assets/ac.png';
import swimming from '../../assets/swimming.png';
import car from '../../assets/car.png';
import dinner from '../../assets/dinner.png';
import Check from '../../assets/icons/Check';
import Search from '../../assets/icons/Search';

import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';

const Jumbotron = () => {
  const data = [
    { id: '0', image: ac, title: 'A/C' },
    { id: '1', image: swimming, title: 'Swimming' },
    { id: '2', image: car, title: 'Riding' },
    { id: '3', image: dinner, title: 'Dinner' }
  ];

  return (
    <div className="w-[100%] h-[100%] rounded-b-md flex items-center justify-around">
      <div className="w-[30%] h-[90%] flex flex-col items-center justify-around">
        <div className='w-[90%] h-[40%] flex items-center justify-between'>
          <h1 className='text-2xl font-bold'>Facilities</h1>
          <a className="text-[rgb(44,9,220)] decoration-0 cursor-pointer">See All</a>
        </div>
        <div className='w-[90%] h-[50%]'>
          <div className='w-full h-[100%] flex items-center justify-between'>
            {data.map((item) => (
              <div key={item.id} className='h-[100%] flex flex-col items-center justify-around'>
                <img className='w-[2em] h-[2em] rounded-md border-2 border-gray-400 p-5' src={item.image} />
                <h2 className='font-semibold'>{item.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-[20%] h-[80%] flex items-center justify-center">
        <div className='h-[90%] w-[90%] flex flex-col items-start justify-between'>
          <h1 className='text-2xl font-bold'>Hotels For You</h1>
          <p>5 Days and Night</p>
          <div className='w-[75%] h-[30%] flex items-center justify-around border-2 border-gray-200 rounded-md p-5'>
            <Check />
            <span>USD | 1,200</span>
          </div>
        </div>
      </div>

      <div className="w-[30%] h-[90%] flex items-center justify-center">
        <div className='w-[95%] h-[90%] flex flex-col items-center justify-around'>
          <div className='w-[90%] h-[40%] flex items-end justify-around'>
            <input type='text' placeholder='  search ...' className='border-0 outline-0 border-b-2 border-[rgb(44,9,220)]' />
            <Search />
          </div>
          <div className='w-[90%] h-[40%] flex items-end justify-around'>
            {[img1, img2, img3, img4].map((img, index) => (
              <img key={index} className="w-[2em] h-[2em] rounded-[50%] cursor-pointer" src={img} alt={`Image ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
