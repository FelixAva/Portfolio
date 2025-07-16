import type { StackDetails } from "../../types/Stack";
import StackShield from "./StackShield";

interface Props {
  title: string;
  stackList: StackDetails[];
}

const StackRow = ({ stackList, title }: Props) => {
  return (
    <div className="text-center">
      <h3 className="text-2xl mb-2 font-semibold md:mb-2.5 md:text-3xl">{ title }</h3>
      <div className="flex justify-start md:justify-center overflow-x-scroll md:overflow-x-hidden">
        {
          stackList.map((item) => (
            <StackShield key={item.name + item.category} {...item} />
          ))
        }
      </div>
    </div>
  );
};

export default StackRow;
