<template>
    <div>
        <button class="btn-pri_out py_n px_x3" @click="$emit('cancie')">返回</button>
        <span class="px_s"></span>
        <fo-submit class="py_n px_x3" @click="$emit('save')" :msg="msg" :tit="'儲存'"/>
    </div>
</template>

<script>
import FoSubmit from './FoSubmit.vue'
export default {
    components: { FoSubmit },
    emits: [ 'save', 'cancie' ],
    props: [ 'msg' ]
}
</script>