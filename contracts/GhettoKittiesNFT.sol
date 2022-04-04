// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

//import contract used for minting (thhe standard contract)
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';

//Allow us to define functions that only the owner can use
import '@openzeppelin/contracts/access/Ownable.sol';

contract GhettoKittiesNFT is ERC721, Ownable {
   
}