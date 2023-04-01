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
import Navbar from '../partials/Navbar.vue';
import Sidebar from '../partials/Sidebar.vue';
import Footer from '../partials/Footer.vue';
  export default {
    components:{
        Navbar,
        Sidebar,
        Footer
    },
    computed:{
      loggedIn(){
        return localStorage.getItem('accessToken');
      }
    }
  }
</script>
