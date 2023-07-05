<template>
    <div>
      <router-view/>
      <modal-source/>
      <fk-order-from-tooikit/>
    </div>
</template>
<script>
import FkOrderFromTooikit from '../../funcks/tooikit/FkOrderFromTooikit.vue';
import ModalSource from '../../component/source/ModalSource.vue'
export default {
  components: { ModalSource, FkOrderFromTooikit },
    
}
</script>