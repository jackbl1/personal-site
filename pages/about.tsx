import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../components/layout";

export default function About() {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>jbloomfeld.xyz</title>
      </Head>

      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800   pb-4">
              Jack Bloomfeld
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600  ">
              I am a software engineer with a passion for web3 and{" "}
              <a
                className="text-blue-700"
                href="https://www.buildingbeauty.org/beautiful-software"
              >
                beautiful software.
              </a>
              <br />
              <br /> I am currently working on projects to reshuffle the
              backwards incentive structures of the music industry, mostly in
              the Solana ecosystem. <br />
              <br />I also frequently write blog posts about various topics that
              interest me, mostly philosophy and blockchain. The main thing that
              motivates me is my obsession with truth.
            </p>
          </div>
          <div className="w-full lg:w-8/12">
            {/* <img
              className="w-full h-full"
              src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
              alt="A group of People"
            /> */}

            <img
              className="w-full h-full"
              src={`${router.basePath}${"/assets/images/demo-pic.png"}`}
              alt={`picture of software demo`}
            />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800   pb-4">
              Please reach out!
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600  ">
              I am always happy to chat about my projects, my interests, my
              hobbies, or anything else.
            </p>
          </div>
          <div className="w-full lg:w-8/12 lg:pt-8">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <a href="https://twitter.com/0xJub11">
                  <img
                    className="md:block hidden"
                    src={`${router.basePath}${"/assets/images/twitter.png"}`}
                    alt="twitter logo"
                  />
                  <img
                    className="md:hidden block"
                    src={`${router.basePath}${"/assets/images/twitter.png"}`}
                    alt="twitter logo"
                  />
                </a>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <a href="https://medium.com/@jackbloomfeld1">
                  <img
                    className="md:block hidden"
                    src={`${router.basePath}${"/assets/images/medium.png"}`}
                    alt="medium logo"
                  />
                  <img
                    className="md:hidden block"
                    src={`${router.basePath}${"/assets/images/medium.png"}`}
                    alt="medium logo"
                  />
                </a>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <a href="https://www.linkedin.com/in/jack-bloomfeld-90357b112/">
                  <img
                    className="md:block hidden"
                    src={`${router.basePath}${"/assets/images/linkedin.png"}`}
                    alt="linkedin logo"
                  />
                  <img
                    className="md:hidden block"
                    src={`${router.basePath}${"/assets/images/linkedin.png"}`}
                    alt="linkedin logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
