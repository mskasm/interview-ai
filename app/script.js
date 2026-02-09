/* ==========================================================================
   QLOZY — Script
   Handles: navigation, scroll animations, FAQ, sticky CTA, demo play
   Pure vanilla JS — no dependencies
   ========================================================================== */

(function () {
    'use strict';

    /* ── DOM REFERENCES ── */
    const nav = document.getElementById('nav');
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const stickyCta = document.getElementById('stickyCta');
    const demoPlay = document.getElementById('demoPlay');
    const fadeEls = document.querySelectorAll('.fade-in');
    const faqItems = document.querySelectorAll('.faq-item');


    /* ══════════════════════════════════════════════════════════════════════
       1. NAVIGATION — scroll style + mobile menu
       ══════════════════════════════════════════════════════════════════════ */

    /** Add "scrolled" class to nav after 40px of scroll */
    function handleNavScroll() {
        if (!nav) return;
        if (window.scrollY > 40) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }

    /** Toggle mobile menu open / closed */
    function toggleMobileMenu() {
        if (!mobileToggle || !mobileMenu) return;
        const isOpen = mobileMenu.classList.contains('open');

        mobileToggle.classList.toggle('open', !isOpen);
        mobileMenu.classList.toggle('open', !isOpen);
        document.body.style.overflow = isOpen ? '' : 'hidden';
    }

    /** Close mobile menu when a link is tapped */
    function closeMobileMenu() {
        if (!mobileToggle || !mobileMenu) return;
        mobileToggle.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (mobileToggle) {
        mobileToggle.addEventListener('click', toggleMobileMenu);
    }

    /* Close on link click inside mobile menu */
    if (mobileMenu) {
        mobileMenu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', closeMobileMenu);
        });
    }


    /* ══════════════════════════════════════════════════════════════════════
       2. STICKY CTA — appears after hero is out of view
       ══════════════════════════════════════════════════════════════════════ */

    function handleStickyCta() {
        if (!stickyCta) return;
        /* Show after scrolling past ~90% of initial viewport */
        var threshold = window.innerHeight * 0.9;
        if (window.scrollY > threshold) {
            stickyCta.classList.add('visible');
        } else {
            stickyCta.classList.remove('visible');
        }
    }


    /* ══════════════════════════════════════════════════════════════════════
       3. SCROLL-TRIGGERED FADE-IN ANIMATIONS
       Uses IntersectionObserver for performance
       ══════════════════════════════════════════════════════════════════════ */

    function initFadeAnimations() {
        if (!('IntersectionObserver' in window) || fadeEls.length === 0) {
            /* Fallback — just show everything */
            fadeEls.forEach(function (el) {
                el.classList.add('is-visible');
            });
            return;
        }

        var observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: '0px 0px -40px 0px'
            }
        );

        fadeEls.forEach(function (el) {
            observer.observe(el);
        });
    }


    /* ══════════════════════════════════════════════════════════════════════
       4. FAQ ACCORDION (pricing page)
       ══════════════════════════════════════════════════════════════════════ */

    function initFaq() {
        if (faqItems.length === 0) return;

        faqItems.forEach(function (item) {
            var questionBtn = item.querySelector('.faq-question');
            var answer = item.querySelector('.faq-answer');

            if (!questionBtn || !answer) return;

            /* Set initial height for animation */
            answer.style.maxHeight = '0px';
            answer.style.overflow = 'hidden';
            answer.style.transition = 'max-height 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease';
            answer.style.opacity = '0';

            questionBtn.addEventListener('click', function () {
                var isOpen = item.classList.contains('open');

                /* Close all other items first */
                faqItems.forEach(function (otherItem) {
                    if (otherItem !== item && otherItem.classList.contains('open')) {
                        otherItem.classList.remove('open');
                        var otherAnswer = otherItem.querySelector('.faq-answer');
                        var otherBtn = otherItem.querySelector('.faq-question');
                        if (otherAnswer) {
                            otherAnswer.style.maxHeight = '0px';
                            otherAnswer.style.opacity = '0';
                        }
                        if (otherBtn) {
                            otherBtn.setAttribute('aria-expanded', 'false');
                        }
                    }
                });

                /* Toggle current item */
                if (isOpen) {
                    item.classList.remove('open');
                    answer.style.maxHeight = '0px';
                    answer.style.opacity = '0';
                    questionBtn.setAttribute('aria-expanded', 'false');
                } else {
                    item.classList.add('open');
                    answer.style.maxHeight = answer.scrollHeight + 24 + 'px';
                    answer.style.opacity = '1';
                    questionBtn.setAttribute('aria-expanded', 'true');
                }
            });
        });
    }


    /* ══════════════════════════════════════════════════════════════════════
       5. DEMO VIDEO PLAY BUTTON
       ══════════════════════════════════════════════════════════════════════ */

    function initDemoPlayer() {
        if (!demoPlay) return;

        var videoContainer = demoPlay.closest('.demo-video');
        var video = videoContainer ? videoContainer.querySelector('video') : null;

        demoPlay.addEventListener('click', function () {
            if (video && video.readyState >= 2) {
                /* Video source exists — play it */
                video.play();
                demoPlay.style.opacity = '0';
                demoPlay.style.pointerEvents = 'none';

                video.addEventListener('pause', function () {
                    demoPlay.style.opacity = '1';
                    demoPlay.style.pointerEvents = 'all';
                });

                video.addEventListener('ended', function () {
                    demoPlay.style.opacity = '1';
                    demoPlay.style.pointerEvents = 'all';
                });
            } else {
                /* No video source — placeholder interaction */
                demoPlay.innerHTML =
                    '<span style="color: rgba(255,255,255,0.6); font-size: 0.85rem; font-family: var(--font-main);">Demo coming soon</span>';
                setTimeout(function () {
                    demoPlay.innerHTML =
                        '<svg width="48" height="48" viewBox="0 0 48 48" fill="none">' +
                        '<circle cx="24" cy="24" r="23" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>' +
                        '<path d="M20 16l12 8-12 8V16z" fill="white"/>' +
                        '</svg>';
                }, 2000);
            }
        });
    }


    /* ══════════════════════════════════════════════════════════════════════
       6. SMOOTH SCROLL FOR ANCHOR LINKS
       ══════════════════════════════════════════════════════════════════════ */

    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
            anchor.addEventListener('click', function (e) {
                var targetId = this.getAttribute('href');
                if (targetId === '#') return; /* Skip placeholder links */

                var target = document.querySelector(targetId);
                if (!target) return;

                e.preventDefault();
                closeMobileMenu();

                var navHeight = nav ? nav.offsetHeight : 0;
                var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            });
        });
    }


    /* ══════════════════════════════════════════════════════════════════════
       7. SUBTLE PARALLAX ON HERO GLOW
       ══════════════════════════════════════════════════════════════════════ */

    var heroGlow = document.querySelector('.hero-glow');
    var ticking = false;

    function handleParallax() {
        if (!heroGlow) return;
        var scrolled = window.scrollY;
        if (scrolled < window.innerHeight * 1.2) {
            heroGlow.style.transform =
                'translateX(-50%) translateY(' + scrolled * 0.08 + 'px)';
        }
    }


    /* ══════════════════════════════════════════════════════════════════════
       8. SCROLL EVENT HANDLER (throttled via rAF)
       ══════════════���═══════════════════════════════════════════════════════ */

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                handleNavScroll();
                handleStickyCta();
                handleParallax();
                ticking = false;
            });
            ticking = true;
        }
    }


    /* ══════════════════════════════════════════════════════════════════════
       9. PAGE LOAD ANIMATION
       ══════════════════════════════════════════════════════════════════════ */

    function initPageLoad() {
        /* Small delay to allow CSS to apply first */
        document.body.classList.add('is-loading');

        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                document.body.classList.remove('is-loading');
                document.body.classList.add('is-loaded');
            });
        });
    }


    /* ══════════════════════════════════════════════════════════════════════
       10. KEYBOARD ACCESSIBILITY
       ══════════════════════════════════════════════════════════════════════ */

    function initAccessibility() {
        /* Close mobile menu on Escape */
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                closeMobileMenu();

                /* Also close any open FAQ */
                faqItems.forEach(function (item) {
                    if (item.classList.contains('open')) {
                        item.classList.remove('open');
                        var answer = item.querySelector('.faq-answer');
                        var btn = item.querySelector('.faq-question');
                        if (answer) {
                            answer.style.maxHeight = '0px';
                            answer.style.opacity = '0';
                        }
                        if (btn) {
                            btn.setAttribute('aria-expanded', 'false');
                        }
                    }
                });
            }
        });

        /* Visible focus outlines only on keyboard navigation */
        document.addEventListener('mousedown', function () {
            document.body.classList.add('using-mouse');
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Tab') {
                document.body.classList.remove('using-mouse');
            }
        });
    }


    /* ══════════════════════════════════════════════════════════════════════
       11. ORBS ANIMATION (mirror section — subtle floating)
       ══════════════════════════════════════════════════════════════════════ */

    function initOrbAnimation() {
        var orb = document.querySelector('.mirror-orb');
        if (!orb) return;

        var observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        orb.classList.add('animate');
                    }
                });
            },
            { threshold: 0.3 }
        );

        observer.observe(orb);
    }


    /* ══════════════════════════════════════════════════════════════════════
       INITIALISE EVERYTHING
       ══════════════════════════════════════════════════════════════════════ */

    function init() {
        initPageLoad();
        initFadeAnimations();
        initFaq();
        initDemoPlayer();
        initSmoothScroll();
        initAccessibility();
        initOrbAnimation();

        /* Bind scroll */
        window.addEventListener('scroll', onScroll, { passive: true });

        /* Fire once on load in case page is already scrolled */
        handleNavScroll();
        handleStickyCta();
    }

    /* Wait for DOM ready */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();