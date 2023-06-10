const { configureStore } = require("@reduxjs/toolkit");

import cartSlice from "./cartSlice";
/**
 *  if any action happeded -> it dispatces action-> which call reducer function -> which updates slice of store
 * 
 * 
 */
const store=configureStore({
    reducer :{
        cart: cartSlice
    }
});


export default store;