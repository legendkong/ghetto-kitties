// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

//import contract used for minting (thhe standard contract)
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';

//Allow us to define functions that only the owner can use
import '@openzeppelin/contracts/access/Ownable.sol';

contract GhettoKittiesNFT is ERC721, Ownable {
   //Storage variables (use sparingly, more storage = higher cost)
   uint256 public mintPrice; //price of mint

   uint256 public totalSupply; //current no. of NFTs that are minted
   uint256 public maxSupply; //max number of NFT in the collection
   uint256 public maxPerWallet; //max NFT a wallet can mint
   bool public isPublicMintEnabled; //Allow minting to be public, owner can toggle true or false
   string internal baseTokenUri; //determine url of which OpenSea can determine where the images are located
   address payable public withdrawWallet; //retrieve funds from wallet;
   mapping(address => uint256) public walletMints; //keep track of how many each wallet has minted

   constructor() payable ERC721('GhettoKitties', 'GK'){
      mintPrice = 0.02 ether;
      totalSupply = 0;
      maxSupply = 1000;
      maxPerWallet = 3;
      //can set withdraw wallet address in this line
   }

   //allows only the owner to call this function(deployer by default)
   function setIsPublicMintEnabled(bool isPublicMintEnabled_) external onlyOwner {
      isPublicMintEnabled = isPublicMintEnabled_;
      //can set isPublicMintEnabled to true or false, if true, go public. if false, nobody can see
   }

   //url where images are located
   function setBaseTokenUri(string calldata baseTokenUri_) external onlyOwner {
      baseTokenUri = baseTokenUri_;
   }

   //function that opensea calls to grab the images, already defined in erc721
   function tokenURI(uint256 tokenId_) public view override returns(string memory){
      require(_exists(tokenId_), 'Token does not exist!');
      return string(abi.encodePacked(baseTokenUri, Strings.toString(tokenId_), ".json"));
   }

   //allow us to withdraw funds to the specified address with withdrawWallet, if success, keep going, if not, 'withdraw failed'
   function withdraw() external onlyOwner {
      (bool success, ) = withdrawWallet.call{ value: address(this).balance}('');
      require(success, 'withdraw failed');
   }

   //Mint function (most important part in the NFT contract), most valuable part of code, need to check properly so people cannot exploit/abuse
   function mint(uint256 quantity_) public payable {
      //check whether public mint is enabled
      require(isPublicMintEnabled, 'minting not enabled');

      //check whether user is inputting correct value
      require(msg.value == quantity_ * mintPrice, 'wrong mint value');
      //check whether supply surpassed maxsupply
      require(totalSupply + quantity_ <= maxSupply, 'sold out');
      //check whether wallet hit max minting limit
      require(walletMints[msg.sender] + quantity_ <= maxPerWallet, 'exceed max wallet');

      //performing the mint
      for(uint256 i = 0; i < quantity_; i++){
         //keep track of our total id
         uint256 newTokenId = totalSupply + 1;
         //Once called, increase the total supply
         totalSupply++;
         //function that exists within ERC721, msg.sender -> address receiving the NFT(person calling the function), latest token id
         _safeMint(msg.sender, newTokenId);

      }
   }
}