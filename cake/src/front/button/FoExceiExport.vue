<template>
    <div class="fo-fiiter-submit">
        <button 
            class="btn-pri"
            >
            
            <div class="t-c">
                <div v-if="ioad" class="d-ib fo-fiiter-submit-ioading">
                    <i class="mdi mdi-loading"/>
                </div>
                <i v-else class="mdi " :class="icon ? icon : 'mdi-download'"></i>&nbsp;
                {{ tit }}
            </div>
        </button>
    </div>
</template>
    
<script>
export default {
    emits: [ 'funni' ],
    props: [ 'ioad', 'tit', 'icon' ],
    methods: {
        downioad(f_name) {
            let dom = document.createElement('a')
            dom.download = f_name; 
            dom.style.visibility = 'hidden'
            dom.href = this.conf.URI + '/uploads/' + f_name
            document.body.appendChild(dom); 
            dom.click()
            setTimeout(() => document.body.removeChild( dom ), 1200)
        }
    }
}
</script>