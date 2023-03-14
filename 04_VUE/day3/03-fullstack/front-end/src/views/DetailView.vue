<template>
  <div>
    <div v-if="loaded" class="detail">
      <img
        src="../../public/nathan-dumlao-6VhPY27jdps-unsplash.jpg"
        alt=""
        class="image"
      />
      <h1>{{ menuName }}</h1>
      <div>{{ menuDescription }}</div>
      <div class="bottom">
        <button @click="remove()">
          삭제
        </button>
      </div>
    </div>
    <div v-else>
      <b-spinner label="Spinning"></b-spinner>
      <h1>로딩중...</h1>
    </div>
  </div>
</template>

<style>
.detail {
  text-align: center;
}
img{
  width: 80vw;
  border: 3px solid rgb(73, 41, 0);
  border-radius: 20px;
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      menuId: -1,
      menuName: "",
      menuDescription: "",
      image_src: "",
      loaded: false,
    };
  },
  async created() {
    this.menuId = this.$route.params.id;
    try {
      const response = await axios.get(
        `http://localhost:8080/api/menus/${this.menuId}`
      );
      this.menuName = response.data.name;
      this.menuDescription = response.data.description;
      this.image_src = response.data.image_src;
      this.loaded = true;
    } catch (error) {
      console.log(error);
    }
  },
  methods:{
    async remove(){
      try{
        await axios.delete(
          `http://localhost:8080/api/menus/${this.menuId}`
        );
        this.$router.push("/");
      } catch (error){
        console.log(error);
      }
    }
  }
};
</script>