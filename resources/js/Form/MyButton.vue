<template>
   
    <button :data-dismiss="dataDismiss" :aria-label="ariaLabel">
        <span v-if="BtnName">{{ BtnName }}</span>
        <span v-else><slot></slot></span>
    </button>
</template>

<script>
    export default {
        props: {
           
        BtnName:{
            type: String,
            default: null
        },
        dataDismiss:{
            type: String,
            default: null
        },
        ariaLabel:{
            type: String,
            default: null
        }
    }
    }
</script>