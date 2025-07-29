import Image from 'next/image';
import Link from 'next/link';

type Props = {
  images: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    href?: string;
  }[];
};

const Slider: React.FC<Props> = ({ images }) => {
  return (
    <div className="overflow-x-scroll py-6 px-4">
      <ul className="inline-flex space-x-4 justify-center w-full min-w-fit">
        {images.map((image, index) => (
          <li key={index} className="flex-shrink-0">
            {image.href ? (
              <Link href={image.href}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width || 300}
                  height={image.height || 200}
                  className="w-48 h-36 rounded shadow cursor-pointer"
                />
              </Link>
            ) : (
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width || 300}
                height={image.height || 200}
                className="w-48 h-36 rounded shadow"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;
