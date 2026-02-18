import ProductCard from './ProductCard';
import ProductCardLoading from './ProductCardLoading';

export default function ProductGrid({ products, loading }) {
    if (loading) {
        return (
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {Array.from({ length: 8 }).map((_, i) => (
                    <ProductCardLoading key={i} />
                ))}
            </div>
        );
    }

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
