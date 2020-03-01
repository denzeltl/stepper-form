const continueButtons = document.querySelectorAll(".continue");
const backButtons = document.querySelectorAll(".back");

// Functions
function moveNextStep() {
    const currentStep = this.dataset.section;
    const nextStep = parseInt(this.dataset.section) + 1;

    document.querySelector(`#section-${currentStep}`).classList.add("hidden");
    document.querySelector(`#section-${nextStep}`).classList.remove("hidden");
}
function movePreviousStep() {
    const currentStep = this.dataset.section;
    const previousStep = parseInt(this.dataset.section) - 1;

    document.querySelector(`#section-${currentStep}`).classList.add("hidden");
    document.querySelector(`#section-${previousStep}`).classList.remove("hidden");
}
function submitForm() {
    const currentStep = this.dataset.section;

    document.querySelector(`#section-${currentStep}`).classList.add("hidden");
}

// Event listeners
continueButtons.forEach(button => {
    button.addEventListener("click", moveNextStep);
});
backButtons.forEach(button => {
    button.addEventListener("click", movePreviousStep);
});
