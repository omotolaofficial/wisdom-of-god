/**
 * GLOBAL NAVIGATION FUNCTIONALITY
 * ===============================
 * Combines dropdown menu and mobile menu logic
 * Handles:
 * - Dropdown toggle for Magazine menu (desktop/mobile)
 * - Mobile hamburger menu toggle
 * - Click-outside detection for both
 * - Keyboard (Escape) support
 */

/**
 * Initialize Dropdown Menu
 * Handles click-based dropdown for Magazine menu
 */
function initDropdown() {
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    if (!dropbtn || !dropdownContent) {
        console.warn('Dropdown elements not found');
        return;
    }

    // Toggle dropdown on magazine button click
    dropbtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Toggle the show class
        const isShowing = dropdownContent.classList.contains('show');
        dropdownContent.classList.toggle('show');
    });

    // Close dropdown when clicking outside of it
    document.addEventListener('click', function(e) {
        const dropdown = document.querySelector('.dropdown');
        
        // If click is not on dropdown, close it
        if (!dropdown.contains(e.target)) {
            dropdownContent.classList.remove('show');
        }
    });

    // Close dropdown when a menu item is clicked
    const dropdownItems = dropdownContent.querySelectorAll('a');
    dropdownItems.forEach(link => {
        link.addEventListener('click', function() {
            dropdownContent.classList.remove('show');
        });
    });
}

/**
 * Initialize Mobile Menu
 * Handles hamburger menu for mobile devices
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

/**
 * Initialize all global navigation features
 */
function initGlobalNavigation() {
    initDropdown();
    initMobileMenu();
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initGlobalNavigation);
