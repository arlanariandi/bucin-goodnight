const love = document.querySelector('#love')

love.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.href = e.currentTarget.parentElement.href

})
