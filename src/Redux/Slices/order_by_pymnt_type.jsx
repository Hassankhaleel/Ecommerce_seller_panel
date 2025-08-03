import { Value } from "@radix-ui/themes/dist/cjs/components/data-list";
import { createSlice } from "@reduxjs/toolkit";
export const order_by_pymnt_type_SLICE = createSlice({
    name: 'OrderPymntTypeSlice',
    initialState: {
        value: {
            payment_typed_data: [],
            filter_stater: ""
        }
    },
    reducers: {
        getting_data_by_payemny_type: (state, action) => {

            state.value.payment_typed_data = action.payload;

        },
        filter_dispatcer_redux: (state, action) => {
            state.value.filter_stater = action.payload
        }
    }
})
export const { getting_data_by_payemny_type, filter_dispatcer_redux } = order_by_pymnt_type_SLICE.actions;
export default order_by_pymnt_type_SLICE.reducer;