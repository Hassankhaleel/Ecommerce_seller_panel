import axios from "axios"
export const Get_PaymentType_Data_api = async ({ type, filter }) => {
    console.log("api called")

    let data = await axios.post('http://localhost:4000/orders_by_payment_type', {

        payment_type: type,
        payment_filter: filter ?? ""


    })
    return data
}