// ===============================
// LIFETRACE FRONTEND
// ===============================


// SOS BUTTON

function activateSOS() {

    const modal = document.getElementById("sosModal");

    modal.style.display = "flex";

    document.getElementById("statusText").innerText =
        "Emergency verification in progress.";

    document.getElementById("safetyScore").innerText = "72";

}


// CLOSE SOS

function closeSOS() {

    document.getElementById("sosModal").style.display = "none";

}


// SAFETY CHECK

function checkSafety() {

    const score = document.getElementById("safetyScore");

    score.innerText = "98";

    document.getElementById("statusText").innerText =
        "No immediate danger detected.";

}


// AI ASSISTANT

function askAI(message) {

    const response = document.getElementById("aiResponse");

    if (message === "I am in danger") {

        response.innerText =
            "Stay calm. Move to a safe location if possible. Lifetrace recommends activating SOS and contacting your trusted emergency contact.";

    }

    else if (message === "There is a flood") {

        response.innerText =
            "Move to higher ground immediately. Avoid walking or driving through moving flood water. Keep your phone protected and follow official evacuation instructions.";

    }

    else if (message === "There is an earthquake") {

        response.innerText =
            "Drop, Cover and Hold On. Stay away from windows and unstable structures. After shaking stops, move carefully to an open safe area.";

    }

    else if (message === "My phone is offline") {

        response.innerText =
            "Phone is offline. Lifetrace will switch to its emergency communication fallback and continue the safety escalation process.";

    }

}


// LOCATION

function locateUser() {

    if (!navigator.geolocation) {

        alert("Location is not supported by this browser.");

        return;
    }

    navigator.geolocation.getCurrentPosition(

        function(position) {

            document.getElementById("locationStatus").innerText =
                "Located";

            alert(
                "Location detected.\n\nLatitude: " +
                position.coords.latitude +
                "\nLongitude: " +
                position.coords.longitude
            );

        },

        function() {

            alert(
                "Location permission was not granted."
            );

        }

    );

}


// BATTERY

async function checkBattery() {

    const batteryText =
        document.getElementById("batteryStatus");

    if ("getBattery" in navigator) {

        const battery =
            await navigator.getBattery();

        batteryText.innerText =
            Math.round(battery.level * 100) + "%";

    }

    else {

        batteryText.innerText =
            "Available";

    }

}

checkBattery();


// NETWORK STATUS

function updateNetworkStatus() {

    const network =
        document.getElementById("networkStatus");

    if (navigator.onLine) {

        network.innerText = "Online";

    } else {

        network.innerText = "Offline";

    }

}

window.addEventListener(
    "online",
    updateNetworkStatus
);

window.addEventListener(
    "offline",
    updateNetworkStatus
);


// ADD CONTACT

function addContact() {

    const name =
        prompt("Enter emergency contact name:");

    if (!name) return;

    const contacts =
        document.getElementById("contactsList");

    const contact =
        document.createElement("div");

    contact.className = "contact";

    contact.innerHTML = `

        <div class="contact-avatar">
            👤
        </div>

        <div>
            <h3>${name}</h3>
            <p>Trusted emergency contact</p>
        </div>

        <span class="contact-status">
            Connected
        </span>

    `;

    contacts.appendChild(contact);

}