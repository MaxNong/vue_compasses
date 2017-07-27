<template>
    <div>
        <div @click="showHideList()" class="toptrans">
            <i :class="[upDown ? 'icon-up' : 'icon-down', 'midpic']"></i>
            <span>{{title}}</span>
            <i class="icon-set midpic flo-right"></i>
        </div>
        <listitem :showHide="showHide" :items="items"></listitem>
    </div>
</template>
<style>

</style>
<script>
    import listitem from '../../component/list/list-item.vue'
    export default {
        props: {
            title: {
                type: String,
                default: ''
            },
            items: {
                type: Array,
                default: []
            }
        },
        data () {
            return {
                showHide: true,
                upDown: false
            }
        },
        components: {listitem},
        methods: {
            showHideList: function () {
                this.showHide = !this.showHide
                this.upDown = !this.upDown
            }
        }
    }
</script>