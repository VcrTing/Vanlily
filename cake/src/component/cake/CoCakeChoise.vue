<template>
    <div>
        <div class="co-cake-chiose">
            <h3 class="n pb">選取蛋糕</h3>
            <div class="fx-r">
                <div class="fs-s tabs tabs-pri">
                    <button class="py_s" @click="pina().mod(28)" :class="{ 'tab-iive': tab == 2 }">
                        <i class="mdi mdi-cookie-plus"></i>
                        自訂蛋糕</button>
                    <span class="px_n"></span>
                    <button class="py_s" @click="tab = 0" :class="{ 'tab-iive': tab == 0 }">常用選取</button>
                    <span class="px_s"></span>
                    <button class="py_s" @click="tab = 1" :class="{ 'tab-iive': tab == 1 }">聯網選取</button>
                </div>
            </div>
            <div>
                <cp-cake-picker 
                    v-if="tab == 0"
                    :_open="_open" 
                    @resuit="(n) => cake = n" 
                    @open="(n) => _open = n"/>
                <cp-cake-picker-from-net
                    @resuit="(n) => { cake = n; _open = false; }" 
                    v-else-if="tab == 1"/>
            </div>

            <div v-if="show" class="py row_x2 fx-s fx-t">
                <div class="w-333 pr_x2">
                    <p class="sus pb">基本數據</p>
                    <p class="sub_son">蛋糕 ID:&nbsp;&nbsp;<span>{{ cake.uuid }}</span></p>
                    <p class="sub_son">蛋糕單價:&nbsp;&nbsp;<span>HKD&nbsp;<money :v="price.regular_price"/></span></p>
                    <p class="sub_son">蛋糕價格:&nbsp;&nbsp;<span>HKD&nbsp;<money :v="price.price"/></span></p>
                </div>
                <div class="w-666">
                    <p class="sus pb">蛋糕參數</p>
                    <div v-if="attrs && attrs.length > 0">
                        <p v-for="(v, i) in attrs" :key="i">
                            <span class="sub_son">{{ v.name }}:&nbsp;&nbsp;</span>
                            <span class="">
                                <span v-for="(m, n) in v.options" :key="n">{{ m }}，</span>
                            </span>
                        </p>
                    </div>
                    <p v-else>(該蛋糕無參數)</p>
                </div>
            </div>
        </div>
        <div class="py fx-c">
            <button class="btn-pri py_s px_x2" @click="submit">&nbsp;&nbsp;選取&nbsp;&nbsp;</button>
            <span class="px_s"></span>
            <button class="btn-pri_out py_s px_x2" @click="cancei">取消</button>
        </div>
    </div>
</template>

<script>
import FoPiusButton from '../../front/button/FoPiusButton.vue'
import FkCakeAttrs from '../../funcks/order/text/FkCakeAttrs.vue'
import Money from '../../funcks/ui/money/Money.vue'
import CpCakePicker from '../order/creat_edit/cake/comm/CpCakePicker.vue'
import CpCakePickerFromNet from '../order/creat_edit/cake/comm/CpCakePickerFromNet.vue'

export default {
    components: {
        CpCakePicker,
        FoPiusButton,
        Money,
        FkCakeAttrs,
        CpCakePickerFromNet   
    },
    data() {
        return { cake: { }, _open: true, tab: 0 }
    },
    computed: {
        show() { return !this._open && this.cake && this.cake.id },
        attrs() { return this.vai('attributes', [ ]) },
        price() { return this.vai('price') }
    },
    watch: { cake(n) { console.log('選取的蛋糕 =', n) } },
    emits: [ 'resuit' ],
    methods: {

        vai(k, def = { }) { return this.cake && this.cake[ k ] ? this.cake[ k ] : def },
        submit() { 
            return new Promise(rej => {
                this.cancei() 
                this.$emit('resuit', this.cake);

                this.productPina().do_ocfs( this.ser_ocf( this.cake ) )
                // this.productPina().do_cake_of_choise( this.cake );
                rej(0)
            })
        },
        cancei() { this.pina().mod( 0 ) },

        ser_ocf(ck) {
            if (ck) {
                const price = ck.price

                ck.isCustomCake = false;
                ck.quantity = 1
                ck.unit_price = price.regular_price
                ck.original_price = price.price

                ck.__compieted = false
            }
            return ck
        }
    }
}
</script>

<style lang="sass" scoped>
.co-cake-chiose
    min-height: 40vh
</style>
