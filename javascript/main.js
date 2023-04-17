const theme_toggle = document.querySelector('#theme_toggle_checkbox');
const body = document.querySelector("body");

let previous_settings = localStorage.getItem("theme");

if (previous_settings == "dark") {
    theme_toggle.checked = true;
    body.setAttribute('theme', 'dark');
    code_snippet_theme()
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
    code_snippet_theme()
})

function code_snippet_theme() {
    var theme = localStorage.getItem("theme")
    if (theme == "dark") {
        document.querySelector("#code_snippet_theme").setAttribute("href","/css/code_theme/dark.css")
    }
    else {
        document.querySelector("#code_snippet_theme").setAttribute("href","/css/code_theme/light.css")
    }
}