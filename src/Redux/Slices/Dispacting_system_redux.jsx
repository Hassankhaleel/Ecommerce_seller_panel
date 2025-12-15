import { Value } from "@radix-ui/themes/dist/cjs/components/data-list";
import { createSlice } from "@reduxjs/toolkit";
export const Dispacting_system_redux_SLice = createSlice({
    name: 'Dispacting_system_redux_SLice',
    initialState: {
        value: {
            Get_PaymentType_Data: [],

        }
    },
    reducers: {
        Get_PaymentType_Data_Redux: (state, action) => {
            state.value.Get_PaymentType_Data = action.payload;

        },


    }
})
export const { Get_PaymentType_Data_Redux } = Dispacting_system_redux_SLice.actions;
export default Dispacting_system_redux_SLice.reducer;