<template>
  <h4>{{ state.count }} x 2 = {{ getters.times2 }}</h4>
  <button class="btn btn-success block m-2" @click="inc(1)">
    Inc
  </button>
  <div class="text-success my-2">{{ userState.message }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import counterStore from '@/stores/counter'
import userStore from '@/stores/user'

export default defineComponent({
  setup() {
    const { state, getters, inc } = counterStore
    const { state: userState } = userStore
    return { state, getters, inc, userState }
  }
})
</script>
