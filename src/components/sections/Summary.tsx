const Summary = () => {
  return (
    <section id='summary' className='snap-start bg-[#EFE9E3] flex flex-col justify-center items-center py-5 lg:min-h-[calc(100vh-198px)] lg:gap-8 lg:flex-row lg:p-0 xl:min-h-[calc(100vh-142px)] 2xl:min-h-[calc(100vh-96px)]'>
      <img src="/assets/me.webp" alt="Image of myself" className='w-50 mb-2 h-full rounded-full md:w-65 lg:w-80 lg:m-0' />

      <div className='mx-4 md:mx-0 md:w-180 lg:w-150'>
        <h1 className='font-bold text-4xl text-center pb-2.5 lg:text-left lg:text-6xl lg:pb-5'>Felix Avalos</h1>
        <p className='text-lg lg:m-0 lg:text-xl'>As a passionate Software Engineer specializing in Front Start development, I focus primarily on mobile and web applications, leveraging technologies such as React Native, HTML, CSS and JavaScript. With experience working in teams to develop cross-platform applications for Android and iOS during a bootcamp.</p>
      </div>
    </section>
  );
};

export default Summary;
