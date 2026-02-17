import Hero from '@/app/components/sections/hero';
import Features from '@/app/components/sections/features'
import ShopByCategory from '@/app/components/sections/ShopByCategory'; 

// Page Title
export async function generateMetadata() {
  return {
    title: `Home | WabiSabi.jp`, // dynamically adds page name
  };
}

export default function Home() {
  return (
    <div className='flex flex-col items-start justify-center overflow-x-hidden'>
      <Hero />
      <Features />
      <ShopByCategory />
    </div>
  );
}
