import DateFormatter from './date-formatter';
import Link from 'next/link';

type Props = {
  title: string;
  date: string;
  slug: string;
};

const PostPreview = ({ title, date, slug }: Props) => {
  return (
    <div>
      <p className='text-xl mb-1 leading-snug text-emerald-800 underline'>
        <Link
          as={`/posts/${slug}`}
          href='/posts/[slug]'
          className='hover:underline'
        >
          {title}
        </Link>
      </p>
      <div className='text-sm mb-1'>
        <DateFormatter dateString={date} />
      </div>
    </div>
  );
};

export default PostPreview;
