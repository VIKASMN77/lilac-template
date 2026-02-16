'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero__image-block">
                <div className="hero__image-wrapper">
                    <Image
                        src="/images/dr-maya-reynolds.png"
                        alt="Dr. Maya Reynolds, licensed clinical psychologist in Santa Monica"
                        width={450}
                        height={600}
                        className="hero__image"
                        priority
                    />
                </div>
                <p className="hero__caption">Dr. Maya Reynolds, PsyD</p>
            </div>
            <div className="hero__content">
                <h1 className="hero__title">Therapy for Anxiety, Trauma &amp; Burnout in Santa Monica, CA</h1>
                <p className="hero__subtitle">Support for high-achieving adults who feel overwhelmed, stuck in overthinking, or emotionally exhausted.</p>
                <Link href="#contact" className="btn">Start Your Healing Journey</Link>
            </div>
        </section>
    );
}
