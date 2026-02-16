'use client';

import Link from 'next/link';

export default function Support() {
    return (
        <section className="support" id="support">
            <div className="support__image-wrapper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=800&fit=crop"
                    alt="Woman sitting peacefully in meditation"
                    className="support__image"
                    loading="lazy"
                />
            </div>
            <div className="support__content">
                <h2 className="support__title">How we can work together.</h2>
                <p className="support__intro">Therapy is offered in two ways so you can choose what fits your life:</p>
                <ul className="support__list">
                    <li className="support__list-item">In-person therapy in Santa Monica — a quiet, private office where you can feel safe and focused.</li>
                    <li className="support__list-item">Secure telehealth for clients across California — same quality of care from the comfort of your own space.</li>
                </ul>
                <p className="support__closing">
                    Whether you prefer in-person therapy in Santa Monica or telehealth therapy in California, we&apos;ll create a consistent, supportive space for your healing.
                </p>
                <hr className="support__divider" />
                <Link href="#contact" className="support__cta">BOOK WITH ME →</Link>
            </div>
        </section>
    );
}
