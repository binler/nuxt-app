<template>
<b-jumbotron header="Bao lâu rồi?">
  <input type="date" v-model="startDay" />
  <h1 class="text-center">{{ diffDays }}</h1>
  <p class="text-center">Ngày</p>
</b-jumbotron>
</template>

<script>

export default {
  data () {
    return {
      startDay: '2015-05-19',
      diffDays: this.getTimeDiff()
    }
  },
  methods: {
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
