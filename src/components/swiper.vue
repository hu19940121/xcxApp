<template>
  <div class="swiper">
    <swiper indicator-dots="true" autoplay="true" interval="3000" >
        <swiper-item v-for="(image,index) in list" :key="index">
          <image mode="scaleToFill" :src="'http://'+image.url" alt="" />
          <span class="title">
            {{image.title}}
          </span> 
        </swiper-item>
    </swiper>
  </div>
</template>
<script>
  export default {
    props: ['list'],
    data () {
    },
    mounted () {
    },
    methods: {
  
    }
  }
</script>

<style lang="stylus" scoped>
  .swiper
    width 100%
    height 342rpx
    swiper
      height 100%;
    ._swiper-item
      .title
        position absolute
        bottom 20rpx
        left 40rpx
        display block
        font-size 28rpx
        color white
      image
        width 100%
        height 100%;
</style>