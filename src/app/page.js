import Hero from '@/app/components/sections/Hero';
import Features from '@/app/components/sections/Features'
import ShopByCategory from './components/sections/ShopByCategory'; 

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
