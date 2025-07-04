console.log("This is my script")

let result = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "akshaykumar",
    "email": "akshaykumar@codewithharry.com",
    "score": 0.64,
    "state": "undeliverable",
    "domain": "codewithharry.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true  
}



// submitBtn.addEventListener("click", async (e) => {
//     e.preventDefault()
//     console.log("Clicked!")
//     resultCont.innerHTML = `<img width="123" src="img/loading.svg" alt="">`
//     let key = "ema_live_p38NrUzCoXIbPGaQdTmWKfe5C5YMD0PlzEM70IvG"
//     let email = document.getElementById("username").value 
//     let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
//     let res = await fetch(url)
//     let result = await res.json()
//     let str = ``
//     for (key of Object.keys(result)) {
//         if(result[key] !== "" && result[key]!== " "){ 
//             str = str + `<div>${key}: ${result[key]}</div>`
//         }
//     }

//     console.log(str)
//     resultCont.innerHTML = str
// })
submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("Clicked!");
    resultCont.innerHTML = `<img width="123" src="img/loading.svg" alt="Loading">`;

    let key = "ema_live_p38NrUzCoXIbPGaQdTmWKfe5C5YMD0PlzEM70IvG";
    let email = document.getElementById("username").value;
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
    let res = await fetch(url);
    let result = await res.json();

    // 1. Determine status class and label
    let statusClass = "";
    let statusText = "";

    if (result.state === "deliverable") {
        statusClass = "safe";
        statusText = "✅ This email is valid and deliverable.";
    } else if (result.state === "risky") {
        statusClass = "risky";
        statusText = "⚠️ This email might be risky. Use caution.";
    } else {
        statusClass = "invalid";
        statusText = "❌ This email is invalid or undeliverable.";
    }

    // 2. Build result string
    let str = `<div class="status ${statusClass}">${statusText}</div>`;

    for (let key of Object.keys(result)) {
        if (result[key] !== "" && result[key] !== " ") {
            str += `<div><strong>${key}</strong>: ${result[key]}</div>`;
        }
    }

    resultCont.innerHTML = str;
});



