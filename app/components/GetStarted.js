'use client';

import Link from 'next/link';

export default function GetStarted() {
    return (
        <section className="get-started" id="get-started">
            <h2 className="get-started__title">Take the first step.</h2>
            <p className="get-started__text">
                You don&apos;t have to carry anxiety, trauma, or burnout alone. A brief consultation can help you see if we&apos;re a good fit and what therapy in Santa Monica or telehealth could look like for you. I&apos;m here to support you with warmth and clarity.
            </p>
            <Link href="#contact" className="btn btn--white">Book a Consultation</Link>
        </section>
    );
}
