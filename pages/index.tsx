import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "../interfaces/post";
import Project from "../interfaces/project";
import Projects from "../components/projects";
import Articles from "../components/articles";

type Props = {
  projects: Project[];
  articles: Post[];
};

export default function Index({ projects, articles }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>jbloomfeld.xyz</title>
        </Head>
        <Container>
          <Intro />
          <Projects projects={projects} />
          <Articles posts={articles} />
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const projects: Project[] = [
    {
      slug: "",
      title: "Phoenix Studio",
      link: "https://www.phoenix.studio",
      date: "2022-12-01T12:35:07.322Z",
      coverImage: "/assets/projects/phoenix-studio/cover.png",
      excerpt:
        "Phoenix Studio offers musicians a new revenue stream by connecting fans directly to the artists they want to support.",
      ogImage: { url: "/assets/projects/phoenix-studio/cover.png" },
      content: "",
    },
    {
      slug: "",
      title: "Live Stoic",
      link: "https://www.livestoic.xyz/",
      date: "2022-01-01T12:35:07.322Z",
      coverImage: "/assets/projects/live-stoic/cover.png",
      excerpt:
        "Live Stoic is a collection of projects on the Solana blockchain promoting stoic philosophy.",
      ogImage: { url: "/assets/projects/live-stoic/cover.png" },
      content: "",
    },
  ];
  const articles = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { projects, articles },
  };
};
