const Intro = () => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-[url('/assets/home-bg.webp')] bg-cover bg-no-repeat p-12 mb-12">
      <section className='flex-col md:flex-row flex items-center md:justify-between mt-16 mb-6 md:mb-6'>
        <h1 className='text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8'>
          Welcome
        </h1>
      </section>
      <section className='flex-col md:flex-row flex items-center md:justify-between mb-16 md:mb-12'>
        <h4 className='text-center md:text-left text-lg mt-5 md:pl-8'>
          Below is a collection of my projects, writings, and thoughts.
          <br /> I always look forward to hearing comments & feedback.
        </h4>
      </section>
    </div>
  );
};

export default Intro;
