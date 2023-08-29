import {ethers} from "ethers";
const provider = ethers.getDefaultProvider();
const main = async() => {
    const balance = await provider.getBalance('lbjyang.eth');
    console.log(`ETH Balance of lbjyang: ${ethers.formatEther(balance)} ETH`);
}
main()