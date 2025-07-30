console.log("iValidate JS Loaded");

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log("Button clicked");

  const email = document.getElementById("username").value.trim();
  const resultCont = document.getElementById("resultCont");

  // Loading Spinner
  resultCont.innerHTML = `<div class="text-center"><img width="100" src="img/loading.svg" alt="Loading..."></div>`;

  // API Request
  const key = "ema_live_p38NrUzCoXIbPGaQdTmWKfe5C5YMD0PlzEM70IvG";
  const url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
  const res = await fetch(url);
  const result = await res.json();

  let statusClass = "";
  let statusText = "";

  if (result.state === "deliverable") {
    statusClass = "safe";
    statusText = "✅ This email is valid and deliverable.";
  } else if (result.state === "risky") {
    statusClass = "risky";
    statusText = "⚠️ This email might be risky.";
  } else {
    statusClass = "invalid";
    statusText = "❌ This email is invalid or undeliverable.";
  }

  let str = `<div class="status ${statusClass}">${statusText}</div>`;

  for (let key in result) {
    if (result[key] !== "" && result[key] !== null) {
      str += `<div><strong>${key}:</strong> ${result[key]}</div>`;
    }
  }

  resultCont.innerHTML = `<div class="card p-4 shadow-sm">${str}</div>`;
});

