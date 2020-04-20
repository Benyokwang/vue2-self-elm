<template>
  <div class="home">
    <!-- head -->
    <!-- <TopHead class="header">
      <span slot="logo" class="logo" @click="toManManBuy">muaMai</span>
    </TopHead> -->
    <!-- location -->
    <nav class="city">
      <div class="right_location">
        <span>当前定位城市:</span>
        <span>定位不准时,请在城市列表中选择</span>
        <!-- <router-link>
          <div></div>
        </router-link>-->
      </div>
    </nav>
  </div>
</template>

<script>
// import TopHead from "../components/header";

export default {
  name: "Home",
  components: {
    // TopHead
  },
  methods: {
    toManManBuy() {
      this.$route.push("#");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../style/sCommon";
.header .logo {
  left: 1rem;
  @include sc(1rem, #fff);
  @include wh(1rem, 1rem);
  @include ct;
}
.city {
  margin: 1rem 0.5rem;
}
.right_location {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right_location span:nth-child(1) {
  @include sc(1rem, #444);
}
.right_location span:nth-child(2) {
  font-weight: bold;
  @include sc(0.8rem, #888);
}
</style>
