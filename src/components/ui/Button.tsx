import Icon from "./Icon";

interface Props {
  title: string;
  hasIcon?: boolean;
  icon?: string;
}

const Button = ({ title, hasIcon, icon="heart" }: Props) => {
  return (
    <button className="flex justify-center items-center gap-3.5 border-black border-2 text-xl rounded-lg py-3 px-4">
      { title }{ hasIcon && <Icon icon={icon} />}
    </button>
  );
};

export default Button;
