import React from "react";
import styles from "./AboutUs.module.scss";

function AboutUs() {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>O nama</h1>
            <p className={styles.description}>
                Dobrodošli u našu radnju "Mamajaro". Osnovani 2010. godine, posvetili smo se umetnosti i zanatstvu osvetljavanja vaših prostora na najunikatniji način. Naše lampe nisu samo izvori svetlosti; to su umetnička dela koja odražavaju i savremene i klasične dizajne, stvorene iz strasti i najfinijih materijala.
            </p>
            <p className={styles.description}>
                Naša priča je počela u maloj radionici na periferiji grada, gde je osnivač "Mamajaro" počeo sa stvaranjem ručno izrađenih lampi za prijatelje i porodicu. Iz ljubavi prema dizajnu i osvetljavanju, radnja je brzo prerasla u poznato ime koje je danas, pružajući osvetljenje za domove širom zemlje.
            </p>
            <p className={styles.description}>
                Naša posvećenost je da svakoj prostoriji damo poseban dodir sa jedinstvenim lampama koje pričaju priču. Svaki komad je pažljivo dizajniran tako da ne samo da osvetljava prostoriju već i doprinosi njenom ambijentu, stvarajući raspoloženje koje rezonuje sa suštinom prostora.
            </p>
            <p className={styles.description}>
                Naše zanatlije su vešti pojedinci koji kombinuju tradicionalne metode sa modernim dizajnerskim konceptima, što rezultira proizvodima koji se ističu i govore duši. Pozivamo vas da istražite našu kolekciju i pronađete savršeni komad koji rezonuje sa vašom estetikom i ličnim stilom. Osvetlite svoj svet s nama.
            </p>
        </div>
    );
}

export default AboutUs;
