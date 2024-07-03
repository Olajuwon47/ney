function updateTimeAndDay() {
    const currentTimeUTC = new Date().toUTCString();
    const currentDay = new Date().toLocaleString('en-US', { weekday: 'long' });
    
    document.querySelector('[data-testid="currentTimeUTC"]').textContent = `Current Time (UTC): ${currentTimeUTC}`;
    document.querySelector('[data-testid="currentDay"]').textContent = `Current Day: ${currentDay}`;
}

updateTimeAndDay();
setInterval(updateTimeAndDay, 1000);
