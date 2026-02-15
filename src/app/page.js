import Hero from '@/app/components/sections/hero';
// Page Title
export async function generateMetadata() {
  return {
    title: `Home | WabiSabi.jp`, // dynamically adds page name
  };
}

export default function Home() {
  return (
    <div className='flex items-start justify-center'>
      <Hero />
    </div>
  );
}
