
const joao =  {
    
    conta: 901255,
    saldo: 400.00,
    tipoDeConta: "Pessoal",
    agencia : 54,
        
        
    buscarSaldo: function() {
        return this.saldo;
    },
    depositar: function(valor) {
        this.saldo += valor;
    },
    sacar: function(valor) {
        this.saldo > valor? this.saldo -= valor: this.saldo = 0
    },
    numeroDaConta: function() {
        return `${this.conta}-${this.agencia}`;
    }
}

// joao = new Banco(901255, 400.00, "Pessoal", 54)
console.log(joao.buscarSaldo())
joao.depositar(1000.00)
console.log(joao.buscarSaldo())
joao.sacar(675.00)
console.log(joao.buscarSaldo())
console.log(joao.numeroDaConta())


// class Banco {
//     constructor(conta, saldo, tipoDeConta, agencia) {
//         this.conta = conta;
//         this.saldo = saldo;
//         this.tipoDeConta = tipoDeConta;
//         this.agencia = agencia;
//     }
    
//     buscarSaldo() {
//         return this.saldo;
//     }
//     depositar(valor) {
//         this.saldo += valor;
//     }
//     sacar(valor) {
//         this.saldo > valor? this.saldo -= valor: this.saldo = 0
//     }
//     numeroDaConta() {
//         return `${this.conta}-${this.agencia}`;
//     }
// }