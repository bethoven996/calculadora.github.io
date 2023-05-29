const numero = document.querySelector(".cont-btn-num");
const contenedorResultado = document.getElementById("cont-resultado")
const operadores = document.querySelector(".cont-btn-operadores")
const clear = document.getElementById("btn-clear")
const total = document.getElementById("btn-total")
const sumar = document.getElementById("btn-suma")
const resultadoFinal = document.getElementById("btn-total")
const restar = document.getElementById("btn-restar")
const multiplicar = document.getElementById("btn-multiplicar")
const divido = document.getElementById("btn-dividir")
let operando1
let operando2
let operacion
const valorBtn =()=>{
    numero.addEventListener("click",e=>{
        const t = e.target 
        const d =  t.value
            if (d != undefined){
                contenedorResultado.value = contenedorResultado.value + d
            }
    })
}
valorBtn()
const limpiar =()=>{
    clear.addEventListener("click",(evento)=>{
        contenedorResultado.value = ""
        operando1=0
        operando2=0
        operacion=""
    })
}
limpiar()
const sumas =()=>{
    sumar.addEventListener("click",(ev)=>{
        operando1 = contenedorResultado.value
        operacion = "+"
        limpiarResul()
    })
}
sumas()
const restas =()=>{
    restar.addEventListener("click",restar =>{
        operando1 = contenedorResultado.value
        operacion = "-"
        limpiarResul()
    })
}
restas()
const multiplicarF =()=>{
    multiplicar.addEventListener("click",mult =>{
        operando1 = contenedorResultado.value
        operacion = "*"
        limpiarResul()
    })
}
multiplicarF()
const dividir=()=>{
    divido.addEventListener("click",divi=>{
        operando1 = contenedorResultado.value
        operacion = "/"
        limpiarResul()
    })
}
dividir()
const limpiarResul =()=>{
    contenedorResultado.value = "";
}
const resultados=()=>{
    resultadoFinal.addEventListener("click",evts =>{
        operando2 = contenedorResultado.value
        resolver()
        debugger
    })
}
resultados()
const resolver =()=>{
    res = 0
    switch(operacion){
        case "+":
            res = parseFloat(operando1) + parseFloat(operando2)
            break
        case "-":
            res = parseFloat(operando1) - parseFloat(operando2)
            break
        case "*":
            res = parseFloat(operando1) * parseFloat(operando2)
            break
        case "/":
            res = parseFloat(operando1) / parseFloat(operando2)
            break
    } 
    
    contenedorResultado.value = res
}
// `````
// `````