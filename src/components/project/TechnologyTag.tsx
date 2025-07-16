const TechnologyTag = ({ name }: { name: string }) => {
  return (
    <div className="px-3 py-1 rounded-2xl text-white bg-black text-[16px] font-semibold md:text-lg md:font-normal">
      { name }
    </div>
  );
};

export default TechnologyTag;
