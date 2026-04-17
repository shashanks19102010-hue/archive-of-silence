// ================= LENIS SMOOTH SCROLL =================
const lenis = new Lenis({
  smooth: true,
  lerp: 0.08
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


// ================= GSAP SETUP =================
gsap.registerPlugin(ScrollTrigger);


// ================= INTRO ANIMATION =================
let tl = gsap.timeline();

tl.to(".intro-text span", {
  opacity: 1,
  y: -30,
  stagger: 0.3,
  duration: 1.2,
  ease: "power3.out"
});

tl.to(".intro", {
  y: "-100%",
  duration: 1.5,
  delay: 0.5,
  ease: "power4.inOut"
});


// ================= CURSOR =================
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.2,
    ease: "power2.out"
  });
});

// Cursor grow on hover
document.querySelectorAll("a, button, .project").forEach(el => {
  el.addEventListener("mouseenter", () => {
    gsap.to(cursor, { scale: 2 });
  });
  el.addEventListener("mouseleave", () => {
    gsap.to(cursor, { scale: 1 });
  });
});


// ================= HERO PARALLAX =================
gsap.to(".hero-bg img", {
  scale: 1.2,
  scrollTrigger: {
    trigger: ".hero",
    scrub: true
  }
});


// ================= ABOUT FADE =================
gsap.from(".about-content", {
  opacity: 0,
  y: 100,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%"
  }
});


// ================= SPLIT ANIMATION =================
gsap.from(".split-left img", {
  x: -200,
  opacity: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".split",
    start: "top 80%"
  }
});

gsap.from(".split-right", {
  x: 200,
  opacity: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".split",
    start: "top 80%"
  }
});


// ================= PROJECT HOVER EFFECT =================
document.querySelectorAll(".project").forEach(project => {
  project.addEventListener("mousemove", (e) => {
    let x = (e.offsetX / project.clientWidth - 0.5) * 20;
    let y = (e.offsetY / project.clientHeight - 0.5) * 20;

    gsap.to(project, {
      rotationY: x,
      rotationX: -y,
      transformPerspective: 500,
      duration: 0.5
    });
  });

  project.addEventListener("mouseleave", () => {
    gsap.to(project, {
      rotationY: 0,
      rotationX: 0,
      duration: 0.5
    });
  });
});


// ================= PARALLAX TEXT =================
gsap.to(".parallax h2", {
  y: -100,
  scrollTrigger: {
    trigger: ".parallax",
    scrub: true
  }
});


// ================= GALLERY ANIMATION =================
gsap.from(".gallery-grid img", {
  opacity: 0,
  scale: 0.8,
  stagger: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: ".gallery",
    start: "top 80%"
  }
});


// ================= CONTACT FADE =================
gsap.from(".contact", {
  opacity: 0,
  y: 100,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".contact",
    start: "top 85%"
  }
});


// ================= SCROLL TEXT SPEED =================
let scrollText = document.querySelector(".scroll-text h2");

gsap.to(scrollText, {
  xPercent: -50,
  repeat: -1,
  duration: 20,
  ease: "linear"
});