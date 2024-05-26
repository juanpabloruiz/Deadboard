function generateCalendar() {
    const birthdate = document.getElementById('birthdate').value;
    if (!birthdate) {
        alert("Por favor, ingresa tu fecha de nacimiento");
        return;
    }

    const birthDate = new Date(birthdate);
    const today = new Date();
    const oneDay = 24 * 60 * 60 * 1000;
    const daysLived = Math.floor((today - birthDate) / oneDay);
    const totalDays = 80 * 365; // Asumiendo 80 años de vida

    const calendar = document.getElementById('calendar');
    calendar.innerHTML = '';

    for (let i = 0; i < totalDays; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        if (i < daysLived) {
            cell.classList.add('filled');
        }
        calendar.appendChild(cell);
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    const birthdate = document.getElementById('birthdate').value;
    if (!birthdate) return;

    const birthDate = new Date(birthdate);
    const today = new Date();
    const totalLifeTime = 80 * 365 * 24 * 60 * 60 * 1000; // 80 años en milisegundos
    const timeLived = today - birthDate;
    const timeLeft = totalLifeTime - timeLived;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = 
        `Tiempo restante: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function loadGoals() {
    const goals = JSON.parse(localStorage.getItem('goals')) || [];
    const goalList = document.getElementById('goalList');
    goalList.innerHTML = '';
    goals.forEach(goal => {
        const goalItem = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = goal.completed;
        checkbox.onchange = function() {
            goal.completed = checkbox.checked;
            saveGoals(goals);
            renderGoals();
        };

        goalItem.appendChild(checkbox);

        const goalText = document.createElement('span');
        goalText.textContent = goal.text;
        if (goal.completed) {
            goalText.classList.add('strikethrough');
        }

        goalItem.appendChild(goalText);
        goalList.appendChild(goalItem);
    });
}

function addGoal() {
    const goalInput = document.getElementById('goalInput');
    const goalText = goalInput.value.trim();
    if (!goalText) return;

    const goals = JSON.parse(localStorage.getItem('goals')) || [];
    goals.push({ text: goalText, completed: false });
    saveGoals(goals);
    renderGoals();

    goalInput.value = '';
}

function saveGoals(goals) {
    localStorage.setItem('goals', JSON.stringify(goals));
}

function renderGoals() {
    loadGoals();
}

// Load goals on page load
document.addEventListener('DOMContentLoaded', loadGoals);
