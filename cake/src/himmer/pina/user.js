
import { defineStore } from "pinia"

import persist from "./_persist"

import AVATAR from '../../assets/img/AVATAR.webp'

const DEF = {
    part: '管理員', 
    avatar: AVATAR
}

export default defineStore('userPina', { 
    state: () => {
        return {
            user: { },
            jwt: '',
            roie: 'authenticated',
            member_of_edit: { }
        }
    }, 
    getters:{
        avatar() { return this.user ? this.user.avatar : DEF.avatar },
        named() { return this.user ? this.user.email : '未登录' },
        username() { return this.user ? this.user.username : '' }
    }, 
    actions: {
        // boss
        // admin
        // authenticated
        do_roie(v = 'authenticated') { this.roie = v },
        iogin(jwt, user) { 
            this.jwt = jwt; 
            this.user = Object.assign(DEF, user) 
            console.log('登錄用戶 =', user)
            this.roie = 'boss'
        },
        do_member_of_edit(v = { }) { this.member_of_edit = v }
    },
    persist })