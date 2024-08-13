import {createSlice} from '@reduxjs/toolkit'
const array = []
const ProductSlice = createSlice({
    name : "Products",
    initialState : {
        cartItem : array,
        total : 0
    },
    reducers : {
        addProduct(state,action){
            let isContaine = false;
            if(state.cartItem){
                state.cartItem.map((item)=>{
                    if(item.id == action.payload.id){
                        isContaine = true;
                    }
                })
            }

            if(!isContaine){
                state.cartItem.push(action.payload);
                state.total += action.payload.price;
            }
        },
        addQty(state,action){
            state.cartItem.map((item)=>{
                if(item.id == action.payload.id){
                    item.qty += 1;
                    state.total += item.price;
                }
            })
        },
        removeQty(state,action){
            state.cartItem.map((item)=>{
                if(item.id == action.payload.id){
                    if(item.qty > 1){
                        item.qty -= 1;
                    state.total -= item.price;
                    }
                }
            })
        },
        removeProduct(state,action){
            // console.log("remove product")
            console.log(state.cartItem);
            console.log(action.payload);
            state.cartItem =  state.cartItem.filter((item)=>{
                if(item.id == action.payload.id){
                    state.total -= action.payload.price;
                }
                return item.id != action.payload.id;
            })
        }
    }
})

export const {addProduct,addQty,removeQty,removeProduct} = ProductSlice.actions;
export default ProductSlice.reducer;