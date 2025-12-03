// --- Fade-in Animation on Scroll ---
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.2 // Trigger when 20% of the element is visible
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once it's visible
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});