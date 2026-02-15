// import { Home } from "next/document"; 

// Page Title
export async function generateMetadata() {
  return {
    title: `Home | WabiSabi.jp`, // dynamically adds page name
  };
}

export default function Home() {
  return (
    <div className='flex items-start justify-center'>
      <p>Home Content</p>
    </div>
  );
}
