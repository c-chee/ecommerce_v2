'use client'; // Indicates that this is a client side component
import { useEffect, useState } from 'react'; // Import react hooks

// Component Imports

// react functional component
// 'export default' allows other parts of your app to import this component
export default function About() {
    return (
        <section className='bg-[var(--grey-black)]'>
            <div className='flex flex-col lg:max-w-7xl mx-auto px-6 lg:py-16 place-items-center'>

                <section className='place-self-start pb-10'>
                    <h1 className='text-3xl font-semibold mb-6 place-self-start'>About</h1>
                    <p>About this site...</p>
                </section>
            </div>
        </section>
        
    );
}