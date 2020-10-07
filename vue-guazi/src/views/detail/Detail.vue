<template>
  <div class="container">
    <div class="main">
      <DetailSwipe></DetailSwipe>
      <DetailContent></DetailContent>
    </div>
    <DetailBottom></DetailBottom>
  </div>
</template>

<script>
import DetailTop from "@/views/detail/DetailTop";
import DetailSwipe from "@/views/detail/DetailSwipe";
import DetailContent from "@/views/detail/DetailContent";
import DetailBottom from "@/views/detail/DetailBottom";

export default {
  name: "Detail",
  data() {
    return {
      id: this.$route.params.id
    }
  },
  components: {
    DetailTop,
    DetailSwipe,
    DetailContent,
    DetailBottom
  },
}
</script>

<style lang="stylus" scoped>
.main
  height 90%
  overflow-y scroll

.container
  position relative
  overflow-y scroll
  height 100%
</style>