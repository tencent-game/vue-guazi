import axios from 'axios'



export default {
  
    get:function(url,params={}){
        return new Promise((res,rej)=>{
            axios.get(url,{
                params:params
            })
            .then(response=>{
                res(response.data)
            })
            .catch(err=>{rej(err)})
        })
    },
    post:function(url,data){
        return new Promise((res,rej)=>{
            axios.post(url,data)
            .then(response=>{
                res(response.data)
            },err=>{
                rej(err)
            })
        })
    }
}