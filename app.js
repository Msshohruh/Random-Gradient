const body = document.querySelector('body')
const randomColor = document.querySelector('.random-color')
const turn = document.querySelector('.turned-btn')

const values = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
]



// console.log(color)

function randomBgColor () {
    let color = '#'
    for (let i = 0; i < 6; i++) {
        let randomnum = Math.floor(Math.random() * values.length) 
        color += values[randomnum]
    }
    return color
}

randomColor.addEventListener('click', (e) => {
    
    randomGr()
    
})

function randomGr() {
    let color1 = randomBgColor()
    let color2 = randomBgColor()

    body.style.background = `linear-gradient(${Math.floor(Math.random() * 360)}deg, ${color1}, ${color2})`
}
let l = false
function autoChange() {
    let i = 0
    while (i < 10) {
        
        let k = setTimeout(() => {
            if (!l) {
                randomGr()
            } 
        }, i*1000);
        
        
        i++   
    }
    // for(let i = 0; i < 100; i++) {
    //     let k = setTimeout(() => {

    //         color1 = randomBgColor()
    //         color2 = randomBgColor()
        
    //         body.style.background = `linear-gradient(${Math.floor(Math.random() * 360)}deg, ${color1}, ${color2})`
    //         console.log(l)
    //         if (l) {
    //             i += 100
    //             console.log(i)
    //         }
    //         }, i*1000);
    // }
}


turn.addEventListener('click', () => { 
    if (turn.textContent == 'Auto Change Gradient Off') {
        l = false
        autoChange()
        turn.textContent = 'Auto Change Gradient On' 
    } else {
        l = true
        turn.textContent = 'Auto Change Gradient Off'
        
    }    
})


