<template>
    <nav class="fx-s px_x2">
        <div class="w-50">
            <span class="hand anim_htmi_top_menu" @click="menu(1)">
                <i class="mdi mdi-menu h4"></i>
            </span>
        </div>
        <div class="fx-1">
            <div class="fx-r softer" @click="auth">
                <div class="user-name pr ttd hand">
                    {{ up.named }}
                </div>
                <img class="user-face hand" :src="up.avatar">
            </div>
        </div>
    </nav>
</template>
<script>

export default {
    data() {
        return {
            up: { }
        }
    },
    mounted() {
        this.up = this.userPina()
    },
    methods: {
        auth() { 
            this.$router.push('/login') 
        },
        menu(num) {
            this.pina().menu( num )
        }
    }
}
</script>

<style lang="sass" scoped>
.anim_htmi_top_menu
    animation: anim_htmi_top_menu .12s ease-in-out

@keyframes anim_htmi_top_menu
    0% 
        opacity: 0
    100%
        opacity: 1
</style>