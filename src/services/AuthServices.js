import http from '../constans/configAxios'

const login = (data)=>{
    return http.post("/login",data)

}

export default {
    login
}