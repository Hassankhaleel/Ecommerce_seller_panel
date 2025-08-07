import { Value } from "@radix-ui/themes/dist/cjs/components/data-list";
import { createSlice } from "@reduxjs/toolkit";
export const order_by_pymnt_type_SLICE = createSlice({
    name: 'OrderPymntTypeSlice',
    initialState: {
        value: {
            payment_typed_data: [],
            filter_stater: { value: "", ts: 0 },
            status_changer: "",
            payment_type: "",
            status_updater: []
        }
    },
    reducers: {
        getting_data_by_payemny_type: (state, action) => {

            state.value.payment_typed_data = action.payload;

        },
        payment_type_reducer: (state, action) => {
            state.value.payment_type = action.payload
        },
        filter_dispatcer_redux: (state, action) => {
            state.value.filter_stater = action.payload
        },
        status_changer_redux: (state, action) => {
            state.value.status_changer = action.payload
        },
        status_updater_reduxx: (state, action) => {
            state.value.status_updater = action.payload
        }
    }
})
export const { getting_data_by_payemny_type, filter_dispatcer_redux, status_changer_redux, payment_type_reducer, status_updater_reduxx } = order_by_pymnt_type_SLICE.actions;
export default order_by_pymnt_type_SLICE.reducer;