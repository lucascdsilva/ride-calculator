# Refatorando o seguinte código
A ideia é refatorar este código para o mesmo proximo possivel para um ambiente de produção.

```javascript
// calculate ride
exports.calc = function(dist, d) {
    // overnight
    if (d.getHours() >= 22) {
        return dist * 3.90;
    } else {
        // sunday
         if (d.getDay() === 0) {
             return dist * 2.9;
         } else {
             return dist * 2.10;
         }
    }
}
```

# Bônus

Implemente uma funcionalidade para calcular um desconto de 10% para corridas do tipo "overnight" quando o cliente possuir 10 corridas ou mais.

# Instalação de dependências 

```bash 
npm install
```

# Executar testes

```bash 
npm run test
```