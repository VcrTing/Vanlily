<template>
    <div>
        <router-view/>
        <modal-source></modal-source>
    </div>
</template>
<script>
import ModalSource from '../../component/source/ModalSource.vue'
export default {
  components: {ModalSource  },
    
}
</script>