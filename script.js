let matchInterval;
let isSkipped = false;

document.getElementById('startMatch').addEventListener('click', startMatch);
document.getElementById('skipToEnd').addEventListener('click', skipToEnd);

function startMatch() {
    const team1 = document.getElementById('team1').value;
    const team2 = document.getElementById('team2').value;

    if (team1 === team2) {
        alert('Please select two different teams.');
        return;
    }

    const updates = document.getElementById('updates');
    const result = document.getElementById('result');
    updates.innerHTML = '';
    result.innerHTML = '';

    let team1Goals = 0;
    let team2Goals = 0;

    const totalMinutes = 90;
    const updateInterval = 1000; // 1 second per update

    let minute = 0;
    isSkipped = false;
    
    matchInterval = setInterval(() => {
        if (isSkipped) {
            clearInterval(matchInterval);
            return;
        }

        minute++;
        if (minute > totalMinutes) {
            clearInterval(matchInterval);
            result.innerHTML = `${team1} ${team1Goals} - ${team2Goals} ${team2}`;
            return;
        }

        // Simulate scoring chances
        const team1Chance = Math.random();
        const team2Chance = Math.random();
        if (team1Chance < 0.05) {
            team1Goals++;
        }
        if (team2Chance < 0.05) {
            team2Goals++;
        }
    }, updateInterval);
}

function skipToEnd() {
    if (matchInterval) {
        isSkipped = true;
        clearInterval(matchInterval);

        const team1 = document.getElementById('team1').value;
        const team2 = document.getElementById('team2').value;

        let team1Goals = 0;
        let team2Goals = 0;
        const totalMinutes = 90;

        for (let minute = 1; minute <= totalMinutes; minute++) {
            // Simulate scoring chances
            const team1Chance = Math.random();
            const team2Chance = Math.random();
            if (team1Chance < 0.05) {
                team1Goals++;
            }
            if (team2Chance < 0.05) {
                team2Goals++;
            }
        }

        document.getElementById('result').innerHTML = `${team1} ${team1Goals} - ${team2Goals} ${team2}`;
    }
}
