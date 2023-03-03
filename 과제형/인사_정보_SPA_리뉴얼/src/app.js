import Component from "./lib/Component.js";
import Header from "./components/Header.js";
import Router from "./router.js";

class App extends Component {
    render() {
        this.$target.innerHTML = `
            <header></header>
            <main id="page_content"></main>
        `;
    }
    mount() {
        const $header = document.querySelector("header");
        const $pageContent = document.querySelector("#page_content");
        new Header($header);
        new Router($pageContent);
    }
}

export default App;
