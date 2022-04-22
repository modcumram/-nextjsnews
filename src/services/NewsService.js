/* eslint-disable import/no-anonymous-default-export */
//import http from '../constants/configAxios'
import http from '../constans/configAxios'

// สร้างฟังก์ชันสำหรับการอ่านข่าวทั้งหมด
const getAllNews = () => {
    return http.get('/news')
}

const getNewsById = (id) => {
    return http.get(`/news/${id}`)
}

export default {
    getAllNews,
    getNewsById
}