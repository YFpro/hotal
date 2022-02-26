import instance from "./http";
import {SUCCESS} from "../lib/base";
function  indexRead() {
    return  new Promise((resolve,reject) => {
        instance.get('/api/index/').then(res => {
            if (res.code === SUCCESS) {
                resolve(res)
            }
        }).catch((error) => {
            reject(error)
        })
    })
}
function indexdetail(sid) {
    return  new Promise((resolve,reject) => {
        instance.get('/api/detail/'+sid).then(res => {
            if (res.code === SUCCESS) {
                resolve(res)
            }
        }).catch((error) => {
            reject(error)
        })
    })
}
function indexlist(params) {
    return  new Promise((resolve,reject) => {
        instance.get('/api/lists/',{params}).then(res => {
            if (res.code === SUCCESS) {
                resolve(res)
            }
        }).catch((error) => {
            reject(error)
        })
    })
}
function useradd(data) {
    return  new Promise((resolve,reject) => {
        instance.post('/api/user/',data).then(res => {
            if (res.code === SUCCESS) {
                resolve(res)
            }
        }).catch((error) => {
            reject(error)
        })
    })
}
function orderadd(data) {
    return  new Promise((resolve,reject) => {
        instance.post('/api/orders/',data).then(res => {
            if (res.code === SUCCESS) {
                resolve(res)
            }
        }).catch((error) => {
            reject(error)
        })
    })
}
function userlogin(data){
    return  new Promise((resolve,reject) => {
        instance.post('/api/login/',data).then(res => {
            if (res.code === SUCCESS) {
                resolve(res)
            }else {
                resolve(res)
            }
        }).catch((error) => {
            reject(error)
        })
    })
}
function userCollection(params) {
    return  new Promise((resolve,reject) => {
        instance.get('/api/user/',{params}).then(res => {
            if (res.code === SUCCESS) {
                resolve(res)
            }
        }).catch((error) => {
            reject(error)
        })
    })
}
function initOrder(params) {
    return  new Promise((resolve,reject) => {
        instance.get('/api/orders/',{params}).then(res => {
            if (res.code === SUCCESS) {
                resolve(res)
            }
        }).catch((error) => {
            reject(error)
        })
    })
}

export {indexRead,indexdetail,useradd,userlogin,indexlist,userCollection,orderadd,initOrder}