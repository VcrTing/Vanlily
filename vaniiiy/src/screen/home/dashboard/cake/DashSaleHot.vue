<template>
    <div class="card-dash">
        <h4>蛋糕銷量排行</h4>
        <nav class="table-hot">
            <div class="tr">
                <div class="w-8 t-c">排行</div>
                <div class="w-8 t-c">&nbsp;</div>
                <div class="w-36">名稱</div>
                <div class="w-12 t-c">訂單量</div>
                <div class="w-14 t-c">&nbsp;</div>
                <div class="w-22">最近訂單日期</div>
            </div>
            <div>
                <div class="td px_x2" v-for="(v, i) in hots" :key="i">
                    <div class="w-8 t-c">
                        <button class="btn-icon tag-pri_light">{{ v.hot }}</button>
                    </div>
                    <div class="w-8 t-c">&nbsp;</div>
                    <div class="w-36">{{ v.named }}</div>
                    <div class="w-12 t-c">{{ v.num }}</div>
                    <div class="w-14 t-c">&nbsp;</div>
                    <div class="w-22">{{ v.date }}</div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hots: [
                { id: 1, hot: 1, named: '純素番薯蛋糕', num: 12, date: '2022-12-12' },
                { id: 2, hot: 2, named: 'Number Cake', num: 11, date: '2022-02-12' },
                { id: 13, hot: 3, named: '性別提米蛋糕', num: 10, date: '2022-03-12' },
                { id: 4, hot: 4, named: '純素番薯蛋糕', num: 7, date: '2022-04-12' },
                { id: 12, hot: 5, named: '糖皮蛋糕', num: 2, date: '2022-04-11' },
                { id: 19, hot: 6, named: 'Cupcake 杯子蛋糕', num: 12, date: '2022-04-12' },
                { id: 21, hot: 7, named: '純素鮮果 Mousse 蛋糕', num: 9, date: '2022-01-12' },
                { id: 88, hot: 8, named: 'Cupcake 杯子蛋糕', num: 12, date: '2022-04-10' },
            ]
        }
    }
}
</script>

<style>

</style>