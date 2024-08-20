// next image
import Image from "next/image";

const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none ml-10">
    <Image 
      src={'/avatar2.png'}
      width={600}
      height={678}
      alt=""
      className="translate-z-0 w-full h-full "
    />
  </div>;
};

export default Avatar;
