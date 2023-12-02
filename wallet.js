const ethers = require('ethers');
const fs = require('fs');

let attempt = 0; 
let wallet;
const regex = /^0x888.*$/;
let isValid = false;

setInterval(() => {
  console.log(`尝试次数:${attempt}`);
}, 10000);

while (!isValid) {

  wallet = ethers.Wallet.createRandom();
  attempt++;

  isValid = regex.test(wallet.address); 

}

const address = wallet.address;
const privateKey = wallet.privateKey;

const content = `
靓号地址: ${address}  
靓号私钥: ${privateKey}
`;

fs.writeFile('wallet.txt', content, err => {
  if (err) {
    console.error(err);
  } else {
    console.log("靓号保存成功!");    
  }  
});