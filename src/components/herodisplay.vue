<template>
  <div class='dd'>
    <el-card :key='headIndex' class='cardhero' v-for='(headItem,headIndex) in head'>
      <div class='clearfix' slot='header'>
        <span>{{headItem}}</span>
      </div>
      <div :key='dataIndex' class='item' v-for='(dataItem,dataIndex) in resultData[headIndex]'>
        <img
          :src='apiUrl+heroes.filter(function(i){return i.hero_id==dataItem.id;})[0].hero_img_url'
          class='heroAvatar'
          width='60px'
        />
        <span class="digit">{{parseFloat(dataItem[key[headIndex]]).toFixed(2)/1}}</span>
        <div>

        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import vue from 'vue'
export default {
  name: 'herodisplay',
  data() {
    return {
      apiUrl: 'http://api.opendota.com',
      head: [
        '上场次数最多',
        '禁用次数最多',
        '胜率最高',
        '场均人头数最高',
        '场均助攻数最高',
        '场均死亡数最低',
        '场均正补最高',
        '场均xpm最高',
        '单场人头数最高',
        '单场正补数最高'
      ],
      key: [
        'pick_count',
        'ban_count',
        'winrate',
        'avg_kill',
        'avg_assist',
        'avg_death',
        'avg_lh',
        'avg_xpm',
        'max_kill',
        'max_lh'
      ],
      resultData: [{}],
      heroes: [{}],
      heroToDisplay: []
    }
  },
  methods: {},
  components: {},
  created() {
    this.$http.get(window.siteUrl + 'heroes').then(res => {
      this.heroes = res.data
    })
    this.$http.get(window.siteUrl + 'getheroresult').then(res => {
      this.resultData = res.data
      //   for(var i in this.resultData){
      //     let temp = this.resultData[i]
      //     for(var j in temp){
      //       console.log(this.heroes.filter(function(k){return k.hero_id == temp[j].id;}))
      //     }
      // }
    })
  }
}
</script>

<style scoped>

.dd {
  display: block;
  margin: auto;
}
.cardhero {
  display: inline-block;
  width: 235px;
  margin: 10px 10px;
}
.item {
  position: relative;
  padding: 5px 5px;
}
.heroAvater{
  position: absolute;
  display: inline-block;
}
.digit{
    position: absolute;
  display: inline-block;
  top:8px;
  left:120px;
  margin: 0px 2px;
  vertical-align: middle;
  font-size: 1.5em;

}
.el-card__header {
  color: white;
  clear: both;
  background-color: white;
}
</style>
