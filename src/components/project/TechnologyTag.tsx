const TechnologyTag = ({ name }: { name: string }) => {
  return (
    <div className="px-3 py-1 rounded-2xl text-white text-lg bg-black">
      { name }
    </div>
  );
};

export default TechnologyTag;
