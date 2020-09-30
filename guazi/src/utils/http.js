/*
 * @Author: your name
 * @Date: 2020-09-30 09:28:17
 * @LastEditTime: 2020-09-30 09:37:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \guazi\src\utils\http.js
 */
import axios from "axios"
axios.defaults.timeout = 5000

export default {
    get:function(url,params={}){
        return new Promise((resolve,reject)=>{
            axios.get(url,{
                params
            })
            .then(response=>{
                resolve(response.data)
            })
            .catch(err=>{
                reject(err)
            })
        })
    },
    post:function(url,data){
        return new Promise((resolve,reject)=>{
            axios.post(url,data)
            .then(response=>{
                resolve(response.data)
            })
            .catch(err=>{
                reject(err)
            })
        })
    }
}

