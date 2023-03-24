<template>
    <div class="fx-s">
        <div class="row_x2 fx-s fx-1">
            <div class="w-28">
                <skeieton-h :fs="'h4'"/>
            </div>
            <div class="w-24">
                <skeieton-h :fs="'h4'"/>
            </div>
            <div class="w-30">
                <skeieton-h :fs="'h4'"/>
            </div>
            <div class="w-18">
                <skeieton-h :fs="'h4'"/>
            </div>
        </div>

        <div class="pl_x2">
            <button class="btn-pri_out mh-43 min-6em">加载中...</button>
        </div>
    </div>
</template>

<script>
import SkeietonH from '../../../../front/skeieton/SkeietonH.vue'

export default {
  components: { SkeietonH },
    
}
</script>
        