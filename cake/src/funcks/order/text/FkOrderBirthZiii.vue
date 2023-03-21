<template>
  
    <div class="fx-l fx-t">
        <div>
            <p>生日字粒：</p>
        </div>
        <div class="pl_x2">
            <p>名字字粒：{{ birth_txt }}</p>
            <p>底盤字粒：{{ bottom_txt }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        birth_txt: String,
        bottom_txt: String
    }
}
</script>

<style>

</style>