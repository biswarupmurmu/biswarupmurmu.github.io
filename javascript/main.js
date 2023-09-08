const theme_toggle = document.querySelector("#Theme_toggle")
const theme = document.querySelector("body")
const code_theme = document.querySelector("#code_theme")

theme_toggle.addEventListener("click", () => {
    current_theme = theme.getAttribute("theme")

    if (current_theme == "light") {
        theme_toggle.innerText = "light_mode"
        theme.setAttribute("theme", "dark")
        code_theme.setAttribute("href","/css/code_dark.css")
        localStorage.setItem("previous_theme","dark")
    }
    else {
        theme_toggle.innerText = "dark_mode"
        theme.setAttribute("theme", "light")
        code_theme.setAttribute("href","/css/code_light.css")
        localStorage.setItem("previous_theme",null)
    }
})

if(localStorage.getItem("previous_theme")=="dark") {
    theme_toggle.innerText = "light_mode"
    theme.setAttribute("theme", "dark")
    code_theme.setAttribute("href","/css/code_dark.css")
    localStorage.setItem("previous_theme","dark")
}