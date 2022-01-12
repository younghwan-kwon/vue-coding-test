<template>
  <div class="photo-list-wrap">
    <div class="photo-list">
      <div class="item">
        <img class="preview" src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_150.jpg">
        <div class="name">고양이1</div>
      </div>
      <div class="item">
        <img class="preview" src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_150.jpg">
        <div class="name">고양이2</div>
      </div>
      <div class="item">
        <img class="preview" src="https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_150.jpg">
        <div class="name">고양이3</div>
      </div>
      <div class="item">
        <img class="preview" src="https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_150.jpg">
        <div class="name">고양이4</div>
      </div>
    </div>
    <div class="tools">
      <a href="#" class="previous">&laquo; Previous</a>
      <a href="#" class="next">Next &raquo;</a>
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
.photo-list-wrap {
  margin: 20px;
  padding: 20px;
  border: 1px dotted black;
}
.photo-list {
  display: inline-block;
  width: 100%
}
.item {
  width: 300px;
  height: 240px;
  float: left;
  margin: 10px;
}
.preview {
  width: 300px;
  height: 200px;
}
.name {
  width: 300px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.tools {
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.previous {
  color: black;
  float: left;
}
.next {
  color: black;
  float: right;
}
</style>
