const toggle = document.getElementById('toggle')
const toggleCircle = document.getElementById('toggle-circle')
const toggleLabel = document.getElementById('toggle-label')

const changeDarkLight = () => {
    toggleCircle.classList.toggle('toggle__circle--right')
    document.body.classList.toggle('ligth-mode')
    if(toggleLabel.textContent === 'Dark Mode') {
        toggleLabel.textContent = 'Light Mode'
    } else {
        toggleLabel.textContent = 'Dark Mode'
    }
}

toggle.addEventListener('click', changeDarkLight)