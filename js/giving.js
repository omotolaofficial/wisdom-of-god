/**
 * Online Giving Form Functionality
 * Handles donation form submission and amount selection
 */

let selectedAmount = 0;

/**
 * Set the selected donation amount
 * @param {number} amount - Donation amount in Naira
 */
function setAmount(amount) {
    selectedAmount = amount;
    
    // Clear custom amount input
    const customAmountInput = document.getElementById('customAmount');
    if (customAmountInput) {
        customAmountInput.value = '';
    }
    
    // Update active button styling
    const buttons = document.querySelectorAll('.amount-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Find and mark the clicked button as active
    const activeButton = document.querySelector(`[data-amount="${amount}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

/**
 * Handle giving form submission
 */
function handleGivingFormSubmit() {
    const purpose = document.querySelector('select[name="purpose"]');
    const customAmount = document.getElementById('customAmount');
    const donorName = document.getElementById('donorName');
    const donorEmail = document.getElementById('donorEmail');
    
    if (!purpose || !purpose.value) {
        alert('Please select a giving purpose');
        return;
    }
    
    const amount = customAmount && customAmount.value ? parseInt(customAmount.value) : selectedAmount;
    
    if (amount <= 0) {
        alert('Please select or enter a donation amount');
        return;
    }
    
    // Prepare donation data
    const donationData = {
        amount: amount,
        purpose: purpose.value,
        name: donorName ? donorName.value : 'Anonymous',
        email: donorEmail ? donorEmail.value : '',
        date: new Date().toISOString()
    };
    
    // Log donation data (In production, send to payment gateway)
    console.log('Donation Data:', donationData);
    
    // Show confirmation message
    alert(
        `Thank you for your generosity!\n\n` +
        `Amount: ₦${amount.toLocaleString()}\n` +
        `Purpose: ${purpose.value}\n\n` +
        `Redirecting to secure payment...`
    );
    
    // TODO: Integration with payment gateway (Paystack, Flutterwave, etc.)
    // Example: window.location.href = `https://payment-gateway.com/checkout?amount=${amount}&email=${donorEmail.value}`;
}

/**
 * Initialize giving form
 */
function initGivingForm() {
    const givingForm = document.getElementById('givingForm');
    if (givingForm) {
        givingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleGivingFormSubmit();
        });
    }
}

// Initialize giving form when DOM is ready
document.addEventListener('DOMContentLoaded', initGivingForm);
