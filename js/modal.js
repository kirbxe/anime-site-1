const modal = document.querySelector('.search-model')
const modalBtn = document.querySelector('.icon_search')
const modalclose = modal.querySelector('.search-close-switch')



modalBtn.addEventListener('click', () => {

    modal.style.display = 'block'
})

modalclose.addEventListener('click', () => {

    modal.style.display = 'none'
})