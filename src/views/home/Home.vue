<template>
<div>
 <div id="home">
  <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  <home-swiper :banners="banners"/>
   <recommend :recommends="recommends"/>
   <feature/>
 </div>
</div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar';
  import HomeSwiper from './childComps/HomeSwiper'
  import Recommend from './childComps/Recommend'
  import Feature from './childComps/Feature'

  import {getHomeMultidata} from '../../network/home';


  export default {
    name: "Home",
    data(){
      return {
        banners:[],
        recommends:[]
      }
    },
    components:{
      NavBar,
      HomeSwiper,
      Recommend,
      Feature
    },
    created(){
      getHomeMultidata().then(res => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }

  .home-nav{
    background-color: var(--color-tint);
    color: white;
    font-size: 18px;

    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    z-index: 9;
  }
</style>
