import React from "react";
import styles from "./TermsAndConditions.module.scss";

function TermsAndConditions() {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Uslovi korišćenja</h1>
            <p className={styles.description}>
                Dobrodošli na web sajt "Mamajaro". Sledeći uslovi korišćenja su postavljeni kako bismo zaštitili sebe i naše korisnike, stoga vas molimo da ih pažljivo pročitate pre nastavka korišćenja naše stranice.
            </p>
            <p className={styles.description}>
                <strong>1. Sadržaj i autorska prava:</strong>
                Svi tekstovi, slike i dizajn na ovom sajtu su vlasništvo "Mamajaro" i ne smeju se koristiti bez naše izričite saglasnosti.
            </p>
            <p className={styles.description}>
                <strong>2. Privatnost korisnika:</strong>
                Posvećeni smo zaštiti privatnosti naših korisnika. Svi podaci koje prikupljamo koristimo isključivo u svrhe obrade narudžbina. Nećemo deliti vaše lične podatke sa trećim stranama.
            </p>
            <p className={styles.description}>
                <strong>3. Cene i plaćanje:</strong>
                Cene su izražene u dinarima. Zadržavamo pravo promene cena. Plaćanje se vrši prilikom poručivanja proizvoda.
            </p>
            <p className={styles.description}>
                <strong>4. Povraćaj i reklamacija:</strong>
                Ukoliko niste zadovoljni proizvodom, imate pravo na reklamaciju u roku od 14 dana. Proizvod treba da bude neoštećen i u originalnom pakovanju.
            </p>
            <p className={styles.description}>
                <strong>5. Odricanje od odgovornosti:</strong>
                "Mamajaro" se trudi da informacije na sajtu budu tačne i ažurirane, ali ne može garantovati za njihovu potpunu tačnost. Korišćenjem ovog sajta, korisnik prihvata rizik od eventualnih grešaka.
            </p>
            <p className={styles.description}>
                Ako imate dodatna pitanja u vezi sa uslovima korišćenja, molimo vas da nas kontaktirate.
            </p>
        </div>
    );
}

export default TermsAndConditions;
