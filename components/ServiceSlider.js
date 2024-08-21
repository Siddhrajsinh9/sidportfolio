// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from 'react-icons/rx';

// import required modules
import { FreeMode, Pagination } from 'swiper';

// service data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Crafting unique and memorable brand identities that resonate with your audience and set you apart in the market.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Creating visually stunning & user-friendly designs that not only elevate your brand’s identity but also engage your customers effectively.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Building robust and scalable websites with the latest technologies to ensure optimal performance and functionality.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Producing compelling and persuasive content that drives action and communicates your message clearly.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Enhancing your online visibility and driving organic traffic through strategic optimization and effective search engine techniques.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper 
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },

      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item,index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-4 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              {/* icon */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              {/* title & desc */}
              <div className='mb-8'>
                <div className='mb-2 text-xl'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>{item.description}</p>
              </div>
              {/* arrow */}
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:rotate-45 group-hover:text-accent transition-all duration-300'  />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
