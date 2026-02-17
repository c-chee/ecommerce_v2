export default function SortBar({
    total,
    sort,
    onSortChange,
    options,
    className = '',
}) {
    return (
        <section className={`flex justify-between items-center ${className}`}>
            <p className='opacity-70'>{total} products</p>

            <select
                value={sort}
                onChange={e => onSortChange(e.target.value)}
                className='bg-black border border-white/40 px-3 py-2 rounded-md cursor-pointer'
            >
                {options.map(opt => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </section>
    );
}
