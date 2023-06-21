let saldoUsuario = 5000;
let opcion;
menu();

function menu(){
    opcion = prompt(`
    Ingrese la opcion de su preferencia:
    1: Ver el saldo actual.
    2: Realizar retiros.
    3: Realizar depositos.
    4: Realizar transferencia.
    otro: Cerrar el cajero.`);

    switch(opcion){
        case "1":
            verSaldo();
            break;
        case "2":
            retirar();
            break;
        case "3":
            depositar();
            break;
        case "4":
            transferir();
            break;
            default: 
            alert("Gracias por usar nuestros servicios!");
    }
}




function verSaldo(){
    alert(`Tu saldo actual es: ${saldoUsuario}`);
    menu();
}
function depositar(){
    let montoDeposito = parseInt(prompt("Ingrese el monto a depositar"));
    saldoUsuario += montoDeposito;
    alert(`Deposito exitoso, tu saldo actual es: ${saldoUsuario}`);
    menu();
}
function retirar(){
    alert(`Tu saldo actual es: ${saldoUsuario}`);
    let montoRetiro = +prompt("Ingrese el monto a retirar");
    if(saldoUsuario - montoRetiro >= 0){
        saldoUsuario -= montoRetiro;
        alert(`Retiro exitoso, tu saldo actual es: ${saldoUsuario}`);
    }else{
        alert("Fondos insuficientes");
    }
    menu();
}
function transferir(){
    alert(`Tu saldo actual es: ${saldoUsuario}`);4
    let cuentaDestino = prompt("Ingrese la cuenta destino");
    let monto = +prompt("Ingrese el monto a transferir");
    if(saldoUsuario - monto >= 0){
        saldoUsuario -= monto;
        alert(`Transferencia exitosa a la cuenta ${cuentaDestino}, tu saldo actual es: ${saldoUsuario}`);
    }else{
        alert("Fondos insuficientes");
    }
    menu();
}
