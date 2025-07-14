import clsx from "clsx";
import Icon from "./Icon";

interface Props {
  title: string;
  src: string;
  style?: 'default' | 'button';
  icon?: string;
}

const Link = ({
  title,
  src,
  style='default',
  icon='heart'
}: Props) => {
  return style === 'default' ?
  (
    <a href={src} className="hover:text-[#8d8d8d]">
      { title }
    </a>
  )
  :
  (
    <a href={src} className={
      clsx(
      'flex justify-center items-center gap-3.5 text-xl rounded-lg py-3 px-4 border-2 border-black bg-white text-black',
      'hover:bg-black hover:text-white hover:border-black'
    )}>{ title } <Icon icon={icon} className="" /></a>
  );
};

export default Link;
