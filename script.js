document.addEventListener("DOMContentLoaded", () => {
    const days = document.querySelectorAll(".workout-day");

    days.forEach(day => {
        const checkboxes = day.querySelectorAll(".exercise");
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener("change", () => {
                if ([...checkboxes].every(cb => cb.checked)) {
                    day.style.display = "none";
                    let score = parseInt(localStorage.getItem("score")) || 0;
                    score++;
                    localStorage.setItem("score", score);
                    updateScoreboard();
                }
            });
        });
    });

    function updateScoreboard() {
        let score = parseInt(localStorage.getItem("score")) || 0;
        document.getElementById("scoreboard").textContent = `Score: ${score}`;
    }

    // Initialize scoreboard on page load
    updateScoreboard();
});
