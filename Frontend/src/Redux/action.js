import axios from "axios";



export const getOtions = ()=> (dispatch)=> {
    dispatch({type:"product_request"})
  axios.get(`https://dummyjson.com/products/categories`)
    .then((res) => {
    dispatch({type:"option_success",payload:res.data})
    }).catch((error)=>{
        dispatch({type:"product_error"})
    })
};
export const getData = (selectTitle)=> (dispatch)=> {
    dispatch({type:"product_request"})
  axios.get(`https://dummyjson.com/products/category/${selectTitle}`)
    .then((res) => {
    dispatch({type:"product_success",payload:res.data.products})
    }).catch((error)=>{
        dispatch({type:"product_error"})
    })
};

export const AddLikes = (data)=>(dispatch)=>{
  axios.post(`http://localhost:8080/product/like`,data)
 .then((res)=>{
    console.log(res.data)
 }) 
}

export const getLikes = (dispatch)=>{
  axios.get(`http://localhost:8080/product/getlikes`)
  .then((res)=>{
    dispatch({type:"getlikes",payload:res.data.data})
  })

}
