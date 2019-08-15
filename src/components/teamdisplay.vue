<template>
  <div class='dd'>
    <el-card class='cardteam'>
      <div class='clearfix' slot='header'>
        <span>最终获胜</span>
      </div>
      <div class='item'>CN 加油！</div>
    </el-card>
    <el-card :key='headIndex' class='cardteam' v-for='(headItem,headIndex) in head'>
      <div class='clearfix' slot='header'>
        <span>{{headItem}}</span>
      </div>
      <div :key='dataIndex' class='item' v-for='(dataItem,dataIndex) in resultData[headIndex]'>
        <img
          :alt='dataItem.id'
          :src='teams.filter(function(i){return i.team_id==dataItem.id;})[0].logo_url'
          class='heroAvatar'
          height='40px'
        />
        <span class='digit'>
          <!-- {{parseFloat(dataItem.result).toFixed(2)/1}} -->
          {{(headIndex==1?(parseFloat(dataItem.result).toFixed(2)/1):dataItem.result)}}
          </span>
        <div></div>
      </div>
    </el-card>
  </div>
</template>

<script>
import vue from 'vue'
export default {
  name: 'teamdisplay',
  data() {
    return {
      apiUrl: 'http://api.opendota.com',
      head: [
        '单场人头最高',
        '场均人头最高',
        '单场死亡最低',
        '单场助攻最高',
        '最长比赛获胜',
        '最短比赛获胜',
        '场均时长最长',
        '使用英雄最多',
        '使用英雄最少'
      ],
      resultData: [{}],
      teams: [{}],
      heroToDisplay: []
    }
  },
  methods: {},
  components: {},
  created() {
    this.$http.get(window.siteUrl + 'teams').then(res => {
      this.teams = res.data
    })
    this.$http.get(window.siteUrl + 'getteamresult').then(res => {
      this.resultData = res.data
      // :src='apiUrl+teams.filter(function(i){return i.team_id==dataItem.id;})[0].logo_url'
      // for (var i in this.resultData) {
      //   let temp = this.resultData[i]
      //   for (var j in temp) {
      //     console.log(
      //       this.teams.filter(function(k) {
      //         console.log(k.team_id, temp[j].id)
      //         return true
      //       })
      //     )
      //   }
      // }
    })
  }
}
function imgerr() {
  alert(1)
  var temp = event.srcElement
  temp.src =
    'https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/4.png'
  temp.onerror = null
}
</script>

<style scoped>
.el-card__header{
  background-color: white;
}
.el-card__body{
  background-color: #cc2222;
}
.dd {
  display: block;
  margin: auto;
}
.cardteam {
  display: inline-block;
  width: 235px;

  margin: 10px 10px;
}
.item {
  position: relative;
  padding: 5px 5px;
  /* background-color: #cc2222; */
}
.heroAvater {
  position: absolute;
  display: inline-block;
}
.digit {
  position: absolute;
  display: inline-block;
  top: 8px;
  left: 120px;
  margin: 0px 2px;
  vertical-align: middle;
  font-size: 1.5em;
  height: 2em;
  color: white;
}
</style>
