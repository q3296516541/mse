<template>
	<div>
        <ul>
        	<li v-for="(res,index) in arr">
                <router-link :to="{name:'box',params:{index:index,res:res}}">我的内容是{{res}}位置第{{index}}个</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                arr:["一只羊","两只羊","三只羊","四只羊"]
            }
        },
        created(){
            this.$store.state.arr="213";
        }
    }
</script>

<style>
</style>
