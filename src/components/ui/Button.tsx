import clsx from "clsx";
import Icon from "./Icon";

interface Props {
  title: string;
  hasIcon?: boolean;
  icon?: string;
}

const Button = ({ title, hasIcon, icon = "heart" }: Props) => {
  return (
    <button
      className={clsx(
        'flex justify-center items-center gap-3.5 text-xl rounded-lg py-3 px-4 border-2 border-black bg-white text-black',
        'hover:bg-black hover:text-white hover:border-black hover:cursor-pointer'
      )}
    >
      {title}
      {hasIcon && <Icon icon={icon} className="" />}
    </button>
  );
};

export default Button;
