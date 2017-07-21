<template>
<section>
  <div>
    <h1>Bao lâu rồi em nhỉ?</h1>
    <p class="total-day">{{gettimeover()}}</p>
    <p>Ngày</p>
  </div>
</section>
</template>

<script>

export default {
  methods: {
    gettimeover () {
      let now = new Date()
      let startDay = new Date(2015, 5, 19)
      let offset = now.getTime() - startDay.getTime()
      let totalDays = Math.round(offset / 1000 / 60 / 60 / 24)
      return totalDays
    }
  }
}
</script>
