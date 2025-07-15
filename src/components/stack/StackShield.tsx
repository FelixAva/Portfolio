import { Icon } from "../";
import type { StackDetails } from "../../types/Stack";

const StackShield = ({ name, icon }: StackDetails) => {
  return (
    <div className="w-50 h-50 rotate-90">
      <img src="/assets/shield.svg" alt="Shield stack" className="absolute w-full h-full" />

      <div className="relative z-20 flex flex-col items-center justify-center gap-4 h-full rotate-270">
        <Icon icon={ icon } width={70} />
        <span className="text-2xl font-medium text-gray-800">{ name }</span>
      </div>
    </div>
  );
};

export default StackShield;
