/**
 * Mobile Menu Toggle Functionality
 * Handles hamburger menu for mobile devices
 * Does not interfere with dropdown functionality
 */

function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.navbar1 ul');

    if (!hamburger || !navMenu) {
        console.warn('Hamburger or nav menu not found');
        return;
    }

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when regular nav links are clicked (excluding dropdown button)
    const navLinks = document.querySelectorAll('.navbar1 ul > li > a:not(.dropbtn)');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when dropdown items are clicked
    const dropdownItems = document.querySelectorAll('.dropdown-content a');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        const isClickOnHamburger = hamburger.contains(e.target);
        const isClickOnNav = navMenu.contains(e.target);

        if (!isClickOnHamburger && !isClickOnNav && hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Close menu on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initMobileMenu);
