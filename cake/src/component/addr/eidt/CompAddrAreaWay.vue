<template>
    <panel-inner class="panel-inner-pure" :header="'送貨地區'">
        <template v-slot:cont>
            <div class="fx-l row pt_s">
                <nav v-for="(v, i) in ways" :key="i" class="px_s">
                    <button class="px_x py_t"
                        @click="change(v)"
                        :class="{ 'item-pri_out': now == v.id, 'sub': now != v.id }"
                    >
                        {{ v.txt }}
                    </button>
                </nav>
            </div> 
            <div v-if="mode == 0" class="fx-s pl_x2 pt_x2"> 
                <div class="w-30 pl_x2">
                    <p class="b ">地鐵線路：<span>荃灣線</span></p>
                </div> 
                <div class="w-30 pl_x2">
                    <p class="b ">地鐵站：<span>荔枝角站</span></p>
                </div> 
                <div class="w-30 pl_x2">
                    <p class="b ">地鐵站位置：<span>CD出關口</span></p>
                </div>
            </div>
            <div v-else-if="mode == 1" class="fx-s pl_x2 pt_x2"> 
                <div class="w-30 pl_x2">
                    <ui-input :_class="'b'" :is_err="false" :header="'地鐵線路：'">
                        <input class="input" placeholder="請選擇">
                    </ui-input>
                </div> 
                <div class="w-30 pl_x2">
                    <ui-input :_class="'b'" :is_err="false" :header="'地鐵站：'">
                        <input class="input" placeholder="請選擇">
                    </ui-input>
                </div> 
                <div class="w-30 pl_x2">
                    <ui-input :_class="'b'" :is_err="false" :header="'地鐵站位置：'">
                        <input class="input" placeholder="請輸入">
                    </ui-input>
                </div>
            </div>
        </template>
    </panel-inner>
</template>

<script>
import PanelInner from '../../../funcks/ui/panel/PanelInner.vue'
import UiInput from '../../../funcks/ui_element/input/normal/UiInput.vue'
export default {
  components: { PanelInner, UiInput },
  props: {
      mode: {
          type: Number,
          default: 0
      },
      def: {
          type: Number, default: 1
      }
  },
    data() {
        return {
            now: 1,
            ways: [
                { txt: '自取', id: 1 },
                { txt: '送港鐵站', id: 2 },
                { txt: '樓下交收', id: 3 },
                { txt: '送貨上門', id: 4 }
            ]
        }
    },
    mounted() { this.now = this.def ? this.def : 1 },
    methods: {
        change(v) {
            if (this.mode != 0) { 
                this.now = v.id
            }
        }
    }
}
</script>

<style>

</style>