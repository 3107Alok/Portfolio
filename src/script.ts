import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

//#region GSAP Config
gsap.registerPlugin(ScrollTrigger);
gsap.config({
    force3D: true,
    nullTargetWarn: false
});

gsap.defaults({
    ease: "power2.out",
    duration: 1
});
// #endregion


//#region Transitions Config
const transitions = {
    SpringUp: {
        from: {
            opacity: 0,
            scale: 0.75,
        },
        to: {
            ease: "elastic.out(0.6,0.14)",
            opacity: 1,
            scale: 1,
            duration: 4.25,
            delay: 1.25,
            stagger: 0.15,
            scrollTrigger: {
                trigger: '.Spring_Up',
            }
        }
    },
    Stagger: {
        from: {
            opacity: 0,
            y: 50,
        },
        to: {
            opacity: 1,
            y: 0,
            delay: .125,
            duration: 1.125,
            stagger: 0.125,
            ease: "power2.out"
        }
    },
    FadeUp: {
        from: {
            opacity: 0,
            y: 50,
        },
        to: {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
        }
    },
    FadeDown: {
        from: {
            opacity: 0,
            y: -50,
        },
        to: {
            opacity: 1,
            y: 0,
            delay: 0.25,
            duration: 1,
            stagger: 0.15,
            ease: "power2.out",
        }
    },
    FadeDownHeader: {
        from: {
            opacity: 0,
            y: -50,
        },
        to: {
            opacity: 1,
            y: 0,
            delay: 0.25,
            duration: 1,
            stagger: 0.15,
            ease: "power2.out",
        }
    },
    FadeIn: {
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
            duration: 1,
            stagger: 0.125,
            ease: "power1.out"
        }
    },
    MobileLink: {
        from: {
            y: 100,
            opacity: 0,
        },
        to: {
            y: 0,
            opacity: 1,
            duration: 0.3,
            delay: 0.25,
            stagger: 0.1,
            ease: "power1.out"
        }
    }
}
//#endregion

//#region Hero Orbit Animation
const avatar = document.querySelector('#avatarImage') as HTMLElement | null;
const trails = [
    document.querySelector('.Trail1'),
    document.querySelector('.Trail2'),
    document.querySelector('.Trail3'),
    document.querySelector('.Trail4')
] as (HTMLElement | null)[];

const allSpringUp = [avatar, ...trails].filter(Boolean) as HTMLElement[];

allSpringUp.forEach(el => {
    el.classList.add('spring-element-performance');
    gsap.set(el, { force3D: true });
});

if (allSpringUp.length) {
    ScrollTrigger.create({
        trigger: ".Hero_Orbit",
        start: "top bottom",
        once: true,
        onEnter: () => {
            gsap.fromTo(
                allSpringUp,
                { opacity: 0, scale: 0.75, rotation: 0 },
                {
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    duration: 4.25,
                    delay: 1.25,
                    ease: "elastic.out(0.8, 0.2)",
                    stagger: 0.15,
                    force3D: true,
                    onStart: function () {
                        this.targets().forEach((el: HTMLElement, i: number) => {
                            if (i === 0) return;

                            const trailConfig: { duration: number; direction: number }[] = [
                                { duration: 6, direction: 1 },
                                { duration: 8, direction: -1 },
                                { duration: 10, direction: 1 },
                                { duration: 12, direction: -1 }
                            ];
                            const { duration, direction } = trailConfig[i - 1];
                            gsap.to(el, {
                                rotation: `+=${360 * direction}`,
                                duration,
                                repeat: -1,
                                ease: "linear",
                                force3D: true,
                                overwrite: "auto"
                            });
                        });
                    }
                }
            );
        }
    });

    gsap.set(allSpringUp, {
        transformOrigin: "center center",
        force3D: true
    });
}

let isPressed = false;
let isScalingDown = false;
let pendingSpringUp = false;

