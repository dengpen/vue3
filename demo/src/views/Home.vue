<template>
  <div class="home">
    <swiper
      :slides-per-view="1"
      :space-between="50"
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>
        <img src="@/assets/logo.png" alt="">
        <div class="text">测试</div>
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/logo.png" alt="">
        <div class="text">测试</div>
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/logo.png" alt="">
        <div class="text">测试</div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = (swiper)=>{
      console.log(swiper);
    };
    const onSlideChange = (swiper)=>{
      console.log(swiper);
    };

    return {
      onSwiper,
      onSlideChange
    }
  }
}
</script>
