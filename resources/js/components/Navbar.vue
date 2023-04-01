<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <router-link class="navbar-brand" :to=" {name:'About'} ">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png" alt="Logo" class="w-25">
            </router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" :to="{name:'Home'}"
                            >Home</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" :to="{name:'About'}"
                            >About</router-link
                        >
                    </li>
                    <li class="nav-item" v-if="checkAuthLoggedIn">
                        <router-link class="nav-link active" aria-current="page" :to="{name:'Blog'}"
                            >Blog</router-link
                        >
                    </li>
                    <li class="nav-item" v-if="!checkAuthLoggedIn">
                        <router-link class="nav-link active" aria-current="page" :to="{name:'Login'}"
                            >Login</router-link
                        >
                    </li>
                    <li class="nav-item" v-if="!checkAuthLoggedIn">
                        <router-link class="nav-link active" aria-current="page" :to="{name:'Register'}"
                            >Register</router-link
                        >
                    </li>

                    <li class="nav-item" v-if="checkAuthLoggedIn">
                        <router-link class="nav-link active" aria-current="page" :to="{name:'Logout'}"
                            >Logout</router-link
                        >
                    </li>

                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    computed:{
        checkAuthLoggedIn(){
            return this.$store.getters.loggedIn;
        }
    },

};
</script>

<style scoped>
.w-25 {
    width: 6%!important;
}
</style>
