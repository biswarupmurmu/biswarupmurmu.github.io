const theme_toggle = document.querySelector('#theme_toggle_checkbox');
const body = document.querySelector("body");

let previous_settings = localStorage.getItem("theme");

if (previous_settings == "dark") {
    theme_toggle.checked = true;
    body.setAttribute('theme', 'dark');
}

theme_toggle.addEventListener('change', function () {
    if (this.checked) {
        body.setAttribute('theme', 'dark');
        localStorage.setItem("theme", "dark");
    }
    else {
        body.setAttribute('theme', 'light');
        localStorage.setItem("theme", null);
    }
})