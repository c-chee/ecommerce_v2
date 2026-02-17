export default function CategoryTab({
    categories,
    active,
    onChange,
    className = '',
}) {
    return (
        <div className={`flex flex-wrap gap-3 ${className}`}>
            {categories.map(cat => (
                <button
                    key={cat.id}
                    onClick={() => onChange(cat.id)}
                    className={`
                        px-4 py-2 rounded-full border transition cursor-pointer
                        ${active === cat.id
                            ? 'bg-[var(--light-orange)] text-black'
                            : 'border-[var(--light-orange)]/40 text-white hover:bg-white/10'}
                    `}
                >
                    {cat.label}
                </button>
            ))}
        </div>
    );
}
