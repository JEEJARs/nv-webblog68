<template>
  <div>
    <h1>Get All Users</h1>
     <p><button @click="navigateTo('/user/create')">สร้างผู้ใช้งาน</button></p>
  </div>
</template>

<script>
export default {
    methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
  // Logic จะเขียนตรงนี้
}
</script>

<style scoped>
/* CSS เฉพาะหน้านี้ */
</style>