<template>
  <q-page class="flex q-pa-md">
    <q-list bordered class="full-width" separator>
      <q-item v-for="user in users" :key="user.id" v-ripple clickable to="/chat">
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ initials(user.name) }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ user.name }}</q-item-label>
          <q-item-label caption lines="1">{{ user.email }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-badge :color="colorBadge(user)" :label="labelBadge(user)" rounded/>
        </q-item-section>
      </q-item>
    </q-list>

  </q-page>
</template>

<script>
const users = [{
  id: 1,
  name: 'Lilian Soler',
  email: 'soler.lilian64@gmail.com',
  online: true
}, {
  id: 2,
  name: 'Lisa Dardonville',
  email: 'lisa.dardonville@gmail.com',
  online: false
}, {
  id: 3,
  name: 'Didier Soler',
  email: 'did_soler@yahoo.fr',
  online: true
}, {
  id: 4,
  name: 'Elodie Dufresnes',
  email: 'elodie.dufresnes@gmail.com',
  online: false
},
  {
    id: 5,
    name: 'Noah Soler',
    email: 'noah.soler@gmail.com ',
    online: true
  }]

export default {
  setup() {
    return {
      users
    }
  },
  methods: {
    initials(name) {
      return name.split(' ')[0].charAt(0).toUpperCase() + name.split(' ')[1].charAt(0).toUpperCase()
    },
    colorBadge(user) {
      return user.online ? 'green' : 'red'
    },
    labelBadge(user) {
      return user.online ? 'Online' : 'Offline'
    }
  }
}
</script>
