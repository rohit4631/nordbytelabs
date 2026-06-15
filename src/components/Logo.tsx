export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img src="/logo.png" alt="The Nord Byte Labs" className="h-full w-auto object-contain" />
    </div>
  );
}

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <img src="/logo.png" alt="The Nord Byte Labs" className={`${className} object-contain`} />
  );
}
