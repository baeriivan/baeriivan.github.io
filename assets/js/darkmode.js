const html = document.querySelector('html');
const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (userPrefersDark) {
    html.dataset.theme = `dark-theme`;
} else {
    html.dataset.theme = `light-theme`;
}

function switchTheme(theme) {
    html.dataset.theme = `${theme}-theme`;
}
