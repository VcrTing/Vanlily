<template>
  
</template>

<script>
export default {
    computed: {
        user() { return this.userPina().user }
    },
    mounted() {
        this.check()
    },
    methods: {
        check() {
            const u = this.user
            if (u.id && u.email) { } else { this.go('/login') }
        }
    }
}
</script>