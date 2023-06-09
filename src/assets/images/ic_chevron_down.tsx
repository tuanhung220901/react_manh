import { IconModel } from "models";
function Icon({ width = 14, height = 8, color = "#999999" }: IconModel) {
  return (
    <svg width={width} height={height} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L7 7L13 1" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default Icon;
