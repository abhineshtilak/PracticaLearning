/* GSAP animations – SAFE version */
gsap.fromTo(
  ".hero-title",
  { opacity: 0, y: 80 },
  { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" }
);

gsap.fromTo(
  ".hero-sub",
  { opacity: 0, y: 40 },
  { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
);

gsap.fromTo(
  ".batch-cards a",
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    delay: 0.6,
    ease: "power3.out"
  }
);

/* Futuristic tilt */
document.querySelectorAll(".glass-card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;

    card.style.transform = `
      rotateX(${ -y / 20 }deg)
      rotateY(${ x / 20 }deg)
      scale(1.03)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});
