export default function Pagination({
    page,
    totalPages,
    onChange,
}) {
    if (totalPages <= 1) return null;

    return (
        <div className="flex justify-center gap-4 mt-10">
            <button
                disabled={page === 1}
                onClick={() => onChange(page - 1)}
                className="px-4 py-2 border border-white/40 rounded disabled:opacity-30"
            >
                Prev
            </button>

            <span>{page} / {totalPages}</span>

            <button
                disabled={page === totalPages}
                onClick={() => onChange(page + 1)}
                className="px-4 py-2 border border-white/40 rounded disabled:opacity-30"
            >
                Next
            </button>
        </div>
    );
}
