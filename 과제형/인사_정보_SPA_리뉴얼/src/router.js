import HomePage from "./page/HomePage.js";
import SignupPage from "./page/SignupPage.js";

const pathTable = {
    ["/"]: HomePage,
    ["/signup"]: SignupPage,
};

class Router {
    $target;
    CurrentPage;

    constructor($target) {
        this.$target = $target;
        this.setHandler();
        this.render();
    }

    setHandler() {
        // why work on document only?
        document.addEventListener("pushstate", this.render);
        document.addEventListener("popstate", this.render);
    }

    render = () => {
        const CurrentPage = pathTable[location.pathname];
        new CurrentPage(this.$target);
    };
}

export default Router;