// Handle Press event on avatar
function onPressStart() {
    if (isPressed || !allSpringUp.length) return;
    isPressed = true;
    isScalingDown = true;
    pendingSpringUp = false;

    gsap.to(allSpringUp, {
        scale: 0.75,
        duration: 0.15,
        ease: "power2.out",
        stagger: {
            amount: 0.06,
            ease: "power2.inOut"
        },
        onComplete: () => {
            isScalingDown = false;
            if (pendingSpringUp) {
                triggerSpringUp();
            }
        },
        overwrite: "auto"
    });
}

// Handle Release event on avatar
function onPressEnd() {
    if (!isPressed || !allSpringUp.length) return;
    isPressed = false;

    if (isScalingDown) {
        pendingSpringUp = true;
    } else {
        triggerSpringUp();
    }
}

// Trigger Spring Up animation on avatar and trails
function triggerSpringUp() {
    if (!allSpringUp.length) return;
    pendingSpringUp = false;

    gsap.to(allSpringUp, {
        scale: 1,
        duration: 4.25,
        ease: "elastic.out(0.8, 0.2)",
        stagger: 0.1,
        overwrite: "auto",
        onStart: function () {
            this.targets().forEach((el: HTMLElement, i: number) => {
                if (i === 0) return;

                const trailConfig: { duration: number; direction: number }[] = [
                    { duration: 6, direction: 1 },
                    { duration: 8, direction: -1 },
                    { duration: 10, direction: 1 },
                    { duration: 12, direction: -1 }
                ];
                const { duration, direction } = trailConfig[i - 1];
                gsap.to(el, {
                    rotation: `+=${360 * direction}`,
                    duration,
                    repeat: -1,
                    ease: "linear"
                });
            });
        }
    });
}

// Event Listeners for Avatar Press
const avatarImageElement = document.querySelector('#avatarImage');

if (avatarImageElement) {
    avatarImageElement.addEventListener('mousedown', onPressStart, { passive: true });
    avatarImageElement.addEventListener('mouseup', onPressEnd, { passive: true });
    avatarImageElement.addEventListener('mouseleave', onPressEnd, { passive: true });
    avatarImageElement.addEventListener('touchstart', onPressStart, { passive: true });
    avatarImageElement.addEventListener('touchend', onPressEnd, { passive: true });
    avatarImageElement.addEventListener('touchcancel', onPressEnd, { passive: true });
    avatarImageElement.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
}
// #endregion


//#region Misc Animations
/**
 * Helper to check if element is above viewport
 */
function isElementAboveViewport(element: Element): boolean {
    const rect = element.getBoundingClientRect();
    return rect.bottom < 0;
}

/**
 * Separate elements into above-viewport and visible groups
 * Animate only visible, instant-complete above-viewport
 */
function handleBatchAnimation(
    elements: Element[],
    fromProps: gsap.TweenVars,
    toProps: gsap.TweenVars
) {
    const aboveViewport: Element[] = [];
    const toAnimate: Element[] = [];

    elements.forEach(el => {
        if (isElementAboveViewport(el)) {
            aboveViewport.push(el);
        } else {
            toAnimate.push(el);
        }
    });

    // Instantly complete elements above viewport
    if (aboveViewport.length > 0) {
        gsap.set(aboveViewport, { opacity: 1, y: 0 });
    }

    // Animate visible elements with stagger preserved
    if (toAnimate.length > 0) {
        gsap.fromTo(toAnimate, fromProps, toProps);
    }
}

// Stagger Animation
ScrollTrigger.batch(".Fade_Stagger", {
    start: "top bottom-=100px",
    interval: 0.1,
    onEnter: (elements) => {
        handleBatchAnimation(elements, transitions.Stagger.from, transitions.Stagger.to);
    },
    once: true
});

