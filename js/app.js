let installPromptEvent;
window.addEventListener("beforeinstallprompt", Event => {
    Event.preventDefault();
    console.log("beforeinstallprompt event fired");
    console.log("Install button should be visible now");
    console.log("Install prompt event is set");

    installPromptEvent = Event;
});
