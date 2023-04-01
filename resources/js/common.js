import axios from 'axios';

export default {
    data() {
        return {

        }
    },
    methods: {
        async callApi(method, url, dataObj) {
            try {
                return await axios({
                    method: method,
                    url: url,
                    data: dataObj
                });
            } catch (error) {
                return error.response;
            }
        },
        info(desc, title = 'Hey') {
            this.$Notice.info({
                title: title,
                desc: desc ? desc : 'Here is the info notification description.'
            });
        },
        success(desc, title = 'Great!') {
            this.$Notice.success({
                title: title,
                desc: desc ? desc : 'Here is the success notification description.'
            });
        },
        warning(desc, title = 'Opps!') {
            this.$Notice.warning({
                title: title,
                desc: desc ? desc : 'Here is the warning notification description.'
            });
        },
        error(desc, title = 'Opps!') {
            this.$Notice.error({
                title: title,
                desc: desc ? desc : 'Here is the error notification description.'
            });
        },
        swr(desc = 'Something Went Wrong! please try again.', title = 'Opps!') {
            this.$Notice.error({
                title: title,
                desc: desc ? desc : 'Here is the sometime wrong notification description.'
            });
        },

        resetForm(data) {
            data = {}
        },

    }
}