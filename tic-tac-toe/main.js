let buttons = document.querySelectorAll('div[class="cell"]')
const restart = document.querySelector('button[class="game--restart"]')
const h2 = document.querySelector('h2')

let burchak = true
let sum = 0
let sum_of_comp = 0
let sum2 = [0,0]
let count2 = 0

let restart_f = restart.onclick = () => {
    for(let i of buttons){
        i.textContent = null
    }
    h2.textContent = null


    count2 = 0
    sum_of_comp = 0
    sum2 = [0,0]
    sum = 0
    burchak = true

}


for(let i of buttons){
    i.addEventListener('click',() => {
        if(!i.texContent && i.textContent != 'x' && i.textContent != 'o'){
            i.textContent = "x"
            sum += +i.dataset.cellIndex
            
            if(count2 != 1) sum2[1] += +i.dataset.cellIndex
            if(count2 != 0) sum2[0] += +i.dataset.cellIndex
            count2 += 1;
            if(count2 != 5) turnOfComp()
            

            let row1 = buttons[0].textContent == buttons[1].textContent && buttons[1].textContent == buttons[2].textContent && buttons[1].textContent == "x"
            let row2 = buttons[3].textContent == buttons[4].textContent && buttons[4].textContent == buttons[5].textContent && buttons[4].textContent == "x"
            let row3 = buttons[6].textContent == buttons[7].textContent && buttons[7].textContent == buttons[8].textContent && buttons[7].textContent == "x"

            let column1 = buttons[0].textContent == buttons[3].textContent && buttons[3].textContent == buttons[6].textContent && buttons[3].textContent == "x"
            let column2 = buttons[1].textContent == buttons[4].textContent && buttons[4].textContent == buttons[7].textContent && buttons[4].textContent == "x"
            let column3 = buttons[2].textContent == buttons[5].textContent && buttons[5].textContent == buttons[8].textContent && buttons[5].textContent == "x"

            let x1 = buttons[0].textContent == buttons[4].textContent && buttons[4].textContent == buttons[8].textContent && buttons[4].textContent == "x"
            let x2 = buttons[2].textContent == buttons[4].textContent && buttons[4].textContent == buttons[6].textContent && buttons[4].textContent == "x"


            let row1_1 = buttons[0].textContent == buttons[1].textContent && buttons[1].textContent == buttons[2].textContent && buttons[1].textContent == "o"
            let row2_1 = buttons[3].textContent == buttons[4].textContent && buttons[4].textContent == buttons[5].textContent && buttons[4].textContent == "o"
            let row3_1 = buttons[6].textContent == buttons[7].textContent && buttons[7].textContent == buttons[8].textContent && buttons[7].textContent == "o"

            let column1_1 = buttons[0].textContent == buttons[3].textContent && buttons[3].textContent == buttons[6].textContent && buttons[3].textContent == "o"
            let column2_1 = buttons[1].textContent == buttons[4].textContent && buttons[4].textContent == buttons[7].textContent && buttons[4].textContent == "o"
            let column3_1 = buttons[2].textContent == buttons[5].textContent && buttons[5].textContent == buttons[8].textContent && buttons[5].textContent == "o"

            let x1_1 = buttons[0].textContent == buttons[4].textContent && buttons[4].textContent == buttons[8].textContent && buttons[4].textContent == "o"
            let x2_1 = buttons[2].textContent == buttons[4].textContent && buttons[4].textContent == buttons[6].textContent && buttons[4].textContent == "o"

            let booling = true
            if(row1 || row2 || row3 || column1 || column2 || column3 || x1 || x2){
                h2.textContent = "You are winner"
                booling = false
            }
            if((row1_1 || row2_1 || row3_1 || column1_1 || column2_1 || column3_1 || x1_1 || x2_1) && booling){
                h2.textContent = "Computer is winner"
            }
            setTimeout(() => {
                if(h2.textContent){
                    restart_f()
                }
                
            }, 4000);
        }
    })
}

function turnOfComp(){
    if(count2 == 1){
        if(![8,6,4,2].includes(sum2[1])) burchak = false
        let first_time = document.querySelector(`div[value="5"]`)
        if(!first_time.textContent){
            first_time.textContent = 'o'
            sum_of_comp += +first_time.dataset.cellIndex
            return

        }   
    }
    
    if(count2 == 2 || count2 == 4){

        let turn = 15 - sum
        const element = document.querySelector(`div[value="${turn}"]`)
        console.log(element)
        if(element){
            if(!element.textContent){
                element.textContent = 'o'
                sum_of_comp += +element.dataset.cellIndex
                return
            }
        }

        sum = 0
    }
    if(count2 == 3){
        let n2 =  15 - sum_of_comp
        let n3 = 15 - sum2[0]
        let n4 = 15 - sum2[1]
        let comp2 = document.querySelector(`div[value="${n2}"]`)
        let comp3 = document.querySelector(`div[value="${n3}"]`)
        let comp4 = document.querySelector(`div[value="${n4}"]`)

        if(burchak){
            comp3 = comp4 || comp3
        }else{
            comp3 = comp3 || comp4
        }
        
        if(comp3){
            if(comp3.textContent != "x" && comp3.textContent != "o"){
                comp3.textContent = "o"
                return
            }
        }
        if(comp2){
            console.log(comp2,"mana shu yerda hato bor")
            if(comp2.textContent != "x" && comp2.textContent != "o"){
                comp2.textContent = "o"
                return
            }
        }
        sum2 = 0
        sum_of_comp = 0
    }
    
    while(true){
        let random = Math.floor(Math.random() * 9)
        let r_but = document.querySelector(`div[data-cell-index="${random}"]`)
        if( r_but != null && r_but != '' && !r_but.textContent ){
            r_but.textContent = 'o'
            sum_of_comp += +r_but.dataset.cellIndex
            break
        }
    }
}


/*
    834
    159
    672
*/