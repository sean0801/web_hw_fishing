function goToPlans() {
    document.getElementById('login-page').classList.add('hidden');
    document.getElementById('plan-page').classList.remove('hidden');
}

function goToPayment() {
    document.getElementById('plan-page').classList.add('hidden');
    document.getElementById('payment-page').classList.remove('hidden');
}

function showScam() {
    document.getElementById('payment-page').classList.add('hidden');
    document.getElementById('scam-page').classList.remove('hidden');
}
