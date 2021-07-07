<template>
  <q-layout>
    <q-page-container>
      <q-page padding class="bg-blue-grey-1">
        <div class="row">
          <q-card class="fixed-center col-md-4 col-xs-12">
            <q-card-section>
              <div class="col-md-8 offset-md-2">
                <q-img class="q-mb-md" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Logo_BUMN_Untuk_Indonesia_2020.svg/1200px-Logo_BUMN_Untuk_Indonesia_2020.svg.png"></q-img>
              </div>
              <div class="text-h6 q-mt-lg">
                Account Register
              </div>
              <div class="text-blue-grey-14">Registrasi Beasiswa BUMN</div>
              <q-form
                @submit="onSubmit"
              >
                <q-input
                  v-model="username"
                  label="Username"
                  :rules="[
                    val => val && val.length > 0 || 'Silahkan Masukan Username'
                  ]"
                />
                <q-input
                  v-model="namalengkap"
                  label="Nama Lengkap"
                  :rules="[
                  val => val && val.length > 0 || 'Silahkan Masukan Nama Lengkap Anda'
                  ]"
                />
                <q-select
                  filled
                  v-model="jurusan"
                  :options="optionjurusan"
                  label="Pilih Jurusan"
                />
                <q-input
                  v-model="email"
                  label="Email"
                  :rules="[
                  val => val && val.length > 0 || 'Silahkan Masukan Email Anda'
                  ]"
                />
                <q-input
                  v-model="password"
                  label="Password"
                  type="password"
                  :rules="[
                  val => val && val.length > 0 || 'Silahkan Masukan password anda'
                  ]"
                />
                <div class="q-gutter-md">
                  <q-btn label="Register" type="submit" unelevated color="primary"/>
                  <q-btn label="login" :to="{ name: 'loginpage'}" flat unelevated color="primary"/>
                </div>
              </q-form>
            </q-card-section>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
export default {
  data () {
    return {
      username: null,
      namalengkap: null,
      jurusan: null,
      email: null,
      password: null,
      optionjurusan: [
        'SI',
        'IF',
        'DLL'
      ]
    }
  },
  methods: {
    onSubmit () {
      this.$axios.post('regnpm/insert', {
        username: this.username,
        namalengkap: this.namalengkap,
        jurusan: this.jurusan,
        email: this.email,
        password: this.password
      }).then(res => {
        if (res.data.sukses) {
          this.$showNotif(res.data.pesan, 'positive')
          this.$router.push({ name: 'loginpage' })
        } else {
          this.$showNotif(res.data.pesan, 'negative')
        }
      })
    }
  }
}
</script>
