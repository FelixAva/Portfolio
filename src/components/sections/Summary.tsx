const Summary = () => {
  return (
    <section id='summary' className='snap-start min-h-[calc(100vh-96px)] bg-[#EFE9E3] flex justify-center items-center gap-8'>
      <img src="/src/assets/me.jpeg" alt="Image of myself" className='w-80 h-full rounded-full' />

      <div className='w-150'>
        <h1 className='font-bold text-6xl pb-5'>Felix Avalos</h1>
        <p className='text-xl'>As a passionate Software Engineer specializing in Front Start development, I focus primarily on mobile and web applications, leveraging technologies such as React Native, HTML, CSS and JavaScript. With experience working in teams to develop cross-platform applications for Android and iOS during a bootcamp.</p>
      </div>
    </section>
  );
};

export default Summary;
