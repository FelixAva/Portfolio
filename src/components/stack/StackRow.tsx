import type { StackDetails } from "../../types/Stack";
import StackShield from "./StackShield";

interface Props {
  title: string;
  stackList: StackDetails[];
}

const StackRow = ({ stackList, title }: Props) => {
  return (
    <div className="text-center text-3xl">
      <h3 className="my-2.5">{ title }</h3>
      <div className="flex justify-center">
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
