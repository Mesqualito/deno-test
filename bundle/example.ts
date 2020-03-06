import capitalize from "https://unpkg.com/lodash-es@4.17.15/capitalize.js";

export function main() {
    console.log(capitalize("hello from the web browser"));
}

window.onload = () => {
    console.info(capitalize("module loaded!"));
};
