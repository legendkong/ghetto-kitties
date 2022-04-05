import React from "react";
import { useState, useEffect } from "react";
import { Box, Button, Flex, Input, Text, Image } from '@chakra-ui/react';
import cat1 from './assets/NFTs/cat1.gif';
import cat2 from './assets/NFTs/cat2.gif';
import cat3 from './assets/NFTs/cat3.gif';
import cat4 from './assets/NFTs/cat4.gif';
import cat5 from './assets/NFTs/cat5.gif';

const images = [cat1, cat2, cat3, cat4, cat5];

export default function ImageSwapper() {
   const [currentIndex, setCurrentIndex] = useState(0);

   useEffect(() => {
      const intervalId = setInterval(() => {
            if(currentIndex === images.length - 1) {
               setCurrentIndex(0);
            } 
            else {
               setCurrentIndex(currentIndex + 1);
            }
      }, 500) 
      return () => clearInterval(intervalId);
   }, [])

   return (
      <div>
      <Image src={images[currentIndex]} boxSize="200px" margin="0 5px" />
      </div>
   )  
}
