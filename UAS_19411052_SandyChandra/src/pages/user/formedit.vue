<template>
  <q-page padding>
    <div class="row q-mb-md col-gutter-md">
      <div class="col-md-12 col-xs-12 col-lg-12">
        <div class="row">
          <div class="col-auto">
            <div class="left blue">
            </div>
          </div>
          <div class="col">
            <q-banner inline-actions class="text-blue-grey-14">
              <div class="text-h6">Edit Berkas</div>
              <div>Edit Data Berkas Persyaratan</div>
            </q-banner>
          </div>
        </div>
      </div>
    </div>
    <q-card>
      <q-card-section class="row">
        <q-form
          @submit="onSubmit()"
          class="q-col-gutter-md q-col-lg-6 col-md-6 col-xs-12"
        >
          <q-input
            filled
            v-model="form.namaberkas"
            label="Nama Berkas"
            hint="Masukan Nama Berkas"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Silahkan Isi Judul Berkas']"
          />
          <q-input
            filled
            v-model="form.tahun"
            label="tahun berkas"
            hint="Masukan Tahun Berkas"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Silahkan Isi Tahun Berkas']"
          />
          <q-input
            filled
            v-model="form.nomor"
            label="nomor berkas"
            hint="Masukan Nomor Berkas"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Silahkan Isi Tahun Berkas']"
          />
          <q-input
            v-model="form.deskripsi"
            label="Deskripsi"
            filled
            type="textarea"
          />
          <q-file
            color="primary"
            filled
            v-model="image"
            accept=".jpg, image/*"
            label="Upload Gambar">
            <template v-slot:prepend>
              <q-icon name="cloud_upload" />
            </template>
          </q-file>

          <div>
            <q-btn label="Submit" type="submit" color="primary"/>
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      form: {
        namaberkas: null,
        tahun: 0,
        nomor: null,
        deskripsi: null
      },
      image: null
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get(`berkas/getbyid/${this.$route.params.id}`)
        .then(res => {
          if (res.data.sukses) {
            this.form = res.data.data
          } else {
            this.$router.push({ name: 'databerkas' })
          }
        })
    },
    onSubmit () {
      const formData = new FormData()
      formData.append('image', this.image)
      formData.append('data', JSON.stringify(this.form))
      this.$axios.put(`berkas/edit/${this.$route.params.id}`, formData)
        .then(res => {
          if (res.data.sukses) {
            this.$showNotif(res.data.pesan, 'positive')
            this.$router.push({ name: 'databerkas' })
          } else {
            this.$showNotif(res.data.pesan, 'negative')
          }
        })
    }
  }
}
</script>

<style scoped>
.left {
  width: 5px;
  height: 100%;
  background-color: #008c75;
}
</style>
