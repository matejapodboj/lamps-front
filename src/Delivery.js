import React from "react";
import styles from "./Delivery.module.scss";

function Delivery() {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Politika isporuke</h1>
            <p className={styles.description}>
                U "Mamajaro" težimo da vam pružimo najbolju moguću uslugu. Kada kupujete kod nas, želimo da budete sigurni da će vaš proizvod biti isporučen brzo i sigurno. Ovo je naša obaveza prema vama.
            </p>
            <p className={styles.description}>
                <strong>Uslovi isporuke:</strong>
                <ul className={styles.list}>
                    <li>Sve porudžbine se procesuiraju i šalju u roku od 1-3 radna dana.</li>
                    <li>Isporuka se obavlja putem kurirskih službi i traje od 2 do 7 radnih dana, u zavisnosti od vaše lokacije.</li>
                    <li>Prilikom isporuke potrebno je potpisati potvrdu o prijemu.</li>
                    <li>Cena dostave zavisi od težine proizvoda i udaljenosti destinacije.</li>
                </ul>
            </p>
            <p className={styles.description}>
                Ako naiđete na bilo kakve probleme sa isporukom ili želite da proverite status vaše porudžbine, molimo vas da nas kontaktirate. Naš tim je uvek spreman da vam pomogne.
            </p>
        </div>
    );
}

export default Delivery;
