export function ProductCard({
  image = "https://images.unsplash.com/photo-1600180758890-6b94519a8ba3?w=1200&q=80&auto=format&fit=crop",
  name = "SuperOmega 3",
  title = "High Potency Fish Oil Capsules",
  rounded = "2xl",
  className = "",
}) {
  const roundedClass = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
    full: "rounded-full",
  }[rounded] || "rounded-2xl";

  return (
    <div
      className={`group relative bg-zinc-950 border border-zinc-800 hover:border-[#d3a96f]00/40 transition-all duration-500 ${roundedClass} overflow-hidden ${className}`}
    >
      {/* Image */}
      <div className={`relative h-72 overflow-hidden ${roundedClass}`}>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gold-tinted overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-90 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <span className="text-xs uppercase tracking-wider text-[#d3a96f]">
          Nutraceutical Formulation
        </span>

        <h3 className="text-lg font-medium text-zinc-300 leading-snug">
          {title}
        </h3>

        <p className="text-xl font-semibold text-white tracking-tight">
          {name}
        </p>

        {/* Divider */}
        <div className="w-12 h-px bg-[#d3a96f]/50" />

        {/* Footer meta */}
        <div className="flex items-center justify-between text-xs text-zinc-500 pt-2">
          <span>Quality assured</span>
          <span className="text-[#d3a96f] group-hover:translate-x-1 transition-transform">
            View →
          </span>
        </div>
      </div>

      {/* Gold edge glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="absolute inset-0 rounded-2xl ring-1 ring-[#d3a96f]00/30"></div>
      </div>
    </div>
  );
}
