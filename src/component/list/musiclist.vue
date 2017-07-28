<template>
    <div>
        <ul>
            <li class="undeterminedmus" v-for="item in items">
                <div class="undeterminedmus-left">
                    <span>{{item.musicname}}</span>-
                    <span>{{item.author}}</span>
                </div>
                <div class="undeterminedmus-right">
                    <img src="../../assets/images/atm.png" alt="">
                </div>
            </li>
        </ul>
    </div>
</template>
<style>

</style>
<script>
  import contentCon from '../../constants/contentCon'
  export default {
    props: {
        /* items: {
         type: Array,
         default: []
         }*/
    },
    data () {
      return {
        items: contentCon.playBarList,
      }
    },
    created () {
      console.log(this.items)
    }
  }
</script>