export const objectValueByKey = {
    methods: {
        /* Get object value based on given string key reference */
        getObjValueByKey(dataObj, key) {
            key = key.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
            key = key.replace(/^\./, ''); // strip a leading dot
            var arr = key.split('.');
            for (var i = 0, n = arr.length; i < n; ++i) {
                var k = arr[i];

                if (dataObj[k] == null || dataObj[k] == undefined) {
                    return '';
                }

                if (k in dataObj) {
                    dataObj = dataObj[k];
                } else {
                    return;
                }
            }
            return dataObj;
        }
    }
}