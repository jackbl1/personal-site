import Head from 'next/head';
import Container from '../components/container';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Post from '../interfaces/post';
import Project from '../interfaces/project';
import Projects from '../components/projects';
import Articles from '../components/articles';

type Props = {
  projects: Project[];
  posts: Post[];
};

export default function Index({ projects, posts }: Props) {
  return (
    <>
      <Layout posts={posts}>
        <Head>
          <title>jbloomfeld.xyz</title>
        </Head>
        <Container>
          <Intro />
          <Projects projects={projects} />
          <Articles posts={posts} />
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const projects: Project[] = [
    {
      slug: '',
      title: 'Phoenix Studio',
      link: 'https://phoenixstudio.netlify.app/',
      date: '2022-12-01T12:35:07.322Z',
      coverImage: '/assets/projects/phoenix-studio/cover.png',
      excerpt:
        'Phoenix Studio offers musicians a new revenue stream by connecting fans directly to the artists they want to support.',
      ogImage: { url: '/assets/projects/phoenix-studio/cover.png' },
      content: '',
    },
    {
      slug: '',
      title: 'Live Stoic',
      link: 'https://www.livestoic.xyz/',
      date: '2023-01-01T12:35:07.322Z',
      coverImage: '/assets/projects/live-stoic/cover.png',
      excerpt:
        'Live Stoic is a collection of projects on the Solana blockchain promoting stoic philosophy.',
      ogImage: { url: '/assets/projects/live-stoic/cover.png' },
      content: '',
    },
    {
      slug: '',
      title: 'Auth Playground',
      link: 'https://auth-playground-eight.vercel.app/',
      date: '2023-04-28T12:35:07.322Z',
      coverImage: '/assets/projects/auth-playground/cover.png',
      excerpt:
        'Auth Playground is a tool to explore different web3 authentication plug-ins for your dapp.',
      ogImage: { url: '/assets/projects/auth-playground/cover.png' },
      content: '',
    },
    {
      slug: '',
      title: "Children's Yoga with Ms. Christine",
      link: 'https://www.yogawithmschristine.com/',
      date: '2023-05-11T12:35:07.322Z',
      coverImage: '/assets/projects/yoga/cover.png',
      excerpt:
        "Children's Yoga with Ms. Christine is a website for a children's yoga instructor. It is built with Next.js and Tailwind CSS",
      ogImage: { url: '/assets/projects/yoga/cover.png' },
      content: '',
    },
  ];
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { projects, posts },
  };
};
