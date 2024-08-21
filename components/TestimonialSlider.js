// testimonial data
const testimonialSlider = [
  {
    image: '/t-avt-1.png',
    name: 'Manrajsinh',
    position: 'Customer',
    message:
      'Exceptional work! The team delivered a robust and scalable website that exceeded our expectations. Communication was seamless throughout the project.',
  },
  {
    image: '/t-avt-2.png',
    name: 'Mahipalsinh',
    position: 'Customer',
    message:
      'Highly impressed with the level of expertise and attention to detail. Our new site looks fantastic and performs flawlessly. Would recommend without hesitation.',
  },
  {
    image: '/t-avt-3.png',
    name: 'Harshsinh',
    position: 'Customer',
    message:
      'Professional, efficient, and creative. They took our ideas and turned them into a reality with exceptional coding and design skills.',
  },
  {
    image: '/t-avt-1.png',
    name: 'Mahipatsinh',
    position: 'Customer',
    message:
      'The team not only met our tight deadline but also delivered a product that was well beyond our original vision. Excellent work and a pleasure to work with.',
  },
  {
    image: '/t-avt-2.png',
    name: 'Yuvrajsinh',
    position: 'Customer',
    message:
      'Fantastic experience from start to finish. They provided clear updates, tackled challenges head-on, and delivered a top-notch solution.',
  },
  {
    image: '/t-avt-3.png',
    name: 'Divyrajsinh',
    position: 'Customer',
    message:
      'Outstanding service and technical skills. The development process was smooth, and the end result is a beautifully designed, highly functional website.',
  },
];

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper';

// icons
import { FaQuoteLeft } from 'react-icons/fa';
// next image
import Image from 'next/image';

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className='h-[400px]'
    >
      {testimonialSlider.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
              {/* avatar, name, position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                  {/* avatar */}
                  <div className='mb-2 mx-auto'>
                    <Image src={person.image} width={100} height={100} alt=''  />
                  </div>
                  {/* name */}
                  <div className='text-lg'>{person.name}</div>
                  {/* position */}
                  <div className='text-[12px] uppercase font-extralight tracking-widest'>{person.position}</div>
                </div>
              </div>
              {/* quote & message */}
              <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                {/* quote icon */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0'  />
                </div>
                {/* message */}
                <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
