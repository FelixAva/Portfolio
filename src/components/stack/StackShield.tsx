import { Icon } from "../";
import type { StackDetails } from "../../types/Stack";

const StackShield = ({ name, icon }: StackDetails) => {
  return (
    <div className="w-40 h-40 min-w-[160px] rotate-90 relative md:w-[200px] md:h-[200px] md:min-w-[200px]">
      <img src="/assets/shield.svg" alt="Shield stack" className="absolute min-w-[10rem] w-full h-full" />

      <div className="relative z-20 flex flex-col items-center justify-center gap-1.5 h-full rotate-270 md:gap-4">
        <Icon icon={ icon } width={50} />
        <span className="text-lg font-semibold text-gray-800 md:text-2xl">{ name }</span>
      </div>
    </div>
  );
};

export default StackShield;
