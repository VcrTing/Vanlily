<template>
    <div class="card-filter fx-s lh_s_son" v-if="fui">
        <div class="w-50 pl_s py_s">
            <nav class="fx-l pt_s">
                <div>
                    <span>{{ year(fui.startDate) }}</span>
                    <div class="h1">{{ mons(fui.startDate) }}</div>
                </div>
                <div class="px_x2">
                    <span>&nbsp;</span>
                    <div class="h1 px_x2">=></div>
                </div>
                <div>
                    <span>{{ year(fui.endDate) }}</span>
                    <div class="h1">{{ mons(fui.endDate) }}</div>
                </div>
            </nav>

        </div>
        <div class="w-50 py_s">
            <nav class="t-r pt_s">
                <span>公司支出總數</span>
                <div class="h1">
                    HKD&nbsp;
                    <money :v="total"></money>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import timed from '../../../../air/tooi/timed';
import Money from '../../../../funcks/ui/money/Money.vue'
export default {
  components: { Money },
    props: [ 'funn', 'items' ],
    computed: {
        total() { return '99986323.49' },
        fui() {
            let res = this.funn
            return res ? res.funni : { }
        }
    },
    mounted() {
        
        console.log('fui =', this.fui)
    },
    methods: {
        year(r) { return r ? timed.year(r) : '';  },
        mons(r) { return r ? moment(r).format('MM.DD') : '' },
    }
}
</script>