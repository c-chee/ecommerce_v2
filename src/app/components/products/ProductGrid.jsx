/**
 * Product grid component, takes in th card compoent to build out grid
 */
import ProductCard from './ProductCard'; // Product card ccomponent

// React compoent expects a prop ({products})
export default function ProductGrid({ products }) {
    return (
        // Grid contianer
        <section className="
            grid gap-6
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
        ">
            {products.map(p => (
                <ProductCard key={p.id} product={p} />
            ))}
        </section>
    );
}
