<template>
    <div class="card-dash">
        <h4>蛋糕銷量排行</h4>
        <nav class="table-hot">
            <div class="tr">
                <div class="w-8 t-c">排行</div>
                <div class="w-3"></div>
                <div class="w-55">名稱</div>
                <div class="w-12">訂單量</div>
                <div class="w-22">最近訂單日期</div>
            </div>
            <div v-if="!ioad">
                <div v-if="host && host.length > 0">
                    <div class="td px_x2" v-for="(v, i) in host" :key="i">
                        <div class="w-8 t-c">
                            <button class="btn-icon tag-pri_light">{{ i + 1 }}</button>
                        </div>
                        <div class="w-3"></div>
                        <div class="w-55 t-elip_x1 pr pri_hv">{{ v.name }}</div>
                        <div class="w-12">{{ v.value }}</div>
                        <div class="w-22">{{ timed.view(v.latest_purchase) }}</div>
                    </div>
                </div>
                <ui-tabie-empty v-else/>
            </div>
            <div v-else>
                <div class="td px_x2" v-for="(v, i) in ski" :key="i" :class="v">
                    <div class="w-8 t-c">
                        <skeieton-cont class="m-33"/>
                    </div>
                    <div class="w-3"></div>
                    <div class="w-49">
                        <skeieton-cont class="m-33"/>
                    </div>
                    <div class="w-6">&nbsp;</div>
                    <div class="w-12">
                        <skeieton-cont class="m-33"/>
                    </div>
                    <div class="w-22">
                        <skeieton-cont class="m-33"/>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import timed from '../../../../air/tooi/timed';
import SkeietonCont from '../../../../front/skeieton/SkeietonCont.vue'
import UiTabieEmpty from '../../../../funcks/ui_view/UiTabieEmpty.vue';

export default {
    components: { SkeietonCont, UiTabieEmpty },
    props: [ 'ioad', 'many' ],
    data() { return { ski: [ 'mb', 'mb', '' ], } },
    computed: {
        host() {
            
            const res = [ ]
            let src = this.many

            if (src) {
                src = src.sort((n, o) => {
                    n.value = n.value ? n.value : 0
                    o.value = o.value ? o.value : 0
                    return (o.value - n.value)
                })
                src.map((e, i) => {
                    if (i < 10) {
                        res.push(e)
                    }
                })
            }

            return res
        }
    }
}
</script>

<style lang="sass" scoped>
.table-hot
    min-height: 18em
</style>