<template>
    <nav class="fx-s px_x2">
        <div class="w-50">
            <div class="hand d-ib anim_htmi_top_menu" @click="menu(1)">
                <i class="mdi mdi-menu h4"></i>
            </div>
        </div>
        <div class="fx-1">
            <div class="fx-r softer" @click="auth">
                <div class="user-name pr ttd hand">
                    {{ iog('權限 = ' + user.roie) }}
                    {{ user.named }}
                </div>
                <img class="user-face hand" :src="user.avatar">
            </div>
        </div>
    </nav>
</template>
<script>

export default {
    computed: {
        user() { return this.userPina() }
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
    transition: all .122s ease-in
    animation: anim_htmi_top_menu .122s ease-in-out
    &:hover
        transform: scale(1.05)

@keyframes anim_htmi_top_menu
    0% 
        opacity: 0
    100%
        opacity: 1
</style>