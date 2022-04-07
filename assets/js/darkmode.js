const html = document.querySelector('html');
const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (userPrefersDark) {
    html.dataset.theme = `dark-theme`;
} else {
    html.dataset.theme = `light-theme`;
}

function switchTheme() {
    switch (html.dataset.theme) {
        case `dark-theme`:
            html.dataset.theme = `light-theme`;
            break;
        case `light-theme`:
            html.dataset.theme = `dark-theme`;
            break;
        default:
            break;
    }
}
