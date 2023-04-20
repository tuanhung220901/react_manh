import { IconModel } from "models";
function Icon({ width = 18, height = 18, color = "black" }: IconModel) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 18 18">
      <path
        d="M16 2V16H2V2H16ZM16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z"
        fill={color}
        fillOpacity="0.6"
      />
    </svg>
  );
}

export default Icon;
