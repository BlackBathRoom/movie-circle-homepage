import Image from 'next/image';

type Props = {
  images: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  }[];
};
const Slider: React.FC<Props> = ({ images }) => {
  return (
    <div className="overflow-x-scroll py-6 px-4">
      <ul className="inline-flex space-x-4 justify-center w-full min-w-fit">
        {images.map((image, index) => (
          <li key={index} className="flex-shrink-0">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="w-48 h-36 rounded shadow"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;
