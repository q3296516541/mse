<template>
	<div>
        我的位置是在{{$route.params.index}}
        <br>
        我的内容为{{res}}
    </div>
</template>

<script>
export default{
    data(){
        return{
            res:0
        }
    },
    created(){
       this.res=this.$store.state.arr;
        
    }
}
</script>

<style>
</style>
