import Component from "../lib/Component.js";

class ContentTitle extends Component {
    render() {
        this.$target.innerHTML = `
            <h1>${this.props}</h1>
        `;
    }
}

export default ContentTitle;
