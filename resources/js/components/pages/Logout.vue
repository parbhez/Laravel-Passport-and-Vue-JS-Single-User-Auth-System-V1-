<template>
    <div>
    </div>
 </template>

<script>
export default {
    name: "Logout",
    created() {
            this.$store.dispatch('logout')
            .then((response)=>{
                //return console.log(response)
               this.success(response.message);
               this.$router.push({
                    name: "Login"
               });
               //console.log(response)
            })
            .catch((error)=>{
                console.log(error);
            })
    },


};
</script>
