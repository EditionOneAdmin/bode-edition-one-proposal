const links = [...document.querySelectorAll('.rail__nav a')];
const sections = links
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = `#${entry.target.id}`;
      links.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === id);
      });
    });
  },
  {
    threshold: 0.45,
  }
);

sections.forEach((section) => observer.observe(section));
