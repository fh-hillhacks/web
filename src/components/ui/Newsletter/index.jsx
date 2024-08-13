"use client";
import React, { useState } from 'react';

const Newsletter = () => {
    const [formData, setFormData] = useState({
        email: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://formspree.io/f/mdknzbbp${process.env.FORMSPREE_ID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        if (response.ok) {
            console.log('Form submitted successfully');
            setFormData({ email: '' }); // Reset form
        } else {
            console.error('Form submission error');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="mt-6 md:mt-0">
            <form onSubmit={handleSubmit} className="mt-6 flex items-center gap-x-3">
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                />
                <button type="submit">Subscribe</button>
            </form>
        </div>
    );
};

export default Newsletter;