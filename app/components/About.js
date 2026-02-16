'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function About() {
    return (
        <>
            <section className="about" id="about">
                <div className="about__content">
                    <h2 className="about__title">A grounded, evidence-based approach to therapy.</h2>
                    <p className="about__text">
                        I&apos;m Dr. Maya Reynolds, a licensed clinical psychologist based in Santa Monica, California. I work collaboratively with adults who are ready to move through anxiety, trauma, and burnout—and find a calmer, more connected way of living.
                    </p>
                    <p className="about__text">
                        My approach weaves together cognitive-behavioral therapy (CBT), EMDR for trauma, mindfulness, and body-oriented techniques so we can address both the mind and the nervous system. You&apos;ll find a non-judgmental space where we go at your pace.
                    </p>
                    <Link href="#contact" className="about__cta-link">GET IN TOUCH →</Link>
                </div>
                <div className="about__image-wrapper">
                    <Image
                        src="/images/lifestyle-flatlay.png"
                        alt="Lifestyle flat lay with lilac flowers, coffee, and notebook"
                        width={600}
                        height={500}
                        className="about__image"
                        loading="lazy"
                    />
                </div>
            </section>
        </>
    );
}
