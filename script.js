const off5 = document.querySelector('.off5')
const off10 = document.querySelector('.off10')
const off15 = document.querySelector('.off15')
const off20 = document.querySelector('.off20')
const modal = document.querySelector('.modal')
let valueClick = ""

off5.addEventListener('click', () => {
    modal.classList.add('active')
    document.querySelector('.modal h1').innerHTML = "5% DE DESCONTO EM TODOS NOSSOS PRODUTOS!"
    valueClick = off5.value
})
off10.addEventListener('click', () => {
    modal.classList.add('active')
    document.querySelector('.modal h1').innerHTML = "10% DE DESCONTO EM TODOS NOSSOS PRODUTOS!"
    valueClick = off10.value
})
off15.addEventListener('click', () => {
    modal.classList.add('active')
    document.querySelector('.modal h1').innerHTML = "15% DE DESCONTO EM TODOS NOSSOS PRODUTOS!"
    valueClick = off15.value
})
off20.addEventListener('click', () => {
    modal.classList.add('active')
    document.querySelector('.modal h1').innerHTML = "20% DE DESCONTO EM TODOS NOSSOS PRODUTOS!"
    valueClick = off20.value
})

let roleta = 0
let click = 0
function playRoleta(){
    click = click+=1
    if(click === 1){
        roleta = roleta += (Math.random() * 1000)*10;
        console.log(roleta)
        modal.classList.remove('active')
        
        document.querySelector('.roleta').style.transform = `rotate(${roleta}deg)`
        
        setTimeout(() => {
            document.querySelector('.roleta').classList.add('activeClick')
            document.elementFromPoint((elCoordenadas.x + 49.9), (elCoordenadas.y + 200)).click();
            document.querySelector('.roleta').classList.remove('activeClick')

            if(valueClick === ""){
                click = 0
                alert('Por favor, gire a roleta novamente')
            }
        }, 5500)
        
    }else{
        alert('Você já pegou o seu desconto!')
    }
}

let el = document.getElementById('roleta');
let elCoordenadas = el.getBoundingClientRect();

function closeModal() {
    modal.classList.remove('active')
}

let widthScreen = document.querySelector('body').offsetWidth


function responsiveScreen () {
    let roleta = document.querySelector('.roleta')
    let pointer = document.querySelector('.pointer')
    let modal = document.querySelector('.modal')
    roleta.style.width = '300px'
    roleta.style.height = '300px'
    pointer.style.paddingBottom = '470px'
    modal.style.width = '80vw'
}

widthScreen < 450 ? responsiveScreen() : ''
