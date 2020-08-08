export interface IIconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  color?: string;
}

export interface IIconFamilyProps extends IIconProps {
  icon: string;
}
