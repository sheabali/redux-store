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
      strokeWidth="2"
    />

    <defs>
      <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#21de28" />
        <stop offset="100%" stopColor="#55eb34" />
      </linearGradient>
    </defs>

    <line
      x1="50"
      y1="50"
      x2="50"
      y2="30"
      stroke="#FFFFFF"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <line
      x1="50"
      y1="50"
      x2="65"
      y2="50"
      stroke="#FFFFFF"
      strokeWidth="4"
      strokeLinecap="round"
    />

    <path
      d="M35 55 L45 65 L65 40"
      stroke="white"
      strokeWidth="6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Logo;
