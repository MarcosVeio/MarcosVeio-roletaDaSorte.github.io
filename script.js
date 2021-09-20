const off5 = document.querySelector('.off5')
const off10 = document.querySelector('.off10')
const off15 = document.querySelector('.off15')
const off20 = document.querySelector('.off20')
const modal = document.querySelector('.modal')
const roleta = document.querySelector('.roleta')
const pointer = document.querySelector('.pointer')
const widthScreen = document.querySelector('body').offsetWidth
let elCoordenadas = pointer.getBoundingClientRect();
let valueClick = ""
let mathRoleta = 0
let click = 0

for (let i = 1; i < 5; i++) {
    let promo = document.querySelector(`.roleta button:nth-child(${i})`)
    promo.addEventListener('click', () => {
        modal.classList.add('active')
        document.querySelector('.modal h1').innerHTML = `${promo.value} DE DESCONTO EM TODOS NOSSOS PRODUTOS!`
        valueClick = promo.value
    })
}

function playRoleta() {
    click = click += 1
    if (click === 1) {
        mathRoleta = mathRoleta += (Math.random() * 1000) * 10;
        console.log(mathRoleta)
        if (mathRoleta < 1000) mathRoleta = mathRoleta + 2000;
        console.log(mathRoleta)
        modal.classList.remove('active')

        document.querySelector('.roleta').style.transform = `rotate(${mathRoleta}deg)`

        setTimeout(() => {
            document.querySelector('.roleta').classList.add('activeClick')
            document.elementFromPoint((elCoordenadas.x + 49.9), (elCoordenadas.y + 200)).click();
            document.querySelector('.roleta').classList.remove('activeClick')

            if (valueClick === "") {
                click = 0
                alert('Por favor, gire a roleta novamente')
            }
        }, 5500)

    } else {
        alert('Você já pegou o seu desconto!')
    }
}

function closeModal() {
    modal.classList.remove('active')
}

function responsiveScreen() {
    roleta.style.width = '300px'
    roleta.style.height = '300px'
    pointer.style.paddingBottom = '470px'
    modal.style.width = '80vw'
}

if (widthScreen < 450) responsiveScreen()
