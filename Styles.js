
        // JavaScript to highlight the active link
        const navLinks = document.querySelectorAll('nav a');
        const sections = document.querySelectorAll('section');

        function highlightActiveLink() {
            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 0 && rect.bottom >= 0) {
                    // The section is currently in the viewport
                    navLinks.forEach(link => link.classList.remove('active'));
                    navLinks[index].classList.add('active');
                }
            });
        }

        // Initial call to highlight the active link
        highlightActiveLink();

        // Listen for scroll events to update the active link
        window.addEventListener('scroll', highlightActiveLink);
    