// Project Stagger Animation
ScrollTrigger.batch(".Project_Stagger", {
    start: "top bottom-=100px",
    onEnter: (elements) => {
        handleBatchAnimation(
            elements,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 0.25,
                stagger: {
                    grid: "auto",
                    each: 0.125
                },
            }
        );
    },
    once: true
});

// FadeUp Animation
ScrollTrigger.batch(".Fade_Up", {
    start: "top bottom-=100px",
    onEnter: (elements) => {
        handleBatchAnimation(elements, transitions.FadeUp.from, transitions.FadeUp.to);
    },
    once: true
});

// FadeDown Animation
ScrollTrigger.batch(".Fade_Down", {
    start: "top bottom-=100px",
    onEnter: (elements) => {
        handleBatchAnimation(elements, transitions.FadeDown.from, transitions.FadeDown.to);
    },
    once: true
});

// FadeIn Animation
ScrollTrigger.batch(".Fade_In", {
    onEnter: (elements) => {
        handleBatchAnimation(elements, transitions.FadeIn.from, transitions.FadeIn.to);
    },
    once: true
});

// Header Fade Down Animation (no ScrollTrigger - direct animation on load)
const headerFadeDownElements = Array.from(
    document.querySelectorAll<HTMLElement>(".Fade_Down_Header")
);
if (headerFadeDownElements.length > 0) {
    gsap.set(headerFadeDownElements, transitions.FadeDownHeader.from);
    gsap.to(headerFadeDownElements, { ...transitions.FadeDownHeader.to });
}
// #endregion


//#region Mobile Nav Animation
const MobileNavElement = document.querySelector("#mobileHeaderNav");
let isMenuOpen = false;
const isInlineMobileMenuController =
    MobileNavElement?.getAttribute("data-menu-controller") === "inline";
const dimensions = {
    width: window.innerWidth,
    height: window.innerHeight,
}
const menuTl = gsap.timeline({ paused: true });

if (MobileNavElement && !isInlineMobileMenuController) {
    menuTl.fromTo(
        MobileNavElement,
        {
            clipPath: `circle(30px at ${dimensions.width + 30}px -30px)`,
            backgroundColor: "var(--background)",
        },
        {
            clipPath: `circle(${(dimensions.height * 2) + 200}px at 40px 40px)`,
            backgroundColor: "var(--primaryLite)",
            duration: 0.6,
            ease: "power1.inOut"
        }
    );
}

const MobileLinkElement = document.querySelectorAll("#mobileHeaderNav .MobileHeader_Nav");
const linkTl = gsap.timeline({ paused: true });

if (MobileLinkElement.length !== 0 && !isInlineMobileMenuController) {
    linkTl.fromTo(MobileLinkElement, transitions.MobileLink.from, transitions.MobileLink.to);
}

const HamMenuButton = document.querySelector("#Ham_Menu svg");

const closeNav = () => {
    if (isInlineMobileMenuController) {
        isMenuOpen = false;
        HamMenuButton?.classList.remove("isOpen");
        return;
    }

    linkTl.reverse();
    setTimeout(() => {
        menuTl.reverse();
    }, 350);

    isMenuOpen = false;
    HamMenuButton?.classList.remove("isOpen");
};

if (!isInlineMobileMenuController) {
    HamMenuButton?.addEventListener('click', () => {
        if (!isMenuOpen) {
            menuTl.play();
            linkTl.play();
            isMenuOpen = true;
            HamMenuButton?.classList.add("isOpen");
        } else {
            closeNav();
        }
    });
}

const themeToggleMobileBtn = document.getElementById("themeToggleMobile");
const themeToggleMobileProjectBtn = document.getElementById("themeToggleMobileProject");
if (!isInlineMobileMenuController) {
    themeToggleMobileBtn?.addEventListener('click', () => {
        closeNav();
    });
    themeToggleMobileProjectBtn?.addEventListener('click', () => {
        closeNav();
    });
}

window.addEventListener("pageshow", () => {
    closeNav();
});
// #endregion


