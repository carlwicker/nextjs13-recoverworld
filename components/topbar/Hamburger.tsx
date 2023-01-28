export default function Hamburger() {
  const color = "white";
  return (
    <a href="#">
      <svg viewBox="0 0 100 80" width="20" height="20">
        <rect width="100" height="20" rx="10" fill={color}></rect>
        <rect y="30" width="100" height="20" rx="10" fill={color}></rect>
        <rect y="60" width="100" height="20" rx="10" fill={color}></rect>
      </svg>
    </a>
  );
}
