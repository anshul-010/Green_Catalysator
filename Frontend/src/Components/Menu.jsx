import { Box, Image, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getData, getLikes, getOtions } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { Options } from "./Options";
import { Card } from "./Card";

export const Menu = () => {
  const [likeState, setLikeState] = useState(true)
  const [selectTitle, setSelectTitle] = useState("mens-shirts");
  const dispatch = useDispatch();
  const productData = useSelector((store) => store.products);
  const option = useSelector((store) => store.options);
  const likes = useSelector((store)=>store.likes)

  useEffect(() => {
    dispatch(getOtions());
    dispatch(getData(selectTitle));
  }, [selectTitle,likeState]);

  useEffect(()=>{
    getLikes(dispatch)
  },[likeState])
// console.log(like)
  return (
    <Box>
      <header style={{ height: "300px", width: "100w" }}>
        <Image
          src="https://www.munichre.com/content/dam/munichre/marc/images/Cancer-mortality-patterns-in-insured-lives.jpg/_jcr_content/renditions/cropped.3_to_1.jpg./cropped.3_to_1.jpg"
            h="100%"
            w="100%"
          // aspectRatio="5/1"
          objectFit="cover"
          alt=""
        />
      </header>
      <Box p="0px 20px" mt='10px'>
        <Box
          className="select-tag"
          onChange={(e) => setSelectTitle(e.target.value)}
        >
          <Select w="300px">
            <option value="">Select Cetagory</option>
            {option?.map((ele, i) => (
              <Options data={ele} key={i} />
            ))}
          </Select>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns={{base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
          xl: "repeat(4, 1fr)",}}
          gap="5px"
          mt="20px"
        >
          {productData?.map((ele) => (
            <Card data={ele} key={ele.id} likes={likes} likeState={likeState} setLikeState={setLikeState} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
