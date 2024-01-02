let profissional = document.querySelector('#profissional')
let educacional = document.querySelector('#educacional')

let containerProfissional = document.querySelector('#container-profissional')
let containerEducacional = document.querySelector('#container-educacional')

profissional.addEventListener('click', () => {
    profissional.classList.add('selecionado')
    educacional.classList.remove('selecionado')

    containerProfissional.style.display = 'flex'
    containerEducacional.style.display = 'none'
})

educacional.addEventListener('click', () => {
    educacional.classList.add('selecionado')
    profissional.classList.remove('selecionado')

    containerEducacional.style.display = 'flex'
    containerProfissional.style.display = 'none'
})