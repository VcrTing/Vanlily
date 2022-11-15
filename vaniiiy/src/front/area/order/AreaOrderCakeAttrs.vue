<template>
<div>
    <div v-for="(v, i) in attrs" :key="i">
        <p v-for="(m, n) in v" :key="n">
            <span>{{ m.attribute_type_name }}</span>:&nbsp;&nbsp;<span>{{ m.name }}</span>
        </p>
    </div>
</div>
</template>

<script>
export default {
    props: {
        attrs: Array
    }
}
</script>

<style>

</style>