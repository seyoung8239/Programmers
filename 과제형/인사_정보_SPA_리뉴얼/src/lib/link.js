export const link = (to, data) => {
    history.pushState(data, "", to);
    const pushStateEvent = new CustomEvent("pushstate");
    document.dispatchEvent(pushStateEvent);
};
