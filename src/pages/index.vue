<template>
  <div class='layout'>
    <el-menu
      :default-active='activeIndex'
      active-text-color='#ffff'
      background-color='#cc2222'
      class='el-menu-demo'
      mode='horizontal'
      router
      text-color='#fff'
    >
      <el-menu-item class='menuItem title' index='/'>dotavisu</el-menu-item>
      <el-menu-item class='menuItem' index='/hero'>英雄</el-menu-item>
      <el-menu-item class='menuItem' index='/team'>战队</el-menu-item>
      <el-menu-item class='menuItem' index='/player'>选手</el-menu-item>
      <el-menu-item class='menuItem' index='/match'>比赛</el-menu-item>
      <span class='discription'>
        <el-divider direction='vertical'></el-divider>实时展现勇士令状预测走向
      </span>
    </el-menu>
    <el-main class='main'>
      <router-view />
    </el-main>
    <el-footer class='footer' height='40px'>
      Established by
      <a href='http://pinkido.lofter.com' style='color:white;' target='_blank'>PinkIDo</a>
      <a href='https://weibo.com/u/3664195607' style='color:white;' target='_blank'>weibo</a>
    </el-footer>
  </div>
</template>

<script>
import vue from 'vue'
import mainpage from '@/components/mainpage'
import herodisplay from '@/components/herodisplay'
import playerdisplay from '@/components/playerdisplay'
import teamdisplay from '@/components/teamdisplay'
import matchdisplay from '@/components/matchdisplay'
export default {
  name: 'index',
  data() {
    return {
      activeIndex: '/'
    }
  },
  methods: {},
  components: {
    mainpage,
    herodisplay,
    playerdisplay,
    teamdisplay,
    matchdisplay
  }
}
</script>
<style>
.el-card__header {
  color: white;
  clear: both;
  background-color: #cc2222;
}
.el-card__body {
  color: white;
  clear: both;
  background-color: #cc2222;
    min-height: 100px;
}
</style>

<style scoped>
.el-card__body {
  color: black;
  clear: both;
  background-color: white;
}
.layout {
  height: auto;
  border: 1px solid #dcdfe6;
  background: #c0c4cc;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.menuItem {
  font-size: 1.2em;
  padding: 0 20px;
  text-shadow: 2px 2px 5px black;
}
.discription {
  float: right;
  margin-right: 20px;
  text-shadow: 2px 2px 5px black;
  color: white;
  line-height: 4em;
  vertical-align: middle;
  font-size: 0.9em;
}
.main {
  height: auto;
}
.footer {
  line-height: 40px;
  vertical-align: middle;
  text-align: center;
  background-color: #cc2222;
}
</style>
