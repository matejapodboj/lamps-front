import React from "react";
import styles from "./ReturnPolicy.module.scss";

function ReturnPolicy() {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Politika povrata novca</h1>
            <p className={styles.description}>
                U "Mamajaro" cenimo svakog našeg kupca i želimo da budete potpuno zadovoljni vašom kupovinom. Razumemo da ponekad možete promeniti mišljenje ili da proizvod nije ono što ste očekivali. Zato imamo jasnu politiku povrata novca kako bismo vam olakšali.
            </p>
            <p className={styles.description}>
                <strong>Uslovi povrata:</strong>
                <ul className={styles.list}>
                    <li>Proizvod mora biti vraćen u roku od 30 dana od datuma kupovine.</li>
                    <li>Proizvod mora biti nekorišćen i u originalnom pakovanju.</li>
                    <li>Račun ili dokaz o kupovini mora biti priložen.</li>
                    <li>Specijalno naručeni proizvodi ili proizvodi na sniženju se ne mogu vratiti.</li>
                </ul>
            </p>
            <p className={styles.description}>
                Ukoliko vaša kupovina ispunjava gore navedene uslove, novac će vam biti vraćen na isti način na koji je uplata izvršena, u roku od 14 radnih dana od dana kada smo primili proizvod nazad.
            </p>
            <p className={styles.description}>
                Ukoliko imate bilo kakvih pitanja ili nedoumica u vezi sa procesom povrata, slobodno nas kontaktirajte. Naš tim je uvek tu da vam pomogne.
            </p>
        </div>
    );
}

export default ReturnPolicy;
