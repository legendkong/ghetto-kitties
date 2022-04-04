import { useState } from "react";
// Package that allows you to connect to blockchain easily; has alot of utility functions, alternative for web3.js, industry standard now
import { ethers, BigNumber } from 'ethers';
import GhettoKittiesNFT from './GhettoKittiesNFT.json';

const GhettoKittiesNFTAddress = "0x887F0e6af249F03Ab8228Dc06Feed7c4e60a059a";

const MainMint = ({ accounts, setAccounts}) => {
   const [mintAmount, setMintAmount] = useState(1);
   const isConnected = Boolean(accounts[0]);

   async function handleMint() {
      if(window.ethereum) {
         // provides a way for Ether to connect to the blockchain
         const provider = new ethers.providers.Web3Provider(window.ethereum);
         // Signs transaction
         const signer = provider.getSigner();
         const contract = new ethers.Contract(
            GhettoKittiesNFTAddress,
            GhettoKittiesNFT.abi,
            signer
         );
         try {
            const response = await contract.mint(BigNumber.from(mintAmount));
            console.log('response', response);
         } catch(err) {
            console.log("error: ", err)
         }
      }
   }

   const handleDecrement = () => {
      if(mintAmount <= 1) return;
      setMintAmount(mintAmount - 1);
   };
   const handleIncrement = () => {
      if(mintAmount >= 3) return;
      setMintAmount(mintAmount + 1);
   };

   return (
      <div>
         <h1>Ghetto Kitties</h1>
         <p>The kitties have been wandering the streets and forming their own hood. Will you be able to befriend one of them? Mint Ghetto Kitties to find out.</p>
         {isConnected ? (
            <div>
               <div>
                  <button onClick={handleDecrement}>-</button>
                  <input type="number" value={mintAmount} />
                  <button onClick={handleIncrement}>+</button>
               </div>
               <button onClick={handleMint}>Mint Now</button>
            </div>
         ) : (
            <p>You must be connected to mint!</p>
         )}  
      </div>
   )
}

export default MainMint;