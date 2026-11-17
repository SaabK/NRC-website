export function MascotFallback() {
  return (
    <svg viewBox="0 0 500 450" className="h-full w-full" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="mascot-shell" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#3B4657" />
          <stop offset="0.45" stopColor="#11141d" />
          <stop offset="1" stopColor="#080a10" />
        </linearGradient>
        <radialGradient id="mascot-floor">
          <stop offset="0" stopColor="#FF6B2B" stopOpacity=".5" />
          <stop offset="1" stopColor="#FF6B2B" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="250" cy="405" rx="115" ry="26" fill="url(#mascot-floor)" />
      <ellipse cx="250" cy="405" rx="42" ry="4" fill="none" stroke="#FF6B2B" strokeOpacity=".8" />
      <circle cx="250" cy="220" r="155" fill="none" stroke="#FF6B2B" strokeOpacity=".22" />
      <circle cx="402" cy="220" r="3" fill="#FF6B2B" />
      <path d="M194 235c-38 26-55 54-68 100m180-100c38 26 55 54 68 100" fill="none" stroke="url(#mascot-shell)" strokeWidth="35" strokeLinecap="round" />
      <path d="M194 235c-38 26-55 54-68 100m180-100c38 26 55 54 68 100" fill="none" stroke="#FF6B2B" strokeWidth="3" strokeOpacity=".8" strokeLinecap="round" />
      <path d="M190 220c0-30 27-48 60-48s60 18 60 48v73c0 47-27 79-60 79s-60-32-60-79v-73Z" fill="url(#mascot-shell)" />
      <path d="M246 198h8v22h-8zm-2 0 10 0 12 20h-10z" fill="#FF6B2B" />
      <path d="M234 368c0 0 16 14 32 0 0 24-32 24-32 0Z" fill="#FF6B2B" />
      <rect x="147" y="54" width="206" height="139" rx="55" fill="url(#mascot-shell)" />
      <rect x="158" y="65" width="184" height="116" rx="47" fill="#02040a" />
      <path d="M197 121q18-22 36 0m34 0q18-22 36 0m-64 23q18 17 36 0" fill="none" stroke="#EAF6FF" strokeWidth="6" strokeLinecap="round" />
      <ellipse cx="140" cy="124" rx="14" ry="31" fill="url(#mascot-shell)" stroke="#FF6B2B" strokeWidth="3" />
      <ellipse cx="360" cy="124" rx="14" ry="31" fill="url(#mascot-shell)" stroke="#FF6B2B" strokeWidth="3" />
    </svg>
  );
}
