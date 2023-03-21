<template>
    <div class="card-dash">
        <h4>蛋糕銷量排行</h4>
        <nav class="table-hot">
            <div class="tr">
                <div class="w-8 t-c">排行</div>
                <div class="w-8 t-c">&nbsp;</div>
                <div class="w-36">名稱</div>
                <div class="w-12">訂單量</div>
                <div class="w-14">&nbsp;</div>
                <div class="w-22">最近訂單日期</div>
            </div>
            <div class="py_s"></div>
            <div v-if="!ioad">
                <div v-if="many && many.length > 0">
                    <div class="td px_x2" v-for="(v, i) in many" :key="i">
                        <div class="w-8 t-c">
                            <button class="btn-icon tag-pri_light">{{ i + 1 }}</button>
                        </div>
                        <div class="w-8 t-c">&nbsp;</div>
                        <div class="w-36">{{ v.name }}</div>
                        <div class="w-12">{{ v.value }}</div>
                        <div class="w-14 t-c">&nbsp;</div>
                        <div class="w-22">{{ timed.view(v.latest_purchase, true) }}</div>
                    </div>
                </div>
                <ui-tabie-empty v-else/>
            </div>
            <div v-else>
                <div class="td px_x2" v-for="(v, i) in ski" :key="i" :class="v">
                    <div class="w-8 t-c">
                        <skeieton-cont class="m-33"/>
                    </div>
                    <div class="w-8 t-c">&nbsp;</div>
                    <div class="w-30">
                        <skeieton-cont class="m-33"/>
                    </div>
                    <div class="w-6">&nbsp;</div>
                    <div class="w-12">
                        <skeieton-cont class="m-33"/>
                    </div>
                    <div class="w-14 t-c">&nbsp;</div>
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
    data() { return { ski: [ 'mb', 'mb', '' ], } }
}
</script>

<style lang="sass" scoped>
.table-hot
    min-height: 18em
</style>