import DateFormatter from './date-formatter';
import CoverImage from './cover-image';

type Props = {
  title: string;
  link: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

const PostPreview = ({
  title,
  link,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) => {
  return (
    <div>
      <div className='mb-5'>
        <CoverImage slug={slug} title={title} src={coverImage} link={link} />
      </div>
      <h3 className='text-2xl mb-1 leading-snug text-emerald-800 underline'>
        <a href={link} className='hover:underline'>
          {title}
        </a>
      </h3>
      <div className='text-sm mb-2'>
        <DateFormatter dateString={date} />
      </div>
      <p className='text-md leading-relaxed mb-2'>{excerpt}</p>
    </div>
  );
};

export default PostPreview;
