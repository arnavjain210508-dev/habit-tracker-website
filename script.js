document.addEventListener('DOMContentLoaded', () => {
    const habitList = document.getElementById('habitList');
    const progressFill = document.getElementById('progressFill');
    const progressStats = document.getElementById('progressStats');
    const progressPercent = document.getElementById('progressPercent');
    const addHabitBtn = document.getElementById('addHabitBtn');

   
    function updateProgress() {
        const habits = habitList.querySelectorAll('.habit');
        const totalHabits = habits.length;
        let completedHabits = 0;

        habits.forEach(habit => {
            const checkbox = habit.querySelector('input[type="checkbox"]');
            if (checkbox.checked) {
                completedHabits++;
                habit.classList.add('completed');
            } else {
                habit.classList.remove('completed');
            }
        });

        const percentage = totalHabits > 0 ? Math.round((completedHabits / totalHabits) * 100) : 0;

       
        progressFill.style.width = `${percentage}%`;
        progressStats.textContent = `${completedHabits} of ${totalHabits} habits completed`;
        progressPercent.textContent = `${percentage}%`;
    }

   
    habitList.addEventListener('change', (event) => {
        if (event.target.matches('input[type="checkbox"]')) {
            updateProgress();
        }
    });

    
    addHabitBtn.addEventListener('click', () => {
        const habitName = prompt("Enter new habit title:");
        if (habitName && habitName.trim() !== "") {
            const newHabitDiv = document.createElement('div');
            newHabitDiv.className = 'habit';
            newHabitDiv.innerHTML = `
                <div class="habit-info">
                    <span class="habit-icon">⭐</span>
                    <div>
                        <h3>${habitName.trim()}</h3>
                        <p>Daily</p>
                    </div>
                </div>
                <input type="checkbox">
            `;
            habitList.appendChild(newHabitDiv);
            updateProgress();
        }
    });

   
    updateProgress();
});
const currentDate = document.getElementById("current-date");

const today = new Date();

currentDate.textContent = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
});
