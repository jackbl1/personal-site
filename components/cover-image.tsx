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
      className={cn('shadow-sm w-full', {
        'hover:shadow-lg transition-shadow duration-200': slug,
      })}
      width='360'
      height='195'
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
