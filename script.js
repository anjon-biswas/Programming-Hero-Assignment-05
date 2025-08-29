let coins = 100;
let hearts = 0;
let copies = 0;

const coinCount = document.getElementById("coinCount");
const heartCount = document.getElementById("heartCount");
const copyCount = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");
const clearHistory = document.getElementById("clearHistory");

// Call buttons
document.querySelectorAll(".call-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const name = btn.getAttribute("data-name");
    const number = btn.getAttribute("data-number");

    if (coins < 20) {
      alert("Not enough coins to make a call");
      return;
    }

    alert(`Calling ${name} : ${number}...`);
    coins -= 20;
    coinCount.textContent = coins;

    // Add to history
    const li = document.createElement("li");
    const time = new Date().toLocaleTimeString();
    li.textContent = `${name} (${number}) - ${time}`;
    historyList.prepend(li);
  });
});

// Track copied numbers (resets on refresh)
const copiedNumbers = new Set();

// Copy buttons
document.querySelectorAll(".copy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const number = btn.getAttribute("data-number");

    if (!copiedNumbers.has(number)) {
      navigator.clipboard.writeText(number).then(() => {
        copiedNumbers.add(number);   //  copied marked
        copies++;
        copyCount.textContent = copies; //  UI update korbe
      });
    }
  });
});

// Heart buttons
document.querySelectorAll(".heart-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.textContent === "🤍") {
      btn.textContent = "❤️";
      hearts++;
    } else {
      btn.textContent = "🤍";
      hearts--;
    }
    heartCount.textContent = hearts;
  });
});

// Clear history
clearHistory.addEventListener("click", () => {
  historyList.innerHTML = "";
});
