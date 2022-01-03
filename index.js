const fetch = require('node-fetch')

let arrayHash = [] // eth hash
let i = 0;

function newCheckEth() {

    fetch(`https://api.ethplorer.io/getAddressInfo/${arrayHash[i]}?apiKey=freekey`)
        .then(res => res.json())
        .then(data => {
            try {
                if (data.ETH.balance > 0) {
                    console.log('=======================')
                    console.log(`True Balance: ${data.ETH.balance} ETH \nAddress: ${data.ETH.address} \nIndex: ${i}`)
                } else {
                    console.log('=======================')
                    console.log(`Index: ${i}`)
                }
            } catch (err) {
                console.log(err, `Index: ${i}`)
            }
            ++i
        })
        .catch(err => console.log(err))
}
setInterval(newCheckEth, 1000)