import PostPreview from './post-preview';
import type Post from '../interfaces/post';

type Props = {
  posts: Post[];
};

const Articles = ({ posts }: Props) => {
  return (
    <section>
      <h2 className='mb-8 text-3xl md:text-5xl font-bold tracking-tighter leading-tight'>
        Articles
      </h2>
      <div className='grid grid-cols-1 gap-y-4 md:gap-y-8'>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
          />
        ))}
      </div>
      <br />
      <br />
      <br />
    </section>
  );
};

export default Articles;
