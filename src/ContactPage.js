import React, { useState } from 'react';
import styles from './ContactPage.module.scss';
import NetworkController from './NetworkController';


function ContactPage() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await NetworkController.postContact({ name, message, email });
    
            if (response) {
                setFeedback('Message sent successfully.');
                setName('');
                setMessage('');
                setEmail('');
            } else {
                setFeedback('There was an error sending your message.');
            }
        } catch (error) {
            setFeedback('There was an error sending your message.');
        }
    };
    

    return (
        <div className={styles['contact-page']}>
            <h1>Kontaktirajte nas</h1>

            <div className={styles['content-container']}>
                <div className={styles['contact-info']}>
                    <h2>Radno vreme</h2>
                    <p>Ponedeljak - Petak: 9:00 - 17:00</p>
                    <h2>Adresa</h2>
                    <p>Blok 45, Beograd</p>
                    <h2>Telefon</h2>
                    <p>+381 693919808</p>
                </div>

                <div className={styles['contact-form']}>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Ime:
                            <input 
                                type="text" 
                                name="name" 
                                value={name} 
                                onChange={e => setName(e.target.value)} 
                                required 
                            />
                        </label>
                        <label>
                            Email:
                            <input 
                                type="email" 
                                name="email" 
                                value={email} 
                                onChange={e => setEmail(e.target.value)} 
                                required 
                            />
                        </label>

                        <label>
                            Poruka:
                            <textarea 
                                name="message" 
                                rows="5" 
                                value={message} 
                                onChange={e => setMessage(e.target.value)} 
                                required>
                            </textarea>
                        </label>
                        <button type="submit">Pošalji</button>
                    </form>
                    {feedback && <p>{feedback}</p>}
                </div>

                <div className={styles['map']}>
                    <iframe title="Naša lokacija"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34330.69173798601!2d20.378679904243754!3d44.79658413125541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6f0bf243a1b9%3A0x36d8ab6b64745bde!2sBlock%2045%2C%20Belgrade!5e0!3m2!1sen!2srs!4v1698268053157!5m2!1sen!2srs"
                            width="600"
                            height="450"
                            style={{border: "0"}}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
