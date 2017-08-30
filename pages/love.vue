<template>
<b-jumbotron>
  <h1 class="text-center">Bao lâu rồi?</h1>
  <b-form-input v-model="startDay" type="date" value="2013-01-08"></b-form-input>
  <h1 class="text-center">{{ getTimeDiff }}</h1>
  <p class="text-center">Ngày</p>
</b-jumbotron>
</template>

<script>

export default {
  data () {
    return {
      startDay: '2015-05-19'
    }
  },
  computed: {
    // tinh ngay
    getTimeDiff: function () {
      let now = new Date()
      this.startDay = new Date(this.startDay)
      let timeDiff = Math.abs(this.startDay.getTime() - now.getTime())
      let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) - 1
      return diffDays
    }
  }
}
</script>
