import React from "react";

const NavBar = ({ accounts, setAccounts }) => {
   const isConnected = Boolean(accounts[0]);

   async function connectAccount() {
      if(window.ethereum) {
         const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
         });
         setAccounts(accounts);
      }
   }

   return (
      <div>
      {/* Left side - social media icons */}
      <div>Facebook</div>
      <div>Twitter</div>
      <div>Instagram</div>

      {/* Right side - Sections and connect to metamask button */}
      <div>About</div>
      <div>Mint</div>
      <div>Team</div>

      {/* Connect */}
      {/* Check if is connected */}
      {isConnected ? (
         <p>Connected</p>
      ) : (
         // run the connectAccount function
         <button onClick={connectAccount}>Connect</button>
      )}
      </div>
   );
};

export default NavBar;