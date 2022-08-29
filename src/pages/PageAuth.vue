<template>
  <q-page class="flex q-pa-md">
    <q-card class="full-width">
      <q-tabs
        v-model="tab"
        active-color="primary"
        align="justify"
        class="bg-grey-4 text-grey-8"
        dense
        indicator-color="primary"
        narrow-indicator
      >
        <q-tab label="Login" name="login"/>
        <q-tab label="Register" name="register"/>
      </q-tabs>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <login-register :tab="tab"/>
        </q-tab-panel>


        <q-tab-panel name="register">
          <login-register :tab="tab"/>
        </q-tab-panel>
      </q-tab-panels>


    </q-card>
  </q-page>
</template>

<script>
import LoginRegister from "components/LoginRegister.vue";

export default {
  data() {
    return {
      tab: 'login'
    }
  },
  components: {
    'login-register': LoginRegister
  }
}
</script>

