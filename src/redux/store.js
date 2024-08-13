import {configureStore} from '@reduxjs/toolkit'
import ProductSlice from './ProductSlice'

const store = configureStore({
    reducer : {
        Products : ProductSlice
    }
})

export default store;