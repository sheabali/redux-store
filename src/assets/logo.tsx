const Logo = () => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
  width="50"
  height="50"
>

  <circle
    cx="50"
    cy="50"
    r="48"
    fill="url(#gradient)"
    stroke="#E0E0E0"
    stroke-width="2"
  />


  <defs>
    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#21de28" />
      <stop offset="100%" stop-color="#55eb34" />
    </linearGradient>
  </defs>


  <line
    x1="50"
    y1="50"
    x2="50"
    y2="30"
    stroke="#FFFFFF"
    stroke-width="4"
    stroke-linecap="round"
  />
  <line
    x1="50"
    y1="50"
    x2="65"
    y2="50"
    stroke="#FFFFFF"
    stroke-width="4"
    stroke-linecap="round"
  />

  <path
    d="M35 55 L45 65 L65 40"
    stroke="white"
    stroke-width="6"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>

)

export default Logo