import Image from 'next/image';

type Props = {
  images: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  }[];
};

const AllPhotoWorks: React.FC<Props> = ({ images }) => {
  return (
    <div className="w-screen h-screen p-4 flex flex-wrap justify-center items-center content-center overflow-hidden">
      {images.map((image, index) => (
        <div key={index} className="m-2 flex-shrink-0">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="rounded shadow transition duration-300 ease-in-out
         hover:brightness-110 hover:shadow-xl hover:ring-2 hover:ring-white"
          />
        </div>
      ))}
    </div>
  );
};

export default AllPhotoWorks;
