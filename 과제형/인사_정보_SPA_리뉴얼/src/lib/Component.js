class Component {
    $target;
    state = {};
    props;
    constructor($target, props) {
        this.$target = $target;
        this.props = props;
        this.setup();
        this.render();
        this.setHandler();
        this.mount();
    }

    render() {
        return "";
    }
    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.render();
    }
    mount() {}
    setup() {}
    setHandler() {}
}

export default Component;
