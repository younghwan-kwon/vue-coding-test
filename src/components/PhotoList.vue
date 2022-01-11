<template>
  <div class="photo-list">
    <div class="item">
      <img class="preview">
      <div class="name"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoList'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.photo-list {
  width: 100%
}
.item {
  width: 300px;
  height: 150px;
  float: left;
}
</style>
