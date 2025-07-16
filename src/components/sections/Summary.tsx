const Summary = () => {
  return (
    <section id='summary' className='snap-start bg-[#EFE9E3] flex flex-col justify-center items-center md:gap-8 md:min-h-[calc(100vh-96px)] md:flex-row'>
      <img src="/assets/me.webp" alt="Image of myself" className='w-50 mt-5 mb-2 h-full rounded-full md:w-80 md:m-0' />

      <div className='mx-2.5 md:w-150'>
        <h1 className='font-bold text-4xl text-center pb-2.5 md:text-left md:text-6xl md:pb-5'>Felix Avalos</h1>
        <p className='text-lg mb-5 md:m-0 md:text-xl'>As a passionate Software Engineer specializing in Front Start development, I focus primarily on mobile and web applications, leveraging technologies such as React Native, HTML, CSS and JavaScript. With experience working in teams to develop cross-platform applications for Android and iOS during a bootcamp.</p>
      </div>
    </section>
  );
};

export default Summary;
