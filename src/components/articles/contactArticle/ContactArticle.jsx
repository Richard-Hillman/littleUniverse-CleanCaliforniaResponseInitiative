import React from 'react'
import styles from './styles/contactArticle.css'

export default function ContactArticle() {
    return (
        <div>
            <article className={styles.contactWrapper}>
                <a href=''>EMAIL</a>
                <p className={styles.contactParagraph}>Here is a link to Richard HIllman's gmail</p>

                <a href=''>PHONE</a>
                <p className={styles.contactParagraph}>Here is a link to call Richard Hillman and the number is as follows: 802-528-9511</p>

                <a href=''>LinkedIn</a>
                <p className={styles.contactParagraph}>Here is a link to Richard HIllman's LinkeIn page.</p>

                <a href=''>Website</a>
                <p className={styles.contactParagraph}>Here is a link to Richard HIllman's website.</p>

            </article>
        </div>
    )
}
