<template>
    <div class="fx-s">
        <span class="px_x2"></span>
        <span class="h4">{{ view }}</span>
        <nav class="pl w-89">
            <hr class="hr-deep"/>
        </nav>
    </div>
</template>

<script>
export default {
    props: [ 'timed' ],
    computed: {
        view() {
            let res = '10:00'
            let src = this.timed ? this.timed : ''
            src = src.split(' ')
            if (src) {
                src.map(s => {
                    if (s.startsWith('(')) {
                        const _s = s.split('(')
                        res = (_s && _s.length > 0 ) ? _s[1] : '10:00'
                    }
                })
            }
            return res
        }
    }
}
</script>