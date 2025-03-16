if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/dona/Calculator/sw-register.js')
    .then(() => console.log("Service Worker Registered!"))
    .catch(err => console.error("Service Worker Registration Failed:", err));
}
