//Gym Web
//Declaracion de Funciones
const actividadesGym = [];

function alertar(filtro){
    console.log(filtro);
    let arrayFiltrado = actividadesGym.find(objeto => objeto.nombre === filtro.toUpperCase());
    console.log(arrayFiltrado);
    let horario = arrayFiltrado.horario;
    alert(horario)
    /* Swal.fire({
        title: `${arrayFiltrado.nombre}`,
        text: `${horario}`,
        icon: none,
        confirmButtonText: 'Aceptar'
    }) */
    textoAcceso=''
}
//Fetch
fetch('actividades.json')
    .then( (res) => res.json())
    .then((data) => {
        data.forEach((el) => {
        actividadesGym.push(el)
    })});
    
console.log(actividadesGym);

/* document.querySelector("#horario-boxeo").addEventListener("click",console.log('Diste Click'));
document.querySelector("#horario-funcional").addEventListener("click", () => alertar(funcional));
document.querySelector("#horario-pilates").addEventListener("click", () => alertar(pilates));
document.querySelector("#horario-zumba").addEventListener("click", () => alertar(zumba));
 */


/*
const interes = (a, b) => {return (a + ((a*b)/100))}
const couta = (a, b) => {return (a/b)}


//Planes
class Plan {
    constructor(veces,price){
        this.veces = veces
        this.price = parseFloat(price)
    }
}
const plan1 = new Plan('2', '2000');
const plan2 = new Plan('3', '2800');
const plan3 = new Plan('Libre', '3100');
const plan4 = new Plan('Libre ANUAL', '33600');
const lista = document.querySelector('#listado')



                let x = parseInt(prompt('Ingrese Un Plan (Cero para Salir): \n1 - 2 Veces por Semana $2000\n2 - 3 Veces por Semana $2800\n3 - Pase Libre $3100\n4 - Pase Libre ANUAL (Beneficio 12 Cuotas Sin Interes) $2500 por Mes'));

                while (x != 0){
                    if(x == 1){
                        alert ('Plan '+plan1.veces +' Veces Por Semana.\nEl Precio a Pagar sera de:\n1 Cuota -> $'+ plan1.price+ '\n3 Cuotas de $'+Math.round(couta(interes(plan1.price,15),3))+' (15% Interes) -> $'+ interes(plan1.price, 15)+ '\n6 Cuotas de $'+Math.round(couta(interes(plan1.price,25),6))+' (25% Interes) -> $'+ interes(plan1.price, 25)+ '\n12 Cuotas de $'+Math.round(couta(interes(plan1.price,40),12))+' (40% Interes) -> $'+ interes(plan1.price, 40));
                        break
                    }
                    else if (x == 2){
                        alert ('Plan '+plan2.veces +' Veces Por Semana.\nEl Precio a Pagar sera de:\n1 Cuota -> $'+ plan2.price+ '\n3 Cuotas de $'+Math.round(couta(interes(plan2.price,15),3))+' (15% Interes) -> $'+ interes(plan2.price, 15)+ '\n6 Cuotas de $'+Math.round(couta(interes(plan2.price,25),6))+' (25% Interes) -> $'+ interes(plan2.price, 25)+ '\n12 Cuotas de $'+Math.round(couta(interes(plan2.price,40),12))+' (40% Interes) -> $'+ interes(plan2.price, 40));
                        break
                    }
                    else if (x == 3){
                        alert ('Plan '+plan3.veces +'.\nEl Precio a Pagar sera de:\n1 Cuota -> $'+ plan3.price+ '\n3 Cuotas de $'+Math.round(couta(interes(plan3.price,15),3))+' (15% Interes) -> $'+ interes(plan3.price, 15)+ '\n6 Cuotas de $'+Math.round(couta(interes(plan3.price,25),6))+' (25% Interes) -> $'+ interes(plan3.price, 25)+ '\n12 Cuotas de $'+Math.round(couta(interes(plan3.price,40),12))+' (40% Interes) -> $'+ interes(plan3.price, 40));
                        break
                    }
                    else if (x == 4){
                        alert ('Plan '+plan4.veces +'.\nEl Precio a Pagar sera de:\n1 Cuota -> $'+ plan4.price+ '\n3 Cuotas de $'+Math.round(couta(interes(plan4.price,5),3))+' (5% Interes) -> $'+ interes(plan4.price, 5)+ '\n6 Cuotas de $'+Math.round(couta(interes(plan4.price,10),6))+' (10% Interes) -> $'+ interes(plan4.price, 10)+ '\n12 Cuotas de $'+Math.round(couta(plan4.price,12))+'(Sin Interes) -> $'+ plan4.price);
                        break
                    }
                    else {
                        alert('Ingrese una Opcion Valida')
                        let x = parseInt(prompt('Ingrese Un Plan (Cero para Salir): \n1 - 2 Veces por Semana $2000\n2 - 3 Veces por Semana $2800\n3 - Pase Libre $3100\n4 - Pase Libre ANUAL (Beneficio 12 Cuotas Sin Interes) $2500 Mensual'));
                        break
                    }    
                }
*/