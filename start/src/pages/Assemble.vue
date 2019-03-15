<template>
  <div>
    <vheader></vheader>
    <vcontent>
      <div slot="right" class="right">RIGHT</div>
    </vcontent>
    <content2></content2>
    <container :list="list"/>
  </div>
</template>

<script>
import vheader from "../components/header.vue";
import vcontent from "../components/content.vue";
import content2 from "../components/content2.vue";
import container from "../components/container.vue";

export default {
  components: {
    vheader,
    vcontent,
    content2,
    container
  },
  data() {
    return {
      list: [
        {
          title: "Heading1",
          info:
            "Donec1 id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ",
          btntext: "View details »"
        },
        {
          title: "Heading2",
          info:
            "Donec2 id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ",
          btntext: "View details »"
        },
        {
          title: "Heading3",
          info:
            "Donec3 id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ",
          btntext: "View details »"
        }
      ]
    };
  }
};
</script>

<style>
.right {
  float: right;
  border: 1px solid red;
  padding: 5px 10px;
  cursor: pointer;
}
</style>