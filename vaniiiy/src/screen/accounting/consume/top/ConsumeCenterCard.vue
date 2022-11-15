<template>
    <div class="card-filter fx-s lh_s_son">
        <div class="w-50 pl_s py_s">
            <nav class="fx-l pt_s">
                <div>
                    <span>{{ year(funn.start) }}</span>
                    <div class="h1">{{ mons(funn.start) }}</div>
                </div>
                <div class="px_x2">
                    <span>&nbsp;</span>
                    <div class="h1 px_x2">=></div>
                </div>
                <div>
                    <span>{{ year(funn.end) }}</span>
                    <div class="h1">{{ mons(funn.end) }}</div>
                </div>
            </nav>

        </div>
        <div class="w-50 py_s">
            <nav class="t-r pt_s">
                <span>公司支出总数</span>
                <div class="h1">
                    HKD&nbsp;
                    <money :v="total"></money>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
import Money from '../../../../funcks/ui/money/Money.vue'
export default {
  components: { Money },
    props: [ 'funn' ],
    computed: {
        total() { return '99986323.49' }
    },
    methods: {
        year(r) { return r ? r.substring(0, 4) : '' },
        mons(r) { return r ? this.view.timed.ser_minut(r) : '' }
    }
}
</script>

<style>

</style>