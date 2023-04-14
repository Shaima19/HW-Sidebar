let menu = document.querySelector(`.menu`)
let sidebar = document.querySelector(`.sidebar`)

function openSideBar() {
    sidebar.classList.add(`sidebar_active`)
}

menu.addEventListener(`click`, openSideBar)

let closeBtn = document.querySelector(`.close_sidebar`)

function closeSideBar() {
    sidebar.classList.remove(`sidebar_active`)
}

closeBtn.addEventListener(`click`, closeSideBar)