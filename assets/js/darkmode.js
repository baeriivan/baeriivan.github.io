const html = document.querySelector('html');
const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const DARK = "dark-theme";
const LIGHT = "light-theme";

if (localStorage.getItem('data-theme') === DARK ||
    (userPrefersDark && !localStorage.getItem('data-theme'))) {
    setDark();
} else {
    setLight();
}

function switchTheme() {
    switch (html.dataset.theme) {
        case DARK:
            setLight();
            break;
        case LIGHT:
            setDark();
            break;
        default:
            break;
    }
}

function setDark() {
    html.dataset.theme = DARK;
    localStorage.setItem('data-theme', DARK);
    console.log(DARK);
}

function setLight() {
    html.dataset.theme = LIGHT;
    localStorage.setItem('data-theme', LIGHT);
    console.log(LIGHT);
}
