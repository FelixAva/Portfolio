import { Icon as Iconify } from "@iconify/react";

interface Props {
  icon: string;
  width?: number;
  color?: string;
  className?: string;
}

const Icon = ( {
  icon,
  width=25,
  color,
  className=""
}: Props ) => {
  return (
    <Iconify
      icon={`ion:${icon}`}
      width={width}
      color={color}
      className={className}
    />
  );
}

export default Icon;
