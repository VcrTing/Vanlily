<template>
    <div class="bod" :class="'bod-' + res_color">
        <div class="fx-s w-unf-p-r">
            <div class="w-40 bod-head">
                {{ header }}
            </div>
            <div class="w-60 t-r bod-head-opera">
                <button class="btn-tiny bg-FFF">检查清单</button>
                &nbsp;
                <button class="btn-tiny bg-FFF">检视</button>
            </div>
        </div>
        <p class="py">
            {{ tit }}
        </p>

        <div>
            <slot name="cont"></slot>
        </div>

        <div class="fx-s fx-b w-unf-p pt_x2">
            <div>
                <slot name="sub"></slot>
            </div>

            <div class="t-r mb-0 pt_s">
                <button v-if="status == 0" class="btn-bod-err">已删除</button>
                <button v-if="status == 1" class="btn-bod-pri">已调配</button>
                <span v-else></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // props: [ 'header', 'tit', '_color' ],
    props: {
        'header': { type: String },
        'tit': { type: String },
        '_color': { type: String, default: 'thin' },
        status: { type: Number, default: -1 }
    },
    data() {
        return {
            colors: [
                'bod-dark',
                'bod-thin',
                'bod-pri',
                'bod-wine',
                'bod-green',
                'bod-cold',
            ]
        }
    },
    computed: {
        res_color() {
            let res = this._color
            // 0 = 已删除， 1 = 已调配， -1 = 无
            res = this.status == 1 ? 'green' : res
            res = this.status == 0 ? 'thin' : res
            return res
        }
    }
}
</script>

<style lang="sass" scoped>
</style>