<template>
  <div class='dd' v-loading.fullscreen.lock='isLoading'>
    <el-row>
      <el-col :span='24'>
        <div class='grid-content bg-purple-dark'>TI9参赛队伍</div>
      </el-col>
    </el-row>
    <el-card :key='index' class='card' v-for='(item,index) in teams'>
      <div class='clearfix' slot='header'>
        <img :src='item.logo_url' class='logo' width='40px' />
        <span class='name'>{{item.team_name}}</span>
      </div>
      <div
        :key='index2'
        class='text item'
        v-for='(item2,index2) in players[parseInt(item.id)-1]'
      >{{item2.name}}</div>
    </el-card>
  </div>
</template>

<script>
import vue from 'vue'
export default {
  name: 'mainpage',
  data() {
    return {
      teams: [],
      players: [],
      isLoading: false
    }
  },
  methods: {},
  components: {},
  created() {
    this.isLoading = true
    this.$http.get(window.siteUrl + 'teams').then(res => {
      this.teams = res.data
      this.$http.get(window.siteUrl + 'players').then(res => {
        this.players = res.data
      })
      this.isLoading = false
    })
  }
}
</script>

<style>
.dd {
  display: block;
  margin: auto;
}
.card {
  position: relative;
  display: inline-block;
  width: 235px;
  margin: 10px 10px;
}
.el-card__header {
  color: white;
  clear: both;
  background-color: #cc2222;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  width: 40%;
  text-shadow: 2px 2px 5px black;
  font-size: 1.2em;
}
.clearfix {
  overflow: hidden;
}
.name {
  font-size: 1.2em;
  font-weight: bold;
}
.logo {
  position: absolute;
  width: 40px;
  right: 10px;
  top: 10px;
  transform: rotate(-15deg);
}
.text {
  font-size: 1.1em;
}
</style>
