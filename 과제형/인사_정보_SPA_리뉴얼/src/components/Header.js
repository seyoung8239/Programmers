import Component from "../lib/Component.js";
import { link } from "../lib/link.js";

class Header extends Component {
    render() {
        this.$target.innerHTML = `
            <header>
                <div class="header header_left">
                    <span class="menu_name" id="menu_home">HOME</span>
                </div>
                <div class="header header_right">
                    <span class="menu_name" id="menu_signup">SIGNUP</span>
                </div>
            </header>
        `;
    }
    setHandler() {
        const $homeNav = document.querySelector("#menu_home");
        const $signUpNav = document.querySelector("#menu_signup");
        $homeNav.addEventListener("click", () => {
            link("/");
        });
        $signUpNav.addEventListener("click", () => {
            link("/signup");
        });
    }
}

export default Header;
