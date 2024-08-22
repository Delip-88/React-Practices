import React, { useState } from 'react';
import '../css/Rspv.css'

function RSVP() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        number: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="form">
            <h1 className="MainTopic">RSVP</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    id="name"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    id="email"
                />
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    id="subject"
                />
                <input
                    type="number"
                    placeholder="Number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    id="number"
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    id="message"
                />
                <button type="submit">Send a Message</button>
            </form>
        </div>
    );
}

export default RSVP;
