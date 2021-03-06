import { h } from "/modules/preact.js";
import { css } from "/modules/emotion.js";
import { useEffect } from "/modules/preact/hooks.js";
const textColor = css `
  color: royalblue;
`;
export default function About() {
    useEffect(() => {
        document.title = "About us";
    }, []);
    return h("div", { class: textColor }, "About us.");
}
//# sourceMappingURL=About.js.map