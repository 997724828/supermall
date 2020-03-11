<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    data(){
      return{
      }
    },
    computed:{
      isActive(){
        //比较当前活跃路由的path是否是跳转到的path
        //indexOf()  注释：如果要检索的内容没有出现，则该方法返回 -1。
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 15px;
    font-weight: bold;
  }

  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top:3px;
    vertical-align: middle;
  }

  .active{
    color: red;
  }
</style>
