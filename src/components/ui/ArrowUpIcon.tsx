type ArrowUpProps = React.SVGProps<SVGSVGElement>;

export default function ArrowUp({ className, ...props }: ArrowUpProps) {
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
        d="M1 6L5.29289 1.70711C5.68342 1.31658 6.31658 1.31658 6.70711 1.70711L11 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
