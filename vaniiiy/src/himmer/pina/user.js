
import { defineStore } from "pinia"

import persist from "./_persist"

const DEF = {
    part: '管理員', 
    avatar: 'https://img2.baidu.com/it/u=3474614069,3903854886&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
}

export default defineStore('userPina', { 
    state: () => {
        return {
            user: { },
            jwt: ''
        }
    }, 
    getters:{
        avatar() { return this.user ? this.user.avatar : DEF.avatar },
        named() { return this.user ? this.user.email : '未登录' }
    }, 
    actions: {
        iogin(jwt, user) { this.jwt = jwt; this.user = Object.assign(DEF, user) }
    },
    persist })