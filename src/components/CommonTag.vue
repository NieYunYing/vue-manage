<!--
 * @Author: NYY
 * @Date: 2022-08-31 09:51:04
 * @LastEditTime: 2022-08-31 10:50:01
 * @LastEditors: NYY
 * @Description: 
-->
<template>
  <div class="tabs">
    <el-tag 
    v-for="(tag,index) in tags"
    :key="tag.name"
    :closable="tag.name !=='home'"
    :effect="$route.name === tag.name ? 'dark': 'plain'"
    @click="changeMenu(tag)"
    @close="hardleClose(tag,index)"
    size="small" 
    >
    {{tag.label}}
    </el-tag>
  </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default({
  name:'CommonTag',
  data(){
    return{
      
    }
  },
  computed:{
    ...mapState({
      tags:state =>state.tab.tabsList
    })
  },
  methods:{
    ...mapMutations({
      close:'closeTag'
    }),
    changeMenu(item){
      this.$router.push({
        name:item.name
      })
    },
    hardleClose(tag,index){
      const length = this.tags.length -1
      this.close(tag)
      if(tag.name !== this.$route.name){
        return;
      }
      if(index === length){
        this.$router.push({
          name:this.tags[index-1].name
        })
      }else{
        this.$router.push({
          name:this.tags[index].name
        })
      }
    }
  }
})
</script>
<style lang="scss" scoped>
.tabs{
  padding: 20px;
  .el-tag{
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>
