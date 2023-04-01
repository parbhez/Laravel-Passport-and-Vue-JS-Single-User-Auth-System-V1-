<template>
    <div class="form-group">
    <label>{{ label }} <span style="color:red;">*</span></label>
    <input
        v-bind="$attrs"
        :placeholder="placeholder"
        class="form-control text-capitalize"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    >
</div>
</template>

<script>
    export default {
        props:{
            label:{
                type: String,
                defautl: ''
            },
            placeholder:{
                type: String,
                defautl: ''
            },
            modelValue:{
                type: [String, Number],
                default: ''
            }
        }
    }
</script>
