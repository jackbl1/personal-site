import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Post from '../interfaces/post';

type Props = {
  posts: Post[];
};

export default function About({ posts }: Props) {
  const router = useRouter();
  return (
    <Layout posts={posts}>
      <Head>
        <title>jbloomfeld.xyz</title>
      </Head>

      <div className='2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4'>
        <div className='flex flex-col lg:flex-row justify-between gap-8'>
          <div className='w-full lg:w-5/12 flex flex-col justify-center content-center items-center'>
            <h1 className='text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4'>
              Jack Bloomfeld
            </h1>
            <p className='font-normal text-base leading-6 text-gray-600  '>
              I am a software engineer with a passion for web3, AI and{' '}
              <a
                className='text-blue-700'
                href='https://www.buildingbeauty.org/beautiful-software'
                target='_blank'
                rel='noreferrer'
              >
                beautiful software.
              </a>
              <br />
              <br />
              I also frequently write blog posts about philosophy and
              blockchain.
              <br />
              <br />
              Please reach out. I'm always happy to chat.
            </p>
          </div>
          <div className='w-full lg:w-8/12'>
            <Image
              className='shadow-lg rounded-lg content-center items-center'
              src={`${router.basePath}${'/assets/images/demo-pic.png'}`}
              alt='picture of software demo'
              width='750'
              height='400'
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { posts },
  };
};
