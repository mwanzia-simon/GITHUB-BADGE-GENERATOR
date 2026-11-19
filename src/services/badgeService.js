function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function generateBadge(label, message) {
  const safeLabel = escapeXml(label);
  const safeMessage = escapeXml(message);

  const svg_string = `
    
<svg xmlns="http://www.w3.org/2000/svg"
     width="210"
     height="32"
     viewBox="0 0 210 32"
     role="img"
     aria-label="${label}: ${message}">

  <defs>
    <linearGradient id="blue" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#218bff"/>
      <stop offset="100%" stop-color="#0969da"/>
    </linearGradient>
  </defs>

  <!-- Label background -->
  <rect width="125" height="32" rx="5" fill="#24292f"/>

  <!-- Counter background -->
  <path d="M125 0 H205 Q210 0 210 5 V27 Q210 32 205 32 H125 Z"
        fill="url(#blue)"/>

  <!-- Label text -->
  <text x="62.5" y="20.5"
        fill="#ffffff"
        font-family="Arial, sans-serif"
        font-size="10"
        font-weight="600"
        letter-spacing="0.5"
        text-anchor="middle">
    ${label}
  </text>

  <!-- Counter text -->
  <text x="167.5" y="20.5"
        fill="#ffffff"
        font-family="Arial, sans-serif"
        font-size="12"
        font-weight="700"
        text-anchor="middle">
   ${message}
  </text>

</svg>

    `;

  return svg_string;
}
