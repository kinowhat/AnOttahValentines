const startDateOfficial = new Date("2023-04-28");

function updateCounter() {
    const now = new Date();
    const diffOfficial = now - startDateOfficial;

    const totalSeconds = Math.floor(diffOfficial / 1000);
    const days = Math.floor(totalSeconds / (3600*24));
    const hours = Math.floor((totalSeconds % (3600*24))/3600);
    const minutes = Math.floor((totalSeconds % 3600)/60)
    const seconds = totalSeconds % 60
    const years = days / 365
    document.getElementById("counter").textContent = 
    `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

    document.getElementById("yearCounter").textContent =
    `That's ${years.toFixed(2)} years!`
}

updateCounter();
    setInterval(updateCounter, 1000);

