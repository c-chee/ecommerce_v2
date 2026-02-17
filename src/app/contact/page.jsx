'use client'; // Indicates that this is a client side component
import { useEffect, useState } from 'react'; // Import react hooks

// Component Imports
import Form from '@/app/components/ui/Form';

// react functional component
// 'export default' allows other parts of your app to import this component
export default function Contact() {
    const submitContact = async data => {
        const res = await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(data)
        });

        return res.ok;
    };

    return (
        <section className='bg-[var(--grey-black)]'>
            <div className='flex flex-col max-w-7xl mx-auto px-6 py-16 place-items-center'>

                <section className='place-self-start pb-10'>
                    <h1 className='text-3xl font-semibold mb-6 place-self-start'>Contact</h1>
                    <p>Have a question or inquiry? Contact us here through this form!</p>
                </section>
                

                <Form
                    onSubmit={submitContact}
                    submitLabel='Send Message'
                    fields={[
                        { name: 'firstName', label: 'First Name', type: 'text', required: true },
                        { name: 'lastName', label: 'Last Name', type: 'text', required: true },
                        { name: 'email', label: 'Email', type: 'email', required: true },
                        { name: 'message', label: 'Message', type: 'textarea', required: true },
                    ]}
                />
            </div>
        </section>

    );
}