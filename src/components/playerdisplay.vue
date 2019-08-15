<template>
  <div class="dd">
    <el-card class='card' v-for="i in 10" :key="i">
      <div class='clearfix' slot='header'>
        <span>上场次数最多</span>
      </div>
      <div :key='o' class='text item' v-for='o in 4'>{{'列表内容 ' + o }}</div>
    </el-card>
  </div>
</template>

<script>
import vue from 'vue'
export default {
  name: 'playerdisplay',
  data() {
    return {}
  },
  methods: {},
  components: {}
}
</script>

<style>
.dd{
  display: block;
  margin: auto;
}
.card{
  display: inline-block;
  width: 235px;
  margin: 10px 10px;

}
</style>
