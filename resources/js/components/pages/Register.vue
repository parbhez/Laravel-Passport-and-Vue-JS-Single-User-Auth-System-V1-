<template>
    <div class="container py-4">
        <div class="row justify-content-center">
            <div class="col-md-5">
                <div class="card">
                    <div class="card-header">User Registration Form</div>
                    <div class="card-body">
                        <form @submit.prevent="register">
                            <div class="mb-3">
                                <label for="name" class="form-label"

                                    >Name</label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="name"
                                    v-model="form.name"
                                    placeholder="Name"
                                />
                            </div>

                            <div class="mb-3">
                                <label for="email" class="form-label"

                                    >Email</label
                                >
                                <input
                                    type="email"
                                    class="form-control"
                                    id="email"
                                    v-model="form.email"
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
                                    v-model="form.password"
                                    placeholder="Password"
                                />
                            </div>
                            <div class="text-end">
                                <button type="submit" class="btn btn-primary">
                                    Register
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
            form: this.initForm(),
        };
    },

    methods:{
        register(){
            this.$store.dispatch('register', this.form)
            .then((response)=>{
                this.success(response.message);
                this.$router.push({
                    name: "Login"
                });
            })
            .catch((error)=>{
                if(error.response.data.errors){
                    for(const[k,v] of Object.entries(error.response.data.errors)){
                    this.error(v);
                }}
            })
        },
        initForm(){
            return {
                name: "",
                email: "",
                password: "",
            }
        },
    }
};
</script>
