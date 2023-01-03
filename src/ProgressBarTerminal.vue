<template>
  <div id="load">
  <div class="container">
    
    <div class="loading-bar">
      <div class="percentage" :style="{'width' : percentage + '%'}"></div>
    </div>
    <div>{{ percent }}%</div>
  </div>
  </div>
 <!-- <button v-if="isLoading">Teste</button>
  <a v-if="isLoading" href="CiberSafe/homepage.html" rel="noopener">Vite</a>-->
</template>

<script>
export default {
data: () => {
    return {
      percentage: 0,
      isLoading: false,
    }
    
  },
  computed: {
    percent() {
      return this.percentage.toFixed();
    }
  },
  created() {
    var comeca =setInterval(() => {
      var intval = setInterval(() => {
      if(this.percentage < 100)
        this.percentage += .70;
      else
      clearInterval(intval);
      },10);
    }, 1800)
    
      
  },
  mounted () {
    var ShowBtn = setInterval(() => {
      window.location = '/terminal.html';
      }, 3500)
  }
}
</script>


<style scoped>
@media (max-width: 1200px) {
  
  .loading-bar{
	max-width: 300px;
  }
}
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

#load {
 /* font-family: Arial, Helvetica, sans-serif;*/
 font-family: "Sans-serif";
  font-size: 1rem;
  color: rgb(0, 0, 0);
  width: 100%;
  /*height: 100vh;*/
  /*background: linear-gradient(to bottom, #efefef, #ccc);*/
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  text-align: right;
  font-size: 1.2rem;
  color: rgb(122, 121, 121);
}
/*
.loading-bar {
  position: relative;
  width: 450px;
  height: 15px;
  border-radius: 15px;
  overflow: hidden;
  border-bottom: 1px solid rgb(255, 255, 255);
  border-top: 1px solid rgb(255, 255, 255);
  box-shadow: inset 0 1px 2px rgba(rgb(29, 254, 4)), 
    0 -1px 1px #fff, 0 1px 0 #fff;
}
  .percentage {
    position: absolute;
    top: 1px; left: 1px; right: 1px;
    display: block;
    height: 100%;
    border-radius: 50px;
    background-color: #04ff04;
    background-size: 30px 30px;
    background-image: linear-gradient(135deg, rgba(rgb(0, 146, 0)) 25%, transparent 25%,
      transparent 50%, rgba(green) 50%,
      rgba(green) 75%, transparent 75%,
      transparent); 
    animation: animate-stripes 3s linear infinite;
  } 
*/
.loading-bar {
  position: relative;
  width: 450px;
  height: 15px;
  border-radius: 15px;
  overflow: hidden;
  border-bottom: 1px solid rgb(255, 255, 255);
  border-top: 1px solid rgb(255, 255, 255);
  box-shadow: inset 0 1px 2px rgb(49, 187, 223), rgb(49, 187, 223)
    0 -1px 1px #fff, 0 1px 0 #fff;
}
  .percentage {
    position: absolute;
    top: 1px; left: 1px; right: 1px;
    display: block;
    height: 100%;
    border-radius: 50px;
    background-color: rgb(49, 187, 223);
    background-size: 30px 30px;
    background-image: linear-gradient(135deg, rgba(rgb(49, 187, 223)) 25%, transparent 25%,
      transparent 50%, rgba(rgb(49, 187, 223)) 50%,
      rgba(rgb(49, 187, 223)) 75%, transparent 75%,
      transparent); 
    animation: animate-stripes 3s linear infinite;
  }

@keyframes animate-stripes {
  0% { background-position: 0 0; }
  100% { background-position: 60px 0; }
}

/* Youtube Link
#yt_link{
  position: absolute;
  right: 0;
  left: 0;
  bottom: -200px;
  display: block;
  width: 160px;
  text-align: center;
  color: #fff;
  font-size: 15px;
  text-decoration: none;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 10px;
  margin: 0 auto;
  background-color: red;
  border-radius: 2px;
  animation: showYtLink 1.5s ease 3s forwards;
}

@keyframes showYtLink
{
  0%{ bottom: -200px; }
  100%{ bottom: 20px; }
} */

</style>