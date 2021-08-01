<template>
    <div>
        <h2>自定义带Hover提示的按钮</h2>
        <el-button type="primary" icon="el-icon-plus" size="mini"></el-button>
        <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
        <el-button type="warning" icon="el-icon-edit" size="mini"></el-button>
        <br />
        <br />

        <HintButton
            type="primary"
            icon="el-icon-plus"
            size="mini"
            title="添加"
        />
        <HintButton
            type="danger"
            icon="el-icon-delete"
            size="mini"
            title="删除"
        />
        <HintButton
            type="warning"
            icon="el-icon-edit"
            size="mini"
            title="修改"
        />
    </div>
</template>

<script type="text/ecmascript-6">
import HintButton from "./HintButton.vue";
export default {
    name: "AttrsListenersTest",
    components: { HintButton },
    methods: {
        test() {},
    },
};
</script>
