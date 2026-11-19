const colors = {
  blue: "#0969da",
  green: "#2da44e",
  red: "#cf222e",
  orange: "#e16f24",
  purple: "#8250df",
  gray: "#57606a",
};

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function generateBadge(label, message, color, style) {
  const safeLabel = escapeXml(label);
  const safeMessage = escapeXml(message);

  // Resolve the requested color
  const selectedColor = colors[color] || colors.blue;

  // Validate the requested style
  const selectedStyle = ["flat", "gradient"].includes(style)
    ? style
    : "gradient";

  // Determine the background
  const background =
    selectedStyle === "flat" ? selectedColor : "url(#badgeColor)";

  const svg_string = `
<svg xmlns="http://www.w3.org/2000/svg"
     width="210"
     height="32"
     viewBox="0 0 210 32"
     role="img"
     aria-label="${safeLabel}: ${safeMessage}">

  <defs>
    <linearGradient id="badgeColor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${selectedColor}"/>
      <stop offset="100%" stop-color="${selectedColor}"/>
    </linearGradient>
  </defs>

  <!-- Label section -->
  <path d="M5 0 H125 V32 H5 Q0 32 0 27 V5 Q0 0 5 0 Z"
        fill="#343b46"/>

  <!-- Counter section -->
  <path d="M125 0 H205 Q210 0 210 5 V27 Q210 32 205 32 H125 Z"
        fill="${background}"/>

  <!-- Label text -->
  <text x="62.5" y="20.5"
        fill="#ffffff"
        font-family="Arial, sans-serif"
        font-size="10"
        font-weight="600"
        letter-spacing="0.5"
        text-anchor="middle">${safeLabel}</text>

  <!-- Counter text -->
  <text x="167.5" y="20.5"
        fill="#ffffff"
        font-family="Arial, sans-serif"
        font-size="12"
        font-weight="700"
        text-anchor="middle">${safeMessage}</text>

</svg>
`;
  return svg_string;
}
