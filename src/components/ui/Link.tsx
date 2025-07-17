import clsx from "clsx";
import Icon from "./Icon";

interface Props {
  title: string;
  src: string;

  // Functionality and style variations
  style?: 'default' | 'button';
  icon?: string;
}

const Link = ({
  title,
  src,
  style='default',
  icon='heart',
}: Props) => {
  return style === 'default' ?
  (
    <a href={src} className="hover:text-[#8d8d8d] lg:w-full xl:w-auto">
      { title }
    </a>
  )
  :
  (
    <a href={src} download={src} target="_blank" className={
      clsx(
      'flex justify-center items-center gap-2 text-lg rounded-lg py-2 px-3 border-2 border-black bg-white text-black md:py-3 md:px-4 md:gap-3.5 md:text-xl',
      'hover:bg-black hover:text-white hover:border-black'
    )}>{ title } <Icon icon={icon} className="" /></a>
  );
};

export default Link;
