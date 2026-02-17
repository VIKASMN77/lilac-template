'use client';

import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '../components/ScrollReveal';

export default function AboutMePage() {
  return (
    <>
      <header className="header" id="header">
        <Link href="/" className="header__logo">Healing Horizons</Link>
        <nav className="header__nav">
          <Link href="/#office" className="header__nav-link">Office</Link>
          <Link href="/#blog" className="header__nav-link">Blog</Link>
          <Link href="/about-me" className="header__nav-link">About Me</Link>
          <Link href="/#contact" className="header__nav-link">Contact</Link>
        </nav>
      </header>

      <main className="about-me-page">
        <section className="about-me-page__hero">
          <h1 className="about-me-page__main-title">About Me</h1>
          <p className="about-me-page__tagline">Licensed Clinical Psychologist · Santa Monica, CA</p>
        </section>

        <section className="about-me-page__content">
          <ScrollReveal>
            <div className="about-me-page__profile">
              <div className="about-me-page__image-wrap">
                <Image
                  src="/images/dr-maya-reynolds.png"
                  alt="Dr. Maya Reynolds, licensed clinical psychologist"
                  width={320}
                  height={400}
                  className="about-me-page__image"
                  priority
                />
              </div>
              <div className="about-me-page__profile-text">
                <p className="about-me-page__name">Dr. Maya Reynolds, PsyD</p>
                <p className="about-me-page__credential">Licensed Clinical Psychologist</p>
                <p className="about-me-page__location">Santa Monica, CA</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="about-me-page__block">
              <h2 className="about-me-page__block-title">Introduction</h2>
              <p className="about-me-page__text">
                I&apos;m Dr. Maya Reynolds, a licensed clinical psychologist based in Santa Monica, California. I work collaboratively with adults who are ready to move through anxiety, trauma, and burnout—and find a calmer, more connected way of living.
              </p>
              <p className="about-me-page__text">
                My approach weaves together cognitive-behavioral therapy (CBT), EMDR for trauma, mindfulness, and body-oriented techniques so we can address both the mind and the nervous system. You&apos;ll find a non-judgmental space where we go at your pace.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="about-me-page__block">
              <h2 className="about-me-page__block-title">Experience</h2>
              <p className="about-me-page__text">
                I have extensive experience treating anxiety, trauma (including PTSD), burnout, perfectionism, and chronic stress. I work with high-achieving adults who feel overwhelmed, stuck in overthinking, or emotionally exhausted. My practice focuses on evidence-based, culturally sensitive care in a safe, confidential setting—whether in-person in Santa Monica or via secure telehealth across California.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="about-me-page__block">
              <h2 className="about-me-page__block-title">Licensed & Credentials</h2>
              <ul className="about-me-page__list">
                <li>Licensed Clinical Psychologist (California)</li>
                <li>PsyD in Clinical Psychology</li>
                <li>EMDR-trained for trauma treatment</li>
                <li>CBT, mindfulness, and somatic approaches</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="about-me-page__block">
              <h2 className="about-me-page__block-title">Problems I Help With & Solutions</h2>
              <div className="about-me-page__problems">
                <div className="about-me-page__problem">
                  <h3 className="about-me-page__problem-title">Anxiety & Overthinking</h3>
                  <p className="about-me-page__text">Solution: CBT, mindfulness, and nervous-system regulation to reduce worry and rumination and build lasting calm.</p>
                </div>
                <div className="about-me-page__problem">
                  <h3 className="about-me-page__problem-title">Trauma & PTSD</h3>
                  <p className="about-me-page__text">Solution: EMDR and trauma-informed therapy to process past experiences and restore a sense of safety.</p>
                </div>
                <div className="about-me-page__problem">
                  <h3 className="about-me-page__problem-title">Burnout & Perfectionism</h3>
                  <p className="about-me-page__text">Solution: Values-based work, boundary-setting, and self-compassion so you can achieve without burning out.</p>
                </div>
                <div className="about-me-page__problem">
                  <h3 className="about-me-page__problem-title">Stress & Emotional Exhaustion</h3>
                  <p className="about-me-page__text">Solution: A tailored mix of talk therapy, body awareness, and practical tools to restore energy and balance.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="about-me-page__cta">
              <Link href="/#contact" className="btn">Get in touch →</Link>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <footer className="footer-bottom" style={{ marginTop: 'auto' }}>
        <div className="footer-bottom__links">
          <Link href="/">Home</Link>
          <Link href="/about-me">About Me</Link>
          <Link href="/#contact">Contact</Link>
        </div>
        <p className="footer-bottom__copy">© Dr. Maya Reynolds, PsyD. Anxiety, trauma &amp; burnout therapy in Santa Monica, CA.</p>
      </footer>
    </>
  );
}
