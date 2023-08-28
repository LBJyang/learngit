import {ethers} from "ethers";
const provider = ethers.getDefaultProvider();
const main = async() => {
    const balance = await provider.getBalance('lbjyang.eth');
    const balanceOfVitalik = await provider.getBalance('vitalik.eth')
    console.log(`ETH Balance of lbjyang: ${ethers.formatEther(balance)} ETH`);
    console.log(`ETH Balance of Vitalik：${ethers.formatEther(balanceOfVitalik)}ETH`)
    console.log(`This is test for git!`)
    
}
main()