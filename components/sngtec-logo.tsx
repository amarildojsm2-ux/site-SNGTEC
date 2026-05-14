export function SNGTECLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#glow)">
        {/* S shape */}
        <path
          d="M8 12 C8 6 14 2 22 2 C30 2 35 6 35 12 C35 18 28 20 22 22 C16 24 8 26 8 34 C8 42 14 46 22 46 C30 46 35 42 35 36"
          stroke="url(#logoGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        {/* N shape */}
        <path
          d="M42 46 L42 2 L58 46 L58 2"
          stroke="url(#logoGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
    </svg>
  )
}
