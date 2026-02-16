'use client';

import Image from 'next/image';

const specialties = [
    {
        title: 'Anxiety Therapy',
        text: "Anxiety therapy in Santa Monica that helps you quiet the worry loop, face avoidance, and feel more grounded. We'll use evidence-based tools so you can respond to stress instead of being ruled by it.",
        image: '/images/service-anxiety-nature.png',
        alt: 'Calm and well-being in nature — supportive space for anxiety therapy',
    },
    {
        title: 'Trauma & EMDR Therapy',
        text: "Trauma and EMDR therapy to process past experiences that still affect you. EMDR helps the brain reprocess distressing memories so you can feel less triggered and more present in your life.",
        image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=500&h=500&fit=crop',
        alt: 'Peaceful space for trauma therapy',
    },
    {
        title: 'Burnout & Perfectionism',
        text: "Burnout therapy for high achievers who feel exhausted, never good enough, or stuck in overdoing. We'll work on boundaries, self-compassion, and sustainable ways of living and working.",
        image: '/images/service-burnout.png',
        alt: 'Contemplative view — hope and new beginnings',
    },
    {
        title: 'Stress & Overthinking',
        text: "Support for chronic stress and overthinking so you can step out of rumination and into clearer decisions. We combine mindfulness and practical strategies tailored to your life.",
        image: '/images/service-stress.png',
        alt: 'Triumph and new beginnings — clarity beyond stress',
    },
];

export default function Specialties() {
    return (
        <section className="specialties" id="specialties">
            <h2 className="specialties__title">Services</h2>
            <div className="specialties__grid">
                {specialties.map((item) => (
                    <div className="specialty-card" key={item.title}>
                        <h3 className="specialty-card__title">{item.title}</h3>
                        <p className="specialty-card__text">{item.text}</p>
                        <div className="specialty-card__image-wrapper">
                            {item.image.startsWith('/') ? (
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    width={220}
                                    height={220}
                                    className="specialty-card__image"
                                    loading="lazy"
                                />
                            ) : (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    className="specialty-card__image"
                                    loading="lazy"
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
