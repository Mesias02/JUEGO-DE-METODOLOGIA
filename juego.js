'use strict'


function Apodo(apodo, vidas, carta){
    this.apodo = apodo;
    this.vidas = vidas;
    this.carta = carta;

    this.getVidas = function (vidasRestan){
        this.vidas=this.vidas-vidasRestan;
    }

    this.showApodo = function(){
        alert(`Tu apodo es ${this.apodo} y tiene ${this.vidas} vidas restantes`)
    }
}

let apodoUno = new Apodo(prompt("Ingresa tu apodo"),
Number(prompt("Ingresa el numero de vida")),
Number(prompt("Ingresa una carta del 1 al 7")));

apodoUno.getVidas (Number(prompt("Ingresa el numero de vidas que perdiste")));
apodoUno.showApodo ();

