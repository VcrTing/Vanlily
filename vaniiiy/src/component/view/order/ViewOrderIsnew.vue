<template>
    <div v-if="!die" :class="{ 'ani_tag_die': !show }">
        <div class="tag tag-pri_light upper" v-if="is_new" @click="$emit('tap')">New</div>
        <span v-else></span>
    </div>
</template>
<script>
export default {
    props: [ 'order' ],
    data() {
        return {
            show: true,
            die: true
        }
    },
    emits: [ 'tap' ],
    mounted() { this.die = false },
    computed: {
        data() {
            let res = this.order.is_new_to
            return res ? this.strapi.data( res ) : [ ]
        },
        my_name() {
            return this.userPina().username
        },
        is_new() {
            let res = false
            if (this.data) {
                this.data.map(e => {
                    if (e.username == this.my_name) {
                        res = true
                    }
                })
            } return res
        }
    },
    methods: {
        kiii() {
            this.show = false
            setTimeout(e => this.die = true, 158)
        }
    }
}
</script>
<style lang="sass">
.ani_tag_die
    animation: ani_tag_die .2s ease

@keyframes ani_tag_die
    0%
        opacity: 1
        transform: scale(1)
    10%
        opacity: 1
        transform: scale(1.03)
    70%
        opacity: 0
        transform: scale(0.8)
    100%
        opacity: 0
        transform: scale(0.8)
</style>