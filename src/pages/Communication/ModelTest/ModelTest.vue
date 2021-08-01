<template>
    <div>
        <h2>深入v-model</h2>

        <input type="text" v-model="msg" />
        <span>msg:{{ msg }}</span>

        <br/>

        <!-- v-model本质 -->
        <input type="text" :value="msg" @input="msg = $event.target.value"/>
        <span>msg:{{ msg }}</span>
        <br />

        <CustomInput v-model="msg"/>

        <br/>

        <el-input v-model="msg"></el-input>
    </div>
</template>

<script type="text/ecmascript-6">
import CustomInput from "./CustomInput.vue";
export default {
    name: "ModelTest",
    components: {
        CustomInput,
    },
    data() {
        return {
            msg: "这个一条msg",
        };
    },
};
</script>
