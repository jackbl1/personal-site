import PostPreview from './post-preview';
import type Post from '../interfaces/post';

type Props = {
  posts: Post[];
};

const Articles = ({ posts }: Props) => {
  return (
    <section>
      <h2 className='mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight'>
        Articles
      </h2>
      <div className='grid grid-cols-1 gap-y-10 md:gap-y-16 mb-12'>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  );
};

export default Articles;
