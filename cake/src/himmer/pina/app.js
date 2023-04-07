
import { defineStore } from "pinia"

// import persist from "./_persist"

export default defineStore('pina', { 
    state: () => { return {
        // 0 = 关闭所有 MENU
        // 1 = 打开 主 MENU
        MENU: 0,

        // TD COIIAPSE
        COII_TD: 0,

        // 0 = 关闭 MODAL，1 = 新增来源,
        // 11 = 新增付款记录, 21 = 蛋糕资料, 110 = 公司支出
        // 111 = 员工管理, 115 = 工资发放
        // 120 = 产品对比, 125 = 产品库存,
        // 130 = 材料及其配件
        MODAL: 0,

        // 0 = 非打开，1 = 聊天用户详情面板, 81 = 送貨日期
        PANNER: 0, 

        SEARCH: null
    }}, 
    getters:{
        
    }, 
    actions: {
        mod(m) { this.MODAL = m ? m : 0 },
        menu(m) { this.MENU = m ? m : 0 }, 
        modai(m) { this.MODAL = m ? m : 0 },
        panner(m) { this.PANNER = m ? m : 0 },  
        coii_td(m) { this.COII_TD = m ? m : 0 },
        
        search(m = null) { this.SEARCH = m }
    },
})