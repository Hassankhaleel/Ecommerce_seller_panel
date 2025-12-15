import axios from "axios"
export const Get_PaymentType_Data_api = async ({ type, filter }) => {
    console.log("api called with filer", filter)

    let data = await axios.post('http://localhost:4000/order_api/orders_by_payment_type', {

        payment_type: type,
        payment_filter: filter ?? ""


    })
    return data
}
export const DIspatch_status_updater_api = (dispatch_status, ids) => {
    // console.log(dispatch_status, ids);
    let updated_data = axios.patch('http://localhost:4000/order_api/update_order_status', {
        ids: ids,
        payment_filter_to_Be_change: dispatch_status
    })
    return updated_data
}