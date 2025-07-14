import { Icon } from "../";

const StackShield = ({ name, icon }: { name: string, icon: string }) => {
  return (
    <div className="w-80 h-80 rotate-90">
      <img src="/assets/shield.svg" alt="Shield stack" className="absolute w-full h-full" />

      <div className="relative z-20 flex flex-col items-center justify-center gap-8 h-full rotate-270">
        <Icon icon={ icon } width={70} />
        <span className="text-2xl font-semibold text-gray-800">{ name }</span>
      </div>
    </div>
  );
};

export default StackShield;
