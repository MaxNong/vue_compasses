<template>
    <div>
        <div v-for="item in groomList" class="groom-box">
            <div>
                <h3>{{item.title}}</h3>
            </div>
            <ul>
                <li v-for="list in item.content" class="">
                    <img :src="list.img" alt="">
                    <p>{{list.text}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
  export default {
    data(){
      return {
      }
    },
    props: {
      groomList: {
        type: Array
      }
    }
  }
</script>