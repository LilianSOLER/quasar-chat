<template>
  <q-page class="flex column">
    <div v-for="message in messages" :key="message.userId" class="q-pa-md column col">
      <q-chat-message
        :name="userName(message.userId)"
        :sent="sent(message.userId)"
        :text="[message.text]"
        avatar="https://cdn.quasar.dev/img/avatar4.jpg"
        stamp="7 minutes ago"
      />
    </div>

    <q-footer elevated>
      <q-toolbar>
        <q-input v-model="newMessage" bg-color="white" class="full-width" dense label="Send a message" outlined rounded>
          <template v-slot:before>
            <q-avatar>
              <img alt="Profile picture" src="https://cdn.quasar.dev/img/avatar5.jpg">
            </q-avatar>
          </template>
          <template v-slot:after>
            <q-btn color="white" dense flat icon="send" round v-on:click="sendMessage"/>
          </template>
        </q-input>
      </q-toolbar>
    </q-footer>

  </q-page>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  data() {
    return {
      newMessage: '',
      userId: 1,
      messages: [
        {
          userId: 1,
          text: 'Hello'
        },
        {
          userId: 2,
          text: 'Hi'
        },
        {
          userId: 1,
          text: 'How are you?'
        },
        {
          userId: 2,
          text: 'I am fine'
        },
        {
          userId: 1,
          text: 'And you?'
        },
        {
          userId: 2,
          text: 'I am fine too'
        },
        {
          userId: 1,
          text: 'Nice to meet you'
        },
        {
          userId: 2,
          text: 'Nice to meet you too'
        }
      ]
    }
  },
  methods: {
    userName(otherUserId) {
      return otherUserId === this.userId ? 'Me' : 'She/He'
    },
    sent(otherUserId) {
      return otherUserId === this.userId
    },
    sendMessage() {
      this.messages.push({
        userId: this.userId,
        text: this.newMessage
      })
      this.newMessage = ''
    }
  },

})
</script>
