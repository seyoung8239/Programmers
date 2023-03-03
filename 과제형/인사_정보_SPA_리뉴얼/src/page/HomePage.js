import Component from "../lib/Component.js";
import ContentTitle from "../components/ContentTitle.js";

class HomePage extends Component {
    setup() {
        const members = JSON.parse(localStorage.getItem("personalInfo"));
        this.state.members = members;
    }
    render() {
        const cardListString = this.state.members
            .map(
                (m) => `
            <div idx='${m.idx}' class="card">
                <div class="card_plane card_plane--front">${m.name}</div>
                <div class="card_plane card_plane--back">${m.mbti}</div>
            </div>
        `
            )
            .join("");

        this.$target.innerHTML = `
            <div class="content_title"></div>
            <div id="cards_container">${cardListString}</div>
        `;
    }
    mount() {
        const $contentTitle = document.querySelector(".content_title");
        new ContentTitle($contentTitle, "Great People");
    }
    setHandler() {
        // const $frontPlane = document.querySelector('.card_plane--front')
        // const $backPlane = document.querySelector('.card_plane--back')
        // console.log($frontPlane, $backPlane)

        // $frontPlane.addEventListener('click', () => {
        //     $frontPlane.style.display = 'none';
        //     $backPlane.style.display = 'block';
        // })
        // $backPlane.addEventListener('click', () => {
        //     $frontPlane.style.display = 'block';
        //     $backPlane.style.display = 'none';
        // })

        const $cardList = document.querySelectorAll(".card_plane");
        $cardList.forEach(($card, i) => {
            $card.addEventListener("click", (e) => {
                // console.log($card.style)
                console.log($card.style.backfaceVisibility);
                $card.style.backfaceVisibility = "visible";
            });
        });
    }
}

export default HomePage;
