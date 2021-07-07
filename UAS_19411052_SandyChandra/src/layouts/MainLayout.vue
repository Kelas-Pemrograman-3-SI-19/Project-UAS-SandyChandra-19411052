<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-primary">
      <q-toolbar>
        <q-btn
          flat
          round
          icon="menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-space/>
        <q-btn flat round>
          <q-avatar>
            <img src="https://articlebio.com/uploads/bio/2016/01/17/will-smith.jpg">
          </q-avatar>
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section>Profile</q-item-section>
              </q-item>
              <q-separator/>
              <q-item clickable v-close-popup @click="logout()">
                <q-item-section>Logout</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      class="text-white bg-secondary"
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item class="justify-center text-center q-mt-md">
            <div>
              <div class="bg-white">
                <q-card>
                  <q-card-section>
                    <q-img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Logo_BUMN_Untuk_Indonesia_2020.svg/1200px-Logo_BUMN_Untuk_Indonesia_2020.svg.png"></q-img>
                  </q-card-section>
                </q-card>
              </div>
              <div class="text-h4 q-mt-md">Beasiswa BUMN</div>
              <q-avatar class="q-mt-xl" size="120px">
                <img src="https://articlebio.com/uploads/bio/2016/01/17/will-smith.jpg">
              </q-avatar>
              <div class="text-weight-bold q-mt-sm">Halo, {{ $q.localStorage.getItem('datauser').namalengkap}}</div>
              <div class="text-weight-light q-mt-sm">Selamat Datang di Aplikasi Pendaftaran Beasiswa BUMN</div>
            </div>
          </q-item>

          <q-item clickable active-class="active" v-ripple exact class="q-mt-md" :to="{ name: 'dashboard' }">
            <q-item-section avatar>
              <q-icon name="dashboard"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Dashboard</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable active-class="active" v-ripple exact :to="{ name: 'databerkas' }">
            <q-item-section avatar>
              <q-icon name="list"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Data Saya</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable active-class="active" v-ripple exact :to="{ name: 'uploadberkas' }">
            <q-item-section avatar>
              <q-icon name="input"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Upload Berkas</q-item-label>
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    logout () {
      this.$q.localStorage.remove()
      this.$router.push({ name: 'loginpage' })
    }
  }
}
</script>
<style scoped>
.active {
  color: #000000;
  background-color: #fafafa;
  padding-right: 10px;
}
</style>
