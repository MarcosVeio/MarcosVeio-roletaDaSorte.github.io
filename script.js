const off5 = document.querySelector('.off5')
const off10 = document.querySelector('.off10')
const off15 = document.querySelector('.off15')
const off20 = document.querySelector('.off20')
const modal = document.querySelector('.modal')

off5.addEventListener('click', () => {
    modal.classList.add('active')
    document.querySelector('.modal h1').innerHTML = "5% DE DESCONTO EM TODOS NOSSOS PRODUTOS!"
})
off10.addEventListener('click', () => {
    modal.classList.add('active')
    document.querySelector('.modal h1').innerHTML = "10% DE DESCONTO EM TODOS NOSSOS PRODUTOS!"
})
off15.addEventListener('click', () => {
    modal.classList.add('active')
    document.querySelector('.modal h1').innerHTML = "15% DE DESCONTO EM TODOS NOSSOS PRODUTOS!"
})
off20.addEventListener('click', () => {
    modal.classList.add('active')
    document.querySelector('.modal h1').innerHTML = "20% DE DESCONTO EM TODOS NOSSOS PRODUTOS!"
})

let roleta = 0
function playRoleta(){
    roleta = roleta += (Math.random() * 360) + 3520;
    console.log(roleta)
    modal.classList.remove('active')
    
    document.querySelector('.roleta').style.transform = `rotate(${roleta}deg)`
    
    setTimeout(() => {
        document.querySelector('.roleta').classList.add('activeClick')
        document.elementFromPoint((elCoordenadas.x + 49.9), (elCoordenadas.y + 200)).click();
        document.querySelector('.roleta').classList.remove('activeClick')
    }, 5500)
}

let el = document.getElementById('roleta');
let elCoordenadas = el.getBoundingClientRect();

function closeModal() {
    modal.classList.remove('active')
}