//#region Smooth Scroll
const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

document
    .querySelectorAll('nav a[href^="#"], a[href^="#home"]')
    .forEach((el) => {
        el.addEventListener("click", (e) => {
            const href = el.getAttribute("href");
if (!href || !href.startsWith("#")) return;

            e.preventDefault();
             const id = href.slice(1);
  if (!id) return;

            const target = document.getElementById(id);
            if (!target) return;

            const targetTop = target.getBoundingClientRect().top + window.scrollY;
            const triggers = ScrollTrigger.getAll();

            triggers.forEach(trigger => {
                if (!trigger.trigger) return;
                const triggerTop = trigger.trigger.getBoundingClientRect().top + window.scrollY;
                if (triggerTop < targetTop && trigger.animation) {
                    trigger.animation.progress(1, false);
                }
            });

            lenis.scrollTo(target);

            // Only close nav if menu is actually open
            if (window.innerWidth < 1024 && isMenuOpen) {
                closeNav();
                isMenuOpen = false;
                HamMenuButton?.classList.remove("isOpen");
            }
        });
    });

// #endregion


//#region Initial State Check
function initializeVisibleElements() {
    const allAnimatedElements = document.querySelectorAll(
        '.Fade_Stagger, .Project_Stagger, .Fade_Up, .Fade_Down, .Fade_In'
    );

    allAnimatedElements.forEach((element) => {
        if (isElementAboveViewport(element)) {
            gsap.set(element, { opacity: 1, y: 0 });
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeVisibleElements);
} else {
    initializeVisibleElements();
}

ScrollTrigger.addEventListener('refresh', initializeVisibleElements);
// #endregion

//#region Project Modal redesign controller
function initProjectModal() {
    const modal = document.getElementById("project-modal") as HTMLElement | null;
    const modalContainer = document.getElementById("project-modal-container") as HTMLElement | null;
    const closeBtn = document.getElementById("modal-close-btn") as HTMLElement | null;
    const skeleton = document.getElementById("modal-skeleton-loader") as HTMLElement | null;
    const scrollContent = document.getElementById("modal-scrollable-content") as HTMLElement | null;

    // Placeholders
    const nameEl = document.getElementById("modal-project-name") as HTMLElement | null;
    const modalProjectTitle = document.getElementById("modal-project-title") as HTMLElement | null;
    const modalProjectTagline = document.getElementById("modal-project-tagline") as HTMLElement | null;
    const liveLink = document.getElementById("modal-live-link") as HTMLAnchorElement | null;
    const sourceLink = document.getElementById("modal-source-link") as HTMLAnchorElement | null;
    const downloadLink = document.getElementById("modal-download-link") as HTMLAnchorElement | null;
    const roleEl = document.getElementById("modal-info-role") as HTMLElement | null;
    const durationEl = document.getElementById("modal-info-duration") as HTMLElement | null;
    const platformEl = document.getElementById("modal-info-platform") as HTMLElement | null;
    const statusEl = document.getElementById("modal-info-status") as HTMLElement | null;
    const techEl = document.getElementById("modal-tech-stack") as HTMLElement | null;
    const descEl = document.getElementById("modal-description") as HTMLElement | null;
    const featuresEl = document.getElementById("modal-features") as HTMLElement | null;
    const challengesSec = document.getElementById("modal-challenges-section") as HTMLElement | null;
    const challengesEl = document.getElementById("modal-challenges") as HTMLElement | null;
    const improvementsSec = document.getElementById("modal-improvements-section") as HTMLElement | null;
    const improvementsEl = document.getElementById("modal-improvements") as HTMLElement | null;

    // Mockups & Carousels
    const browserMockup = document.getElementById("browser-mockup") as HTMLElement | null;
    const phoneMockup = document.getElementById("phone-mockup") as HTMLElement | null;
    const browserCarousel = document.getElementById("browser-carousel") as HTMLElement | null;
    const phoneCarousel = document.getElementById("phone-carousel") as HTMLElement | null;

    // Fullscreen viewer
    const viewer = document.getElementById("fullscreen-viewer") as HTMLElement | null;
    const viewerImg = document.getElementById("viewer-img") as HTMLImageElement | null;
    const closeViewer = document.getElementById("close-viewer-btn") as HTMLElement | null;

    if (!modal || !modalContainer) return;

    let carouselInterval: number | null = null;
    let currentSlide = 0;
    let totalSlides = 0;
    let currentCarousel: HTMLElement | null = null;
    let currentDots: HTMLElement | null = null;
    let scrollPosition = 0;

    // Open Modal
    const openModal = (projectDataStr: string) => {
        try {
            const project = JSON.parse(projectDataStr);

            // Populate placeholders
            if (nameEl) nameEl.textContent = project.name;
            if (modalProjectTitle) modalProjectTitle.textContent = project.name;
            if (modalProjectTagline) modalProjectTagline.textContent = project.shortDescription;
            if (descEl) descEl.textContent = project.description;
            if (roleEl) roleEl.textContent = project.role;
            if (durationEl) durationEl.textContent = project.duration;
            if (platformEl) platformEl.textContent = project.platform;
            if (statusEl) statusEl.textContent = project.status;

            // Live / Source links
            if (liveLink) {
                liveLink.classList.add("hidden");
                liveLink.removeAttribute("href");
                // Use liveUrl if available, otherwise fall back to downloadUrl
                const primaryUrl = (project.liveUrl && project.liveUrl.trim() !== "")
                    ? project.liveUrl
                    : (project.downloadUrl && project.downloadUrl.trim() !== "" && project.downloadUrl !== "YOUR_GOOGLE_DRIVE_LINK_HERE")
                        ? project.downloadUrl
                        : null;
                if (primaryUrl) {
                    liveLink.href = primaryUrl;
                    liveLink.classList.remove("hidden");
                    
                    const isAppButton = (project.downloadUrl && project.downloadUrl.trim() !== "" && primaryUrl === project.downloadUrl);
                    
                    const spanEl = liveLink.querySelector("span");
                    if (spanEl) {
                        spanEl.textContent = isAppButton ? "Download APK" : "Visit Website";
                    }
                    
                    const svgContainer = liveLink.querySelector("svg");
                    if (svgContainer) {
                        if (isAppButton) {
                            svgContainer.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />`;
                        } else {
                            svgContainer.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />`;
                        }
                    }
                }
            }
            if (sourceLink) {
                sourceLink.classList.add("hidden");
                sourceLink.removeAttribute("href");
                if (project.sourceUrl && project.sourceUrl.trim() !== "") {
                    sourceLink.href = project.sourceUrl;
                    sourceLink.classList.remove("hidden");
                }
            }
            if (downloadLink) {
                downloadLink.classList.add("hidden");
                downloadLink.removeAttribute("href");
                if (project.downloadUrl && project.downloadUrl.trim() !== "" && project.downloadUrl !== "YOUR_GOOGLE_DRIVE_LINK_HERE") {
                    downloadLink.href = project.downloadUrl;
                    downloadLink.classList.remove("hidden");
                }
            }

            // Tech stack badges
            if (techEl) {
                techEl.innerHTML = project.technologies.map((t: any) => `
                    <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-white/80 transition-all hover:bg-white/10">
                        <img src="${t.icon}" alt="${t.title}" class="w-3.5 h-3.5 object-contain" />
                        ${t.title}
                    </span>
                `).join('');
            }

            // Features checklist (styled as interactive cards)
            if (featuresEl) {
                featuresEl.innerHTML = project.features.map((f: any, i: number) => `
                    <div class="feature-card flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5 shadow-sm transition-all duration-300 pointer-events-auto cursor-pointer" data-index="${i}">
                        <div class="feature-check-icon flex items-center justify-center w-5 h-5 rounded-full bg-white/5 border border-white/10 text-white/40 shrink-0 mt-0.5 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div>
                            <h4 class="text-sm font-bold text-white/90 tracking-wide">${f.title}</h4>
                            <p class="text-xs text-white/60 leading-relaxed mt-1">${f.description}</p>
                        </div>
                    </div>
                `).join('');

                // Bind click navigation on feature cards
                featuresEl.querySelectorAll(".feature-card").forEach((card) => {
                    card.addEventListener("click", () => {
                        const idx = parseInt(card.getAttribute("data-index") || "0");
                        showSlide(idx);
                    });
                });
            }

            // Optional challenges
            if (challengesSec && challengesEl) {
                if (project.challenges) {
                    challengesEl.textContent = project.challenges;
                    challengesSec.classList.remove("hidden");
                } else {
                    challengesSec.classList.add("hidden");
                }
            }

            // Optional improvements
            if (improvementsSec && improvementsEl) {
                if (project.improvements) {
                    improvementsEl.textContent = project.improvements;
                    improvementsSec.classList.remove("hidden");
                } else {
                    improvementsSec.classList.add("hidden");
                }
            }

            // Clean previous carousel interval
            if (carouselInterval) clearInterval(carouselInterval);

            // Carousel setup based on platform
            const isMobile = (project.platform.toLowerCase().includes("android") || 
                              project.platform.toLowerCase().includes("ios") || 
                              project.platform.toLowerCase().includes("flutter") || 
                              project.platform.toLowerCase().includes("mobile")) && 
                             !project.platform.toLowerCase().includes("web");
            
            if (browserMockup && phoneMockup) {
                if (isMobile) {
                    phoneMockup.classList.remove("hidden");
                    browserMockup.classList.add("hidden");
                    currentCarousel = phoneCarousel;
                    currentDots = phoneMockup.querySelector(".carousel-dots");
                } else {
                    browserMockup.classList.remove("hidden");
                    phoneMockup.classList.add("hidden");
                    currentCarousel = browserCarousel;
                    currentDots = browserMockup.querySelector(".carousel-dots");
                    
                    // Update URL display in browser frame mockup
                    const urlDisplay = document.getElementById("browser-url-text");
                    if (urlDisplay) {
                        urlDisplay.textContent = (project.liveUrl && project.liveUrl.trim() !== "")
                            ? project.liveUrl
                            : (project.sourceUrl && project.sourceUrl.trim() !== "")
                                ? project.sourceUrl
                                : `https://${project.name.toLowerCase().replaceAll(' ', '')}.com`;
                    }
                }
            }

            if (currentCarousel && project.screenshots && project.screenshots.length) {
                totalSlides = project.screenshots.length;
                currentSlide = 0;

                // Inject slides (absolute-fade layout)
                currentCarousel.innerHTML = project.screenshots.map((src: string, i: number) => `
                    <div class="carousel-slide absolute inset-0 w-full h-full opacity-0 transition-opacity duration-500 ease-in-out shrink-0 select-none ${i === 0 ? 'opacity-100 z-10 pointer-events-auto' : 'pointer-events-none'}" data-index="${i}">
                        <img src="${src}" alt="Screenshot" class="w-full h-full object-cover screenshot-preview-trigger" />
                    </div>
                `).join('');

                // Setup dots
                if (currentDots) {
                    currentDots.innerHTML = project.screenshots.map((_: any, i: number) => `
                        <span class="carousel-dot w-1.5 h-1.5 rounded-full bg-white/30 cursor-pointer transition-all ${i === 0 ? 'bg-primary! w-3' : ''}" data-index="${i}"></span>
                    `).join('');

                    // Add dot click events
                    currentDots.querySelectorAll(".carousel-dot").forEach((dot) => {
                        dot.addEventListener("click", (e) => {
                            const idx = parseInt((e.target as HTMLElement).getAttribute("data-index") || "0");
                            showSlide(idx);
                        });
                    });
                }

                // Autoplay timer (3.5 seconds)
                const startAutoplay = () => {
                    carouselInterval = setInterval(() => {
                        showSlide(currentSlide + 1);
                    }, 3500) as unknown as number;
                };

                showSlide(0);
                startAutoplay();

                // Pause on hover
                const mockupContainer = isMobile ? phoneMockup : browserMockup;
                if (mockupContainer) {
                    mockupContainer.onmouseenter = () => {
                        if (carouselInterval) clearInterval(carouselInterval);
                    };
                    mockupContainer.onmouseleave = () => {
                        startAutoplay();
                    };
                }
            }

            // Lock body scroll (Bulletproof scroll-lock preserving scroll position)
            scrollPosition = window.scrollY;
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollPosition}px`;
            document.body.style.width = "100%";
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
            
            // Stop smooth scrolling
            lenis.stop();

            // Open animation
            modal.classList.remove("pointer-events-none");
            modal.style.opacity = "1";

            // GSAP Spring animation (Slide from bottom of viewport 100vh)
            gsap.fromTo(
                modalContainer,
                { y: "100vh" },
                {
                    y: "0px",
                    duration: 0.85,
                    ease: "elastic.out(1, 0.55)",
                    force3D: true,
                    overwrite: "auto"
                }
            );

            // Shimmer/Skeleton animation (300ms) with display none fallback
            if (skeleton) {
                skeleton.style.display = "flex";
                skeleton.style.opacity = "1";
                skeleton.classList.remove("pointer-events-none");
                setTimeout(() => {
                    skeleton.style.opacity = "0";
                    setTimeout(() => {
                        skeleton.style.display = "none";
                        skeleton.classList.add("pointer-events-none");
                    }, 300);
                }, 300);
            }

            // Reset scroll position inside modal content
            if (scrollContent) {
                scrollContent.scrollTop = 0;
            }

        } catch (err) {
            console.error("Failed to parse project data", err);
        }
    };

    // Show slide
    const showSlide = (idx: number) => {
        if (!currentCarousel || totalSlides === 0) return;
        currentSlide = (idx + totalSlides) % totalSlides;

        // Fade transition for absolute slides
        const slides = currentCarousel.querySelectorAll(".carousel-slide");
        slides.forEach((slide, index) => {
            const el = slide as HTMLElement;
            if (index === currentSlide) {
                el.style.opacity = "1";
                el.style.zIndex = "10";
                el.style.pointerEvents = "auto";
            } else {
                el.style.opacity = "0";
                el.style.zIndex = "0";
                el.style.pointerEvents = "none";
            }
        });

        // Update dots UI
        if (currentDots) {
            currentDots.querySelectorAll(".carousel-dot").forEach((dot, index) => {
                if (index === currentSlide) {
                    dot.classList.add("bg-primary!", "w-3");
                } else {
                    dot.classList.remove("bg-primary!", "w-3");
                }
            });
        }

        // Highlight synchronized feature cards in the left column
        const featureCards = document.querySelectorAll(".feature-card");
        featureCards.forEach((card, index) => {
            const checkIcon = card.querySelector(".feature-check-icon");
            if (index === currentSlide % featureCards.length) {
                card.classList.add("bg-primary/10", "border-primary/30", "shadow-[0_0_20px_rgba(147,51,234,0.15)]", "scale-[1.02]");
                card.classList.remove("bg-white/5", "border-white/5");
                if (checkIcon) {
                    checkIcon.classList.remove("bg-white/5", "border-white/10", "text-white/40");
                    checkIcon.classList.add("bg-green-500/20", "border-green-500/30", "text-green-400");
                }
            } else {
                card.classList.remove("bg-primary/10", "border-primary/30", "shadow-[0_0_20px_rgba(147,51,234,0.15)]", "scale-[1.02]");
                card.classList.add("bg-white/5", "border-white/5");
                if (checkIcon) {
                    checkIcon.classList.add("bg-white/5", "border-white/10", "text-white/40");
                    checkIcon.classList.remove("bg-green-500/20", "border-green-500/30", "text-green-400");
                }
            }
        });
    };

    // Close Modal
    const closeModal = () => {
        if (modal.classList.contains("pointer-events-none")) return;

        if (carouselInterval) {
            clearInterval(carouselInterval);
            carouselInterval = null;
        }

        // Close animation (Slide to bottom of viewport 100vh)
        gsap.to(modalContainer, {
            y: "100vh",
            duration: 0.4,
            ease: "power2.in",
            force3D: true,
            overwrite: "auto",
            onComplete: () => {
                modal.classList.add("pointer-events-none");
                modal.style.opacity = "0";
                
                // Unlock body scroll and restore position
                document.body.style.position = "";
                document.body.style.top = "";
                document.body.style.width = "";
                document.body.style.overflow = "";
                document.documentElement.style.overflow = "";
                window.scrollTo(0, scrollPosition);
                
                // Restart smooth scrolling
                lenis.start();

                // Reset skeleton loader state for next trigger
                if (skeleton) {
                    skeleton.style.display = "flex";
                    skeleton.style.opacity = "1";
                    skeleton.classList.remove("pointer-events-none");
                }
            }
        });
    };

    // Slide navigation listeners
    const setupNavigation = (frameId: string) => {
        const frame = document.getElementById(frameId);
        if (!frame) return;

        frame.querySelector(".carousel-prev")?.addEventListener("click", () => {
            showSlide(currentSlide - 1);
        });
        frame.querySelector(".carousel-next")?.addEventListener("click", () => {
            showSlide(currentSlide + 1);
        });
    };

    setupNavigation("browser-mockup");
    setupNavigation("phone-mockup");

    // Close Events
    closeBtn?.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            if (viewer && !viewer.classList.contains("pointer-events-none")) {
                closeFullscreenViewer();
            } else {
                closeModal();
            }
        }
    });

    // Attach card click handlers
    const attachCardTriggers = () => {
        document.querySelectorAll(".project-card-trigger").forEach((card) => {
            card.addEventListener("click", () => {
                const projectData = card.getAttribute("data-project");
                if (projectData) {
                    openModal(projectData);
                }
            });
            // Handle Keyboard Enter
            card.addEventListener("keydown", (e: any) => {
                if (e.key === "Enter") {
                    const projectData = card.getAttribute("data-project");
                    if (projectData) {
                        openModal(projectData);
                    }
                }
            });
        });
    };

    attachCardTriggers();

    // Fullscreen Screenshot Viewer
    const openFullscreenViewer = (src: string) => {
        if (!viewer || !viewerImg) return;
        viewerImg.src = src;
        viewer.classList.remove("pointer-events-none");
        viewer.style.opacity = "1";
        viewerImg.style.transform = "scale(1)";
    };

    const closeFullscreenViewer = () => {
        if (!viewer || !viewerImg) return;
        gsap.to(viewerImg, {
            scale: 0.95,
            duration: 0.2,
            ease: "power2.in"
        });
        viewer.style.opacity = "0";
        viewer.classList.add("pointer-events-none");
    };

    document.addEventListener("click", (e) => {
        const target = e.target as HTMLElement;
        if (target.classList.contains("screenshot-preview-trigger")) {
            const src = (target as HTMLImageElement).src;
            openFullscreenViewer(src);
        }
    });

    closeViewer?.addEventListener("click", closeFullscreenViewer);
    viewer?.addEventListener("click", (e) => {
        if (e.target === viewer) closeFullscreenViewer();
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initProjectModal);
} else {
    initProjectModal();
}
//#endregion