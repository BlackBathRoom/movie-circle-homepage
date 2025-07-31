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
    <div className="overflow-x-scroll bg-zinc-300 px-4 py-6">
      <ul className="inline-flex w-full min-w-fit justify-center space-x-4">
        {images.map((image, index) => (
          <li key={index} className="flex-shrink-0">
            {image.href ? (
              <Link href={image.href}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width || 300}
                  height={image.height || 200}
                  className="h-36 w-48 cursor-pointer rounded shadow"
                />
              </Link>
            ) : (
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width || 300}
                height={image.height || 200}
                className="h-36 w-48 rounded shadow"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;
