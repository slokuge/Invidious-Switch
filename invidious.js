const invidioUrl = 'https://invidio.us/';

const getUrl = () => {
    return window.location.href;
}

const forwardToInvidio = () => {
    const url = getUrl();
    const args = url.split('youtube.com/');
    if (args.length > 1 && args[1]) {
        const resource = args[1];
        const newUrl = invidioUrl + resource;
        window.location.href = newUrl;
    }
}

const addListener = () => {
    document.addEventListener("keydown", (zEvent) => {
        if (zEvent.ctrlKey && zEvent.altKey && zEvent.key === "i") {
            forwardToInvidio();
        }
    });
}

const main = () => {
    addListener();
}

main();