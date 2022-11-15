<template>
    <div>
        <h4>登入信息</h4>
        <div class="pt_s"></div>
        <div class="table table-line">
            <nav class="tr px-0 pt_ipt">
                <div class="w-5"></div>
                <div class="w-28">登入时间</div>
                <div class="w-29">登出时间</div>
                <div class="w-28">IP</div>
                <div class="w-10">系统</div>
            </nav>
            <nav class="td" v-for="(v, i) in items" :key="i">
                <div class="w-5"></div>
                <div class="w-28 pr_s">{{v.time_out}}</div>
                <div class="w-29 pr_s">{{v.time_in}}</div>
                <div class="w-28">{{v.ip}}</div>
                <div class="w-10">{{v.piant}}</div>
            </nav>
        </div>
        <div class="py_s"></div>
        <pagenation class="pagenation-inn" :_big="false"/>
    </div>
</template>

<script>
import Pagenation from '../../../../funcks/ui/pagenation/Pagenation.vue'
export default {
    components: {
        Pagenation           
    },
    data() {
        return {
            items: [
                { time_out: '2022-12-12 12:12:12', time_in: '2022-12-12 12:12:12', ip: '222.112.112.222', piant: 'web' },
                { time_out: '2022-12-12 12:12:12', time_in: '2022-12-12 12:12:12', ip: '222.111.99.222', piant: 'ios' },
                { time_out: '2022-11-12 12:12:12', time_in: '2022-10-12 12:12:12', ip: '99.234.2.44', piant: 'web' },
                { time_out: '2022-11-12 11:12:12', time_in: '2022-10-12 12:12:12', ip: '222.23.23.55', piant: 'ios' },
                { time_out: '2022-11-12 11:12:12', time_in: '2022-10-12 12:12:12', ip: '222.201.1.65', piant: 'ipad' },
                { time_out: '2011-11-12 11:12:12', time_in: '2011-10-12 12:12:12', ip: '22.123.123.122', piant: 'ios' },
            ]
        }
    }
}
</script>

<style>

</style>