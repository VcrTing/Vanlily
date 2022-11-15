<template>
    <div>
        <h4>登入账户</h4>
        <div class="pt_s"></div>
        <div>
            <div class="table table-line mla-panner">
                <nav class="tr px-0 pt_ipt">
                    <div class="w-5"></div>
                    <div class="w-40">邮箱</div>
                    <div class="w-30">用户名称</div>
                    <div class="w-25">电话号码</div>
                </nav>
                <nav class="td" v-for="(v, i) in users" :key="i">
                    <div class="w-5"></div>
                    <div class="w-40">{{v.email}}</div>
                    <div class="w-30">{{v.name}}</div>
                    <div class="w-25">{{v.phone}}</div>
                </nav>
            </div>
        </div>
        <div>
            <div class="table table-line">
                <nav class="tr px-0 pt_ipt">
                    <div class="w-5"></div><div class="w-95">权限</div>
                </nav>
                <nav class="td">
                    <div class="w-5"></div><div class="w-95">
                        <comp-td-roie-edit :pans="{
                    order: true, work: true, customer: true, analysis: true, account: true, member: true, 
                }"/>
                    </div>
                </nav>
            </div>
            <div class="fx-c pt_x2">
                <button class="btn-pri py_s px_x4">编辑</button>
            </div>
        </div>
    </div>
</template>

<script>
import CompTdRoieEdit from '../../../../component/roie/for_td/CompTdRoieEdit.vue'
export default {
  components: { CompTdRoieEdit },
    data() {
        return {
            users: [
                { email: 'yizhangyang@123.com', name: 'yizhang', phone: '7778 9982' },
            ]
        }
    }
}
</script>

<style lang="sass">
.mla-panner
    min-height: 11.5em
</style>