<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn v-if="!$route.name.includes('Home')" :to="{name: 'Home'}" color="white" dense flat icon="arrow_back"
               label="Home"/>
        <q-toolbar-title class="absolute-center">
          {{ title }}
        </q-toolbar-title>
        <q-btn :to="{name: 'Login'}" color="white absolute-right q-pr-sm" dense flat icon="account_circle" label="Login"
               no-caps/>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import {openURL} from 'quasar'

export default {
  computed: {
    title() {
      return this.$route.name || 'Quasar App'
    }
  },
  methods: {
    openURL
  }
}

</script>
