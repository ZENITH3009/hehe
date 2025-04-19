window.onload = () => {
  const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

  // Dancing animation loop
  tl.to("#couple", {
    duration: 30,
    y: 10,
    repeat: 3,
    yoyo: true
  })

  // Flower handover
  .to("#flower", { opacity: 1, duration: 2, delay: 1 })

  // Zoom out
  .to(".scene", { scale: 0.8, duration: 2, delay: 1 })

  // Final message fade in
  .to(".final-message", { opacity: 1, duration: 3 });

  document.getElementById("bg-music").volume = 0.5;
};
