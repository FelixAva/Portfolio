import { Icon as Iconify } from "@iconify/react";

interface Props {
  icon: string;
  width?: number;
  color?: string;
  className?: string;
}

const Icon = ( {
  icon,
  width=30,
  color,
  className=""
}: Props ) => {
  return (
    <Iconify
      icon={`hugeicons:${icon}`}
      width={width}
      color={color}
      className={className}
    />
  );
}

export default Icon;
