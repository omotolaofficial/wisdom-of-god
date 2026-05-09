/**
 * Dropdown Menu Toggle Functionality
 * Handles click-based dropdown for Magazine menu
 * Works independently on both desktop and mobile
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

// Initialize when DOM content is loaded
document.addEventListener('DOMContentLoaded', initDropdown);