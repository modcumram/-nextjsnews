/* eslint-disable import/no-anonymous-default-export */
//import http from '../constants/configAxios'

import http from '../constans/configAxios'

// สร้างฟังก์ชันสำหรับการอ่านสินค้าทั้งหมด
const getAllProduct = () => {
    return http.get('/products')
}

export default {
    getAllProduct
}