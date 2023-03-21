<template>
    <work-board-wrapper class="t-c" :pk="'tr'">
        <div class="work-board-tr" v-for="(v, i) in companys" :key="i">{{ v.txt }}</div>
    </work-board-wrapper>
</template>

<script>
import WorkBoardWrapper from '../comm/WorkBoardWrapper.vue'
export default {
    components: { WorkBoardWrapper },
    props: [ 'companys' ],
}
</script>