import React, { useState } from 'react';
import styles from './FaqPage.module.scss';

function FaqPage() {
    const [expanded, setExpanded] = useState(-1);

    const questionsAnswers = [
        {
            question: "Da li vaše lampe dolaze sa garancijom?",
            answer: "Da, sve naše lampe dolaze sa dvogodišnjom garancijom."
        },
        {
            question: "Kako mogu da zamenim proizvod?",
            answer: "Ukoliko imate problema sa nekim od naših proizvoda, molimo vas da nas kontaktirate putem emaila ili telefona. Pružićemo vam sve potrebne informacije o procesu zamene."
        },
        {
            question: "Da li prodajete LED lampe?",
            answer: "Naravno! Imamo širok asortiman LED lampi različitih stilova i veličina."
        },
        {
            question: "Koja je potrošnja vaših lampi?",
            answer: "Potrošnja zavisi od modela i tipa lampe. Sve specifikacije možete naći na stranici svakog proizvoda."
        },
        {
            "question": "Kako održavati vaše lampe?",
            "answer": "Naše lampe su dizajnirane da budu lako održavane. Preporučujemo blago čišćenje mekom krpom da bi očuvali njihov sjaj i izgled."
        },
        {
            "question": "Da li vaše lampe dolaze s sijalicama ili ih treba kupiti odvojeno?",
            "answer": "Neke od naših lampi dolaze s uključenim sijalicama, dok za druge preporučujemo određene tipove sijalica koje treba kupiti odvojeno. Detaljne informacije možete pronaći u opisu svakog proizvoda."
        }
        
    ];

    return (
        <div className={styles['faq-page']}>
            <h1>Često postavljana pitanja</h1>

            {questionsAnswers.map((item, index) => (
                <div 
                    className={`${styles['faq-item']} ${expanded === index ? styles.expanded : ''}`} 
                    key={index}
                    onClick={() => setExpanded(index !== expanded ? index : -1)}
                >
                    <h2>{item.question}</h2>
                    <p>{item.answer}</p>
                </div>
            ))}
        </div>
    );
}

export default FaqPage;
