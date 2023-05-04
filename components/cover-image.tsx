import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  title: string;
  src: string;
  slug?: string;
  link?: string;
};

const CoverImage = ({ title, src, slug, link }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={
        'shadow-sm w-full rounded-lg duration-100 transform hover:scale-105 transition-shadow hover:shadow-2xl'
      }
      width='180'
      height='93'
    />
  );
  return (
    <div className='sm:mx-0'>
      {slug && (
        <Link as={`/posts/${slug}`} href='/posts/[slug]' aria-label={title}>
          {image}
        </Link>
      )}
      {link && (
        <a href={link} aria-label={title}>
          {image}
        </a>
      )}
    </div>
  );
};

export default CoverImage;
