gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".aboutSectionImage", {
    x: 200,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".aboutSectionImage",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
  gsap.from(".aboutContent", {
    x: -200,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".aboutContent",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
  gsap.from(".workingProcessHeading", {
    x: 500,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".workingProcessHeading",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
  gsap.from(".workingProcessContent", {
    y: 500,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".workingProcessContent",
      start: "top 100%",
      toggleActions: "play none none reverse",
    },
  });
  gsap.from(".portfolioHeading", {
    x: 500,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".portfolioHeading",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
  gsap.from(".commercialProject", {
    x: 700,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".commercialProject",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
  gsap.from(".residentialProject", {
    x: -700,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".residentialProject",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
  gsap.from(".blogHeading", {
    x: 700,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".blogHeading",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
  gsap.from(".blogContent", {
    y: 700,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".blogContent",
      start: "top 100%",
      toggleActions: "play none none reverse",
    },
  });
  gsap.from(".formHeading", {
    x: 700,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".formHeading",
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  });
});
