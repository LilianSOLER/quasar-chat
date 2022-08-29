<template>
  <q-page class="flex">
    <h5>Chat page</h5>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    userId: {
      type: Number,
      required: true
    }
  }

})
</script>
