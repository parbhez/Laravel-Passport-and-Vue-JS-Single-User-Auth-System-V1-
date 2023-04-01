<template>
    <div class="container py-4">
        <div class="row justify-content-center">
            <div class="col-md-5">
                <div class="card">
                    <div class="card-header">User Login Form</div>
                    <div class="card-body">
                        <form @submit.prevent="login">
                            <div class="mb-3">
                                <label for="email" class="form-label"

                                    >Email</label
                                >
                                <input
                                    type="email"
                                    class="form-control"
                                    id="email"
                                    v-model="credential.email"
                                    placeholder="Email"
                                />
                            </div>

                            <div class="mb-3">
                                <label for="password"
                                class="form-label"

                                    >Password</label
                                >
                                <input
                                    type="password"
                                    class="form-control"
                                    id="password"
                                    v-model="credential.password"
                                    placeholder="Password"
                                />
                            </div>
                            <div class="text-end">
                                <button type="submit" class="btn btn-primary">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            credential: {
                email: "admin@gmail.com",
                password: "123456",
            },
        };
    },

    methods:{
        login(){
            this.$store.dispatch('login', this.credential)
            .then((response)=>{
                this.success(response.message);
                this.$router.push({
                    name: "AdminDashboard"
                });
            })
            .catch((error)=>{
                if(error.response.data.errors){
                    for(const[k,v] of Object.entries(error.response.data.errors)){
                    this.error(v);
                }}else{
                    this.error(error.response.data.message);
                }
            })
        }
    }
};
</script>
