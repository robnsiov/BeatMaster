const validateColor = (color: string | undefined | null) => {
  if (typeof color === "undefined" || color === null) return "#858585";
  else if (color.at(0) !== "#") return `#${color}`;
  return color;
};
export default validateColor;
