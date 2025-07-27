import express from 'express'
const deliever_status_Api = express.Router()


deliever_status_Api.get('/', (req, res) => {

})
deliever_status_Api.post('/current_status', (req, res) => {
    const deliever_status = req.body
    console.log(deliever_status);
    console.log("______________________________")


})
export default deliever_status_Api;