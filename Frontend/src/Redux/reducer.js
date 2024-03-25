
const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    options:[],
    likes:[]
  }

export const reducer = (state=initialState,{type, payload})=>{
    switch (type) {
        case "product_request":{
            return {...state, isLoading:true}
        }               
        case "product_success":{
            return {...state, isLoading:false, products: payload}
        }
        case "product_error":{
            return {...state, isLoading:false, isError:true}
        }
        case "option_success":{
            return {...state, isLoading:false, options: payload}
        }
        case "getlikes":{
            return {...state, isLoading:false,likes: payload}
        }
        default:
            return state;
    }
}