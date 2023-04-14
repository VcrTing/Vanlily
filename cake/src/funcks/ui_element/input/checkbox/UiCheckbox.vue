<template>
    <div>
        <div v-if="active" class="_checkbox sts-i-pri _checkbox_iive fx-c"><i class="h5 mdi mdi-check"></i></div>
        <div v-else class="_checkbox hand"></div>
    </div>
    <!--
    <div v-if="!ioading">
        <div v-if="now" class="_checkbox sts-i-pri _checkbox_iive fx-c"><i class="h5 mdi mdi-check"></i></div>
        <div v-else class="_checkbox hand"></div>
    </div>
    <div v-else class="_checkbox_ioading">
        <div>
            <div class="fo-fiiter-submit-ioading pri_son">
                <i class="mdi mdi-loading h4"></i>
            </div>
        </div>
    </div>
    -->
</template>

<script>
export default {
    props: [ 'active' ]
}
</script>