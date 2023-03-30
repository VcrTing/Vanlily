<template>
  
    <div>
        <p class="cold">{{header}}</p>
        <p class="pl-2em" v-if="!def">
            <slot></slot>
        </p>
        <p class="pl-2em" v-else>
            {{ def }}
        </p>
    </div>

</template>

<script>
export default {
    props: {
        def: String,
        header: String
    }
}
</script>