# Ghetto-Kitties :smirk_cat::smoking::city_sunset:
<p align="center">
  <img src="https://github.com/legendkong/ghetto-kitties/blob/master/readmeImages/GhettoKitties.gif">
<p>
<br>
  
Ghetto Kitties is a ***mock WEB 3.0 website*** that enables minting of the Ghetto Kitties NFT.
<br>
<br>
This is a practice project for me to familiarise with the procedures of minting an NFT, deployment of smart contracts, and to recap and improve on front-end development skills. 


## Application code
Front-end framework: [ReactJS](https://reactjs.org/) <br>
Ethereum development environment: [Hardhat](https://github.com/NomicFoundation/hardhat)👷‍♂️ <br>
Smart-contract deployment: [Solidity](https://docs.soliditylang.org/en/v0.8.13/) <br>
Smart-contract library: [OpenZeppelin](https://github.com/OpenZeppelin/openzeppelin-contracts)<br>
Ethereum library: [ethers.js](https://github.com/OpenZeppelin/openzeppelin-contracts) <br>
UI : [Chakra UI](https://chakra-ui.com/)<br>
Build tool: npm


## Two-part project
### Back-end
<li> A smart contract to enable minting of NFT
<li> Deployment of smart contract to test network <br>

### Front-end
<li> Creation of webpage
<li> Styling of components

# Smart contract to enable minting of NFT(s)
<p align="center">
<img src="https://github.com/legendkong/ghetto-kitties/blob/master/readmeImages/solidityFile.PNG"> <br>
  The smart contract is written in GhettoKittiesNFT.sol file located under the Contracts folder. <br>
  </p>
<br>
<br>
<p align="center">
<img src="https://github.com/legendkong/ghetto-kitties/blob/master/readmeImages/solidityFile2.PNG" width="600"> <br>
This is how a smart contract looks like. Since I decided to deploy the NFT on the Ethereum network, I will have to use Solidity. 
  </p>
<br>

  

# Deployment of smart contract
<p align="center">
<img src="https://github.com/legendkong/ghetto-kitties/blob/master/readmeImages/ropsten.PNG" width="200"> <br>
I used the ropsten test network for testing my smart contract. I used the ropsten faucet to send some "fake" Ethereum into my metamask wallet. <br>
  </p>
<br>
<br>
<p align="center">
  <img src="https://github.com/legendkong/ghetto-kitties/blob/master/readmeImages/etherScan.PNG" width="400"> <br
                                                                                                                  
As for the blockchain node provider, I used [infura](https://infura.io/). After deploying your smart contract, you will be able to use [Etherscan](https://etherscan.io/) to trace your contract. <br>
  
  </p>
<br>
<br>
  
# Creation of webpage
I went with ReactJS libary due to it's flexibility and reusability of components. <br>
For the styling, I decided to try out ChakraUI which is a simple and modular component library that gives you the building blocks you need to build your React applications.
  

# To use Ghetto-Kitties
  
  <img src="https://github.com/legendkong/ghetto-kitties/blob/master/readmeImages/step1.PNG" width="800"> <br>
  <li> Step 1 : Connect your metamask wallet by clicking on the connect button at the top right corner of the webpage.
  <br>
  <br>
  <br>
   <img src="https://github.com/legendkong/ghetto-kitties/blob/master/readmeImages/step2.PNG" width="800"> <br>
  <li> Step 2 : You will be able to see the mint and amount to mint button after connecting successfully.
  <br>
  <br>
  <br>  
  <img src="https://github.com/legendkong/ghetto-kitties/blob/master/readmeImages/step3.PNG" width="800"> <br>
  <li> Step 3 : Upon clicking the purchase now button, metamask will reveal the transaction fees and gas fees.
  <br>
  <br>
  <br>  
  <img src="https://github.com/legendkong/ghetto-kitties/blob/master/readmeImages/step4.PNG" width="300"> <br>
  <li> Step 4 : You will be able to see your transaction upon confirmation.
  <br>
  <br>
  <br>
  
   
## Footnotes  
GhettoKittiesNFT deployed to: 0x887F0e6af249F03Ab8228Dc06Feed7c4e60a059a <br>
https://ropsten.etherscan.io/address/0x887F0e6af249F03Ab8228Dc06Feed7c4e60a059a <br>
https://ropsten.etherscan.io/address/0x887F0e6af249F03Ab8228Dc06Feed7c4e60a059a#readContract <br>
Huge thanks to [EdRoh](https://www.youtube.com/channel/UCMoEx7gz7IbJHv733yEi2aA/videos?app=desktop) for the guidance!
