import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import { AddLikes, getLikes } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";

export const Card = ({ data,likes,likeState,setLikeState }) => {
  // const [likeState, setLikeState] = useState(true)
  const [cardLike, setCardLikes] = useState(0)
  const productData = useSelector((store) => store.products);
  const dispatch = useDispatch()
  function handleLikes(id){
    let data = {id}

    dispatch(AddLikes(data))
    setLikeState(!likeState)
    // setLikeState(!likeState)
    let likeCount = likes.filter((ele)=>ele.productId==data.id)
    console.log(likeCount[0])
    setCardLikes(likeCount[0]?.like)
  }
  
useEffect(()=>{
  let likeCount = likes.filter((ele)=>ele.productId==data.id)
    setCardLikes(likeCount[0]?.like)
},[likeState])

 

  return (
    <Box boxShadow="base" w="300px" color="gray.600"  >
      <Box w="300px" h="400px" borderBottom="1px solid #e2e0e0">
        <Image src={data.images[0]} w="100%" h="100%" />
      </Box>
      <Box  m="5px" >
        <Text>Brand: {data.brand}</Text>
        <Text overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
          Title: {data.title}
        </Text>
        <Text>Price: ₹{data.price}</Text>
        <Text>Discount: {data.discountPercentage}%</Text>
        <Text>Rating: {data.rating}</Text>
        <Box
          borderRadius="20px"
          boxShadow="base"
          w="130px"
          maxW='150px'
          p="10px"
          h="30px"
          mt="10px"
          display="flex"
          justifyContent="space-evenly"
          gap={5}
          cursor='pointer'
        >
          <Flex align="center" gap={2} onClick={()=>handleLikes(data.id)} >
            <ThumbsUp  size={18} />
            {cardLike}
          </Flex>
          <Box borderRight="1px solid #b1b1b1"></Box>
          <Flex align="center" gap={2} onClick={()=>setDislike(dislike+1)} >
            <ThumbsDown size={18} />
            {0}
          </Flex>
        </Box>
        <Center>
          <Button colorScheme="yellow" w="90%" m="10px 5px" color="#ffffff">
            Add To Cart
          </Button>
        </Center>
      </Box>
    </Box>
  );
};
