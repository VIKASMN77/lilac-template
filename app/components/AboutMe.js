'use client';

const reviews = [
    { stars: 5, name: 'Sarah M.', size: 'large', emoji: '💚' },
    { stars: 5, name: 'James K.', size: 'small', emoji: '✨' },
    { stars: 5, name: 'Emily R.', size: 'medium', emoji: '🙏' },
    { stars: 5, name: 'David L.', size: 'small', emoji: '😊' },
    { stars: 5, name: 'Rachel T.', size: 'medium', emoji: '⭐' },
    { stars: 5, name: 'Michael P.', size: 'large', emoji: '💫' },
    { stars: 5, name: 'Lisa W.', size: 'small', emoji: '🌸' },
    { stars: 5, name: 'Chris N.', size: 'medium', emoji: '🌟' },
    { stars: 5, name: 'Anna B.', size: 'small', emoji: '💜' },
    { stars: 5, name: 'Tom H.', size: 'large', emoji: '🙌' },
    { stars: 5, name: 'Nina S.', size: 'small', emoji: '☀️' },
    { stars: 5, name: 'Alex P.', size: 'medium', emoji: '💛' },
];

const stats = [
    { value: '10,000+', label: 'Clients helped' },
    { value: '5-star', label: 'Rated' },
    { value: '98%', label: 'Would recommend' },
];

const detailReviews = [
    {
        quote: 'Dr. Reynolds helped me find real relief from anxiety. She’s warm, professional, and really listens. I finally feel like myself again.',
        name: 'Sarah M.',
        stars: 5,
    },
    {
        quote: 'After years of burnout, working with her was a turning point. I learned to set boundaries and prioritize my wellbeing. Highly recommend.',
        name: 'James K.',
        stars: 5,
    },
];

export default function AboutMe() {
    return (
        <section className="about-me" id="about-me">
            <div className="about-me__content">
                <h2 className="about-me__ratings-title">What clients say</h2>
                <div className="about-me__stats" aria-label="Client statistics">
                    {stats.map((stat, i) => (
                        <div key={i} className="about-me__stat">
                            <span className="about-me__stat-value">{stat.value}</span>
                            <span className="about-me__stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>
                <div className="about-me__detail-reviews">
                    {detailReviews.map((review, i) => (
                        <blockquote key={i} className="about-me__review-card">
                            <span className="about-me__rating-stars" aria-hidden="true">★★★★★</span>
                            <p className="about-me__review-quote">&ldquo;{review.quote}&rdquo;</p>
                            <cite className="about-me__review-cite">— {review.name}</cite>
                        </blockquote>
                    ))}
                </div>
            </div>
            <div className="about-me__ratings-wrap">
                <div className="about-me__ratings">
                    {reviews.map((review, i) => (
                        <div
                            key={i}
                            className={`about-me__rating-circle about-me__rating-circle--${review.size}`}
                            style={{ '--float-delay': `${i * 0.4}s` }}
                        >
                            <span className="about-me__rating-emoji" aria-hidden="true">{review.emoji}</span>
                            <span className="about-me__rating-stars" aria-hidden="true">★★★★★</span>
                            <span className="about-me__rating-name">{review.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
