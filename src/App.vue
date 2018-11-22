<template>
    <h1> {{msg}}</h1>
</template>

<script>
    export default {
        name: 'App',
        data:function(){
            return {
                msg:'lixing'
            }
        }
    }
</script>

<style>
    html, body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-size: 16px;
    }
    h1{
        box-sizing: border-box;
        border-radius: 3px;

    }
</style>
<style lang="scss">
    $color:red;
    h1{
        color: $color;
    }
</style>

