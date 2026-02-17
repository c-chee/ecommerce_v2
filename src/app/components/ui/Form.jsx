'use client';
import { useState } from 'react';

// Component Import
import BoxButton from './BoxButton';

export default function Form({ onSubmit, fields, submitLabel = 'Submit' }) {
    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (name, value) => {
        setData({ ...data, [name]: value });
    };

    const validate = () => {
        const errs = {};

        fields.forEach(f => {
            if (f.required && !data[f.name]) {
                errs[f.name] = 'Required';
            }

            if (f.type === 'email' && data[f.name]) {
                const emailRegex = /\S+@\S+\.\S+/;
                if (!emailRegex.test(data[f.name])) {
                    errs[f.name] = 'Invalid email';
                }
            }
        });

        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const submit = async e => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);
        const ok = await onSubmit(data);
        setLoading(false);

        if (ok) {
            setSuccess(true);
            setData({});
        }
    };

    return (
        <form
            onSubmit={submit}
            className='flex flex-col w-full max-w-xl space-y-4 bg-[var(--light-blue)]/20 p-6 rounded-xl border border-[var(--light-orange)]/40 tracking-wider'
        >
            {fields.map(field => (
                <div key={field.name} className='flex flex-col'>
                    <label className='mb-1 text-sm font-medium text-neutral-300'>
                        {field.label}
                    </label>

                    {field.type === 'textarea' ? (
                        <textarea
                            value={data[field.name] || ''}
                            onChange={e =>
                                handleChange(field.name, e.target.value)
                            }
                            className='p-3 rounded-md bg-black/50 border border-neutral-700 focus:border-orange-500 outline-none'
                            rows='4'
                        />
                    ) : (
                        <input
                            type={field.type}
                            value={data[field.name] || ''}
                            onChange={e =>
                                handleChange(field.name, e.target.value)
                            }
                            className='p-3 rounded-md bg-black/50 border border-neutral-700 focus:border-orange-500 outline-none'
                        />
                    )}

                    {errors[field.name] && (
                        <span className='text-red-500 text-sm'>
                            {errors[field.name]}
                        </span>
                    )}
                </div>
            ))}

            <BoxButton className='place-self-center' type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
            </BoxButton>


            {success && (
                <p className='text-green-500 text-center'>
                    Message sent successfully!
                </p>
            )}
        </form>
    );
}
