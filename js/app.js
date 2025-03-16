let installPromptEvent;
window.addEventListener("beforeinstallprompt", Event => {
    Event.preventDefault();
    console.log("beforeinstallprompt event fired");
    console.log("Install button should be visible now");
    console.log("Install prompt event is set");

    console.log("Install prompt event is set");


    installPromptEvent = Event;

    document.getElementById("installBtn").style.display = "block";
});
document.getElementById("installBtn").addEventListener("click", () => {
    if (installPromptEvent) {
        console.log("Prompting user for installation");
        console.log("Install prompt is being shown");
        console.log("Prompting user for installation");

        console.log("Prompting user for installation");
        console.log("OK")

        installPromptEvent.prompt();
        console.log("Install prompt has been triggered");
        console.log("Install prompt event is set");

        console.log("Install prompt event is set");

        console.log("Install prompt event is set");


        console.log("User choice event fired");
        installPromptEvent.userChoice.then(choice => {
            if (choice.outcome === "accepted") {
                console.log("PWA Install");
            }
            installPromptEvent = null;
            console.log("Install prompt event has been reset");

            console.log("Install prompt event has been reset");

            console.log("Install prompt event has been reset");

            console.log("Install prompt event has been reset");

        });
    }
    else {
        console.log("1", installPromptEvent);

        console.log("22", installPromptEvent);
        console.log("333", installPromptEvent);


    }
    console.log("333", installPromptEvent);
});
