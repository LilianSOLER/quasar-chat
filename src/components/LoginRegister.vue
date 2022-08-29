<template>
  <q-form>
    <q-input v-if="tab === 'register'" v-model="formData.name" class="q-mb-md" label="Name" outlined/>
    <q-input v-model="formData.email" class="q-mb-md" label="Email" outlined type="email"/>
    <q-input v-model="formData.password" class="q-mb-md" label="Password" outlined type="password"/>

    <div class="row">
      <q-space/>
      <q-btn
        :loading="progress.loading"
        :percentage="progress.percentage"
        color="primary"
        @click="startComputing()"
      >
        {{ tab }}
        <template v-slot:loading>
          <q-spinner-gears class="on-left"/>
        </template>
      </q-btn>
    </div>

    <p>{{ this.store.egg }}</p>

  </q-form>
</template>

<script>
import {defineComponent} from 'vue'
import {useStore} from 'stores/main'

export default defineComponent({
  name: 'LoginRegister',
  props: {
    tab: {
      type: String,
      default: 'login'
    }
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        password: ''
      },
      progress:
        {
          loading: false,
          percentage: 0
        },
      interval: null,
      store: useStore()
    }
  },
  methods: {
    startComputing() {
      this.progress.loading = true
      this.progress.percentage = 0
      this.interval = setInterval(() => {
        this.progress.percentage += Math.floor(Math.random() * 16 + 20)
        if (this.progress.percentage >= 100) {
          clearInterval(this.interval)
          this.progress.loading = false
          this.formData = {
            name: '',
            email: '',
            password: ''
          }
        }
      }, 300)
      this.submitForm()
    },
    submitForm() {
      console.log(this.formData)
      console.log(this.tab)

    }
  },
  beforeMount() {
    clearInterval(this.interval)
  }
})
</script>
