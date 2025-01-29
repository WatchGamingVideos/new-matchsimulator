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
    let team1YellowCards = 0;
    let team2YellowCards = 0;
    let team1RedCards = 0;
    let team2RedCards = 0;

    const totalMinutes = 90;
    const updateInterval = 1000; // 1 second per update

    let minute = 0;
    isSkipped = false;
    
    matchInterval = setInterval(() => {
        if (isSkipped) {
            clearInterval(matchInterval);
            displayResult(team1, team1Goals, team1YellowCards, team1RedCards, team2, team2Goals, team2YellowCards, team2RedCards);
            return;
        }

        minute++;
        if (minute > totalMinutes) {
            clearInterval(matchInterval);
            displayResult(team1, team1Goals, team1YellowCards, team1RedCards, team2, team2Goals, team2YellowCards, team2RedCards);
            return;
        }

        // Simulate scoring chances
        const team1Chance = Math.random();
        const team2Chance = Math.random();
        if (team1Chance < 0.05) {
            team1Goals++;
            updates.innerHTML += `<p>Minute ${minute}: Goal for ${team1}! (Total: ${team1Goals})</p>`;
        }
        if (team2Chance < 0.05) {
            team2Goals++;
            updates.innerHTML += `<p>Minute ${minute}: Goal for ${team2}! (Total: ${team2Goals})</p>`;
        }

        // Simulate yellow cards
        if (team1Chance < 0.02) {
            team1YellowCards++;
            updates.innerHTML += `<p>Minute ${minute}: Yellow card for ${team1}! (Total: ${team1YellowCards})</p>`;
        }
        if (team2Chance < 0.02) {
            team2YellowCards++;
            updates.innerHTML += `<p>Minute ${minute}: Yellow card for ${team2}! (Total: ${team2YellowCards})</p>`;
        }

        // Simulate red cards
        if (team1Chance < 0.01) {
            team1RedCards++;
            updates.innerHTML += `<p>Minute ${minute}: Red card for ${team1}! (Total: ${team1RedCards})</p>`;
        }
        if (team2Chance < 0.01) {
            team2RedCards++;
            updates.innerHTML += `<p>Minute ${minute}: Red card for ${team2}! (Total: ${team2RedCards})</p>`;
        }

        updates.scrollTop = updates.scrollHeight;
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
        let team1YellowCards = 0;
        let team2YellowCards = 0;
        let team1RedCards = 0;
        let team2RedCards = 0;
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

            // Simulate yellow cards
            if (team1Chance < 0.02) {
                team1YellowCards++;
            }
            if (team2Chance < 0.02) {
                team2YellowCards++;
            }

            // Simulate red cards
            if (team1Chance < 0.01) {
                team1RedCards++;
            }
            if (team2Chance < 0.01) {
                team2RedCards++;
            }
        }

        displayResult(team1, team1Goals, team1YellowCards, team1RedCards, team2, team2Goals, team2YellowCards, team2RedCards);
    }
}

function displayResult(team1, team1Goals, team1YellowCards, team1RedCards, team2, team2Goals, team2YellowCards, team2RedCards) {
    document.getElementById('result').innerHTML = `
        ${team1} ${team1Goals} - ${team2Goals} ${team2}<br>
        ${team1}: ${team1YellowCards} Yellow Cards, ${team1RedCards} Red Cards<br>
        ${team2}: ${team2YellowCards} Yellow Cards, ${team2RedCards} Red Cards
    `;
}
