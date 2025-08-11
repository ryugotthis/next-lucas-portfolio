type ArrowDownProps = React.SVGProps<SVGSVGElement>;

export default function ArrowDown({ className, ...props }: ArrowDownProps) {
  return (
    <svg
      width="12"
      height="7"
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className} // Tailwind로 색 변경 가능
      {...props}
    >
      <path
        d="M11 1L6.70711 5.29289C6.31658 5.68342 5.68342 5.68342 5.29289 5.29289L1 1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
