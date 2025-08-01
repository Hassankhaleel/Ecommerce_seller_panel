import { Value } from "@radix-ui/themes/dist/cjs/components/data-list";
import { createSlice } from "@reduxjs/toolkit";
export const order_by_pymnt_type_SLICE = createSlice({
    name: 'OrderPymntTypeSlice',
    initialState: {
        value: {

        }
    },
    reducers: {
        getting_data_by_payemny_type: (state, action) => {
            state.value = action.payload
        }
    }
})
export const { getting_data_by_payemny_type } = order_by_pymnt_type_SLICE.actions;
export default order_by_pymnt_type_SLICE.reducer;