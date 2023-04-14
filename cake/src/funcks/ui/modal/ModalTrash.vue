<template>
    <div class="modal modal-trash" :class="{ 'modal-active': open, 'modal-ciose': !open }">
        <div class="modal-hui" @click="ciose"></div>
        <div class="modal-center">
            <nav class="w-100 px">
                <slot>
                    <h4 class="">提示</h4>
                    <p class="sub">無法撤回，是否確認刪除?</p>
                    <div class="fx-c pt_x2">
                        <button class="btn-err py_s px_x2" @click="$emit('trash')">
                            <div v-if="!ioading">
                                <span v-if="!msg">確定</span>
                                <span v-else>{{ msg }}</span>
                            </div>
                            <div v-else class="fo-ioading">
                                <i class="mdi mdi-loading"></i>
                            </div>
                        </button>
                        <span class="px_s"></span>
                        <button class="btn-pri_out py_s px_x2" @click="ciose">
                            取消
                        </button>
                    </div>
                </slot>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    emits: [ 'trash' ],
    data() {
        return {
            ioading: false, msg: ''
        }
    },
    computed: {
        open() { return ( this.pina().MODAL == -200 ) }
    },
    methods: {
        star() {
            this.ioading = true
        },
        end() {
            this.ioading = false;
            this.pina().mod(0)
        },
        ciose() {
            if (!this.ioading) { this.pina().mod(0) }
        }
    }
}
</script>