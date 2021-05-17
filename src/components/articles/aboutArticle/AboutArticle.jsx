import React from 'react'
import styles from './styles/aboutArticle.css'

export default function AboutArticle() {
    return (
        <div>
            <section className={styles.aboutWrapper}>

                <h1>About Me Page</h1>

                <article className={styles.aboutArticle}>
                    <h2>Who is Richard Hillman?</h2>
                    <p className={styles.aboutParagraph}>Hi my name is Richard and I am a 31 year old Dad who was born in South Korea and adopted to a lovely little family in Vermont. I grew up with a sister who was born with Wolf-hirschorn Syndrome a very rare disability and she is one of the loveliest humans I know. She has had an immensely wonderful impact on my life and I owe her so much for being who I am today.</p>
                    <p className={styles.aboutParagraph}>I am also a father to two lovely, hilarious little girls who are 1 and 3. They have been the light of my life and I could not be happier to have a tiny little growing family and to be transitioning into a career where I can support my entire family.</p>
                    <p className={styles.aboutParagraph}>I am also a former USMC infantry soldier. I served as an 0351 assualtman where my primary job was to provide rocket support and demolition construction and deconstruction to assaulting infantry units. I have had many other jobs ranging from solar installation and roofing, to repossession and cooking in restaurants. But I have never felt a more promising and meaningful career as software development. And this is what brings me to you all!</p>
                    <p className={styles.aboutParagraph}>Lastly some things I like to do include: snowboarding, downhill longboarding, hiking, rowing, airsoft, painting, photography, and being a father and husband.</p>            
                </article>

                <article className={styles.aboutArticle}>
                    <h2>Why build a Mock Website?</h2>
                    <p className={styles.aboutParagraph}>This website is an example of how much I enjoy to code and to learn about new things. To me, creating this website allowed me to learn new things about accessibility, react, and some wonderful environmental programs that I had never known about.</p>
                    <p className={styles.aboutParagraph}>Furthermore, in building this website I am able to demonstrate that I am a passionate, driven, excited to learn, and disciplined individual. It is important for me to be dedicated to working for a company that I can stand behind and believe in the work that is being done. Coming from a family who has a disabled person in it, I am dedicated to accessibility and have a great understanding of what it means to come from a marginalized community. I want to be with a company that supports diversity, accessibility and environmentalism.</p>
                </article>


                <p className={styles.aboutParagraphLast}>I hope that this work finds you well and thank you for taking the time to look at it and take an interest in the who I am. I look forward to hearing from you all! Cheers!</p>

            </section>
        </div>
    )
}
