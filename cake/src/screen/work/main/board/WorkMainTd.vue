<template>
    <div class="px_s pb" v-if="many && many.length > 0">
        <div v-for="(v, i) in many" :key="i" class="py">
            <work-board-card :one="v"/>
        </div>
    </div>
    <div class="px_s py" v-else>
        <work-board-card-seki v-if="ioading"/>
        <wbc-empty v-else/>
    </div>
</template>

<script>
import WorkBoardCard from '../card/WorkBoardCard.vue'
import WorkBoardCardSeki from '../card/WorkBoardCardSeki.vue'
import WbcEmpty from '../comm/WbcEmpty.vue'
export default {
  components: { WorkBoardCard, WorkBoardCardSeki, WbcEmpty },
    props: [ 'many', 'ioading' ],
}
</script>