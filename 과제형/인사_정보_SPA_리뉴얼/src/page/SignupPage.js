import Component from "../lib/Component.js";
import ContentTitle from "../components/ContentTitle.js";

class SignupPage extends Component {
    render() {
        this.$target.innerHTML = `
            <div class="content_title"></div>
            <form id="form_container">
                <span class="form_elem">
                    <span class="mark">이름(필수*)</span>
                    <input name="name" id="name" placeholder="이름">
                </span>
                <span class="form_elem">
                    <span class="mark">이메일(필수*)</span>
                    <input name="email" id="email" placeholder="이메일">
                </span>
                <span class="form_elem">
                    <span class="mark">닉네임(필수*)</span>
                    <input name="nickname" id="nickname" placeholder="닉네임">
                </span>
                <span class="form_elem">
                    <span class="mark">직군(필수*)</span>
                    <select name="role" id="role" name="role">
                        <option value="">직군을 선택해주세요</option>
                        <option value="backend">백엔드</option>
                        <option value="frontend">프론트엔드</option>
                        <option value="fullstack">풀스택</option>
                    </select>
                </span>
                <span class="form_elem">
                    <span class="mark">mbti</span>
                    <select name="mbit" id="mbti" name="mbti">
                        <option value="">MBTI를 선택해주세요</option>
                        <option value="backend">백엔드</option>
                        <option value="frontend">프론트엔드</option>
                        <option value="fullstack">풀스택</option>
                    </select>
                </span>
                <span class="form_elem">
                <span class="mark"></span>
                    <button type="submit">등록</button>
                </span>
            </form>
        `;
    }
    mount() {
        const $contentTitle = document.querySelector(".content_title");
        new ContentTitle($contentTitle, "Sign Up, GreatPeoPle!");
    }
    setHandler() {
        const $signupForm = document.querySelector("#form_container");
        $signupForm.addEventListener("submit", handleSubmit);

        function handleSubmit(e) {
            e.preventDefault();
            const { name, email, nickname, role, mbti } = e.target;
            try {
                checkInputValidation(name, email, nickname, role);
                checkDuplication(email, nickname);
            } catch (e) {
                alert(e.message);
            }
            const newMemebers = JSON.parse(
                localStorage.getItem("personalInfo")
            );
            // TODO: start here
            newMemebers.push({
                name: name.value,
                email: email.value,
                nickname: nickname.value,
                role: role.value,
                mbti: mbti.value,
            });
            console.log(newMemebers);
            localStorage.setItem("personalInfo", JSON.stringify(newMemebers));
        }

        function checkInputValidation(name, email, nickname, role) {
            const nameRegex = /^[가-힣]{2,4}$/;
            const emailRegex = /[a-zA-Z0-9]+@grepp.co$/;
            const nicknameRegex = /^[a-zA-Z]{3,10}$/;

            if (!nameRegex.test(name.value))
                throw Error("2~4 글자의 한글만 입력이 가능합니다.");
            if (!emailRegex.test(email.value))
                throw Error(
                    "이메일 ID는 영문(대소문자 구분 없음)과 숫자만 입력이 가능하며, @grepp.co 형식의 이메일만 입력이 가능합니다."
                );
            if (!nicknameRegex.test(nickname.value))
                throw Error(
                    "대소문자 구분 없이 3~10 글자의 영문만 입력이 가능합니다."
                );
            if (!role.value) throw Error("직군 선택은 필수입니다.");
        }

        function checkDuplication(email, nickname) {
            let flag = true;
            const members = JSON.parse(localStorage.getItem("personalInfo"));
            members.forEach((m) => {
                if (m.email === email && m.nickname === nickname)
                    throw Error("이메일 혹은 닉네임이 이미 등록되어 있습니다.");
            });
        }
    }
}

export default SignupPage;
