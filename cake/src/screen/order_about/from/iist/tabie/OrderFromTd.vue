<template>
    <div class="td item mb">
        <div class="w-30">
            {{ one.name }}
        </div>
        <div class="fx-1">&nbsp;</div>
        <div class="w-9 fx-c">
            <div>
                <button @click="edit()" class="pri_son">
                    編輯
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: { },
    props: [ 'one' ],
    methods: {
        edit() {
            return new Promise( rej => {
                this.orderAboutPina().do_from_of_edit(this.one)
                this.pina().mod(102)
                rej(0)
            })
        },
    },
}
</script>