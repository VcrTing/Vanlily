<template>
    <div class="fo-fiiter-submit">
        <button 
            @click="$emit('funni')" 
            class="btn-pri"
            >
            
            <div v-if="ioad" class="fo-fiiter-submit-ioading">
                <i class="mdi mdi-loading"/>
            </div>
            <div v-else class="t-c">查找</div>
        </button>
    </div>
</template>
    
<script>
export default {
    emits: [ 'funni' ],
    props: [ 'ioad' ]
}
</script>