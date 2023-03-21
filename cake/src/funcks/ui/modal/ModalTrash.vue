<template>
    <div class="modal" :class="{ 'modal-active': open, 'modal-ciose': !open }">
        <div class="modal-hui" @click="change"></div>
        <div class="modal-center">
            <div>
                <slot>
                    <h4 class="px">提示</h4>
                    <p class="px sub">是否確認刪除?</p>
                    <div class="fx-c pt_x2">
                        <button class="btn-pri py_s px_x2" @click="$emit('trash')">
                            確定
                        </button>
                        <span class="px_s"></span>
                        <button class="btn-pri-out py_s px_x2" @click="change">
                            取消
                        </button>
                    </div>
                </slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: [ '' ],
    emits: [ 'trash' ],
    data() {
        return { def: -1 }
    },
    mounted() { this.def = this.pina().MODAL },
    computed: {
        index() { return this.pina().MODAL },
        open() { return ( this.index <= -200 ) }
    },
    methods: {
        change() { this.mod((this.open != 0) ? 0 : this.def) }
    }
}
</script>