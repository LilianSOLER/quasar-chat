<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn v-if="$route.name.includes('Chat')"  :to="{name: 'Home'}"  flat dense color="white" icon="arrow_back" label="Home"/>
        <q-toolbar-title class="absolute-center">
          {{ title }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  computed: {
    title () {
      return this.$route.name || 'Quasar App'
    }
  },
  methods: {
    openURL
  }
}

</script>
