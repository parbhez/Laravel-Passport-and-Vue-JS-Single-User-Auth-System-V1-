<template>

    <div>

    <div class="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
        <div class="layout-container">
            <!-- Navbar -->
                <Navbar/>
            <!-- / Navbar -->

            <!-- Layout container -->
            <div class="layout-page">
                <!-- Content wrapper -->
                <div class="content-wrapper">
                    <!-- Menu -->
                         <Sidebar />
                    <!-- / Menu -->

                    <!-- Content -->
                       <router-view></router-view>
                    <!--/ Content -->

                    <!-- Footer -->
                        <Footer />
                    <!-- / Footer -->


                    <div class="content-backdrop fade"></div>
                </div>
                <!--/ Content wrapper -->
            </div>

            <!--/ Layout container -->
        </div>
    </div>

    <!-- Overlay -->
    <div class="layout-overlay layout-menu-toggle"></div>

    <!-- Drag Target Area To SlideIn Menu On Small Screens -->
    <div class="drag-target"></div>

    <!--/ Layout wrapper -->
    </div>
</template>

<script>
import Navbar from '../components/partials/Navbar.vue';
import Sidebar from '../components/partials/Sidebar.vue';
import Footer from '../components/partials/Footer.vue';
  export default {
    components:{
        Navbar,
        Sidebar,
        Footer
    },

    created(){
            if(this.isLoggedIn){
                this.$store.dispatch('getUser', this.id)
                .then((response)=>{
                    //console.log(response)
                })
                .catch((error)=>{
                    console.log(error)
                })
            }
        },

    data(){
            return {
                msg: "Vue",
            }
        },
    computed:{
      loggedIn(){
        return localStorage.getItem('accessToken');
      },
      isLoggedIn(){
                return this.$store.getters.isLoggedIn;
            },

        loggedInUser(){
                return this.$store.getters.getUser;
        },
    }
  }
</script>

