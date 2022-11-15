<template>
    <div class="d-ib">
        <span v-if="_is_pay">
            已付
        </span>
        <span v-else class="sts-err">
            未付
        </span>
    </div>
</template>
<script>
export default {
    props: [
        '_is_pay',
        '_mode'
    ]
}
</script>