<template>
    <div>
        <!-- 默认插槽和具名插槽 -->
        <Child>
            <template>
                <p>嘿嘿</p>
            </template>
        </Child>
        <Child>
            <template>
                <p slot="child1">嘿嘿</p>
                <button slot="child2">按钮</button>
            </template>
        </Child>
        <br />
        <br />

        <h2>效果一: 显示TODO列表时, 已完成的TODO为绿色</h2>
        <List :data="todos">
            <template slot-scope="{ todo }">
                <h1
                    :style="{ color: todo.isComplete ? 'lightgreen' : 'black' }"
                >
                    {{ todo.text }}
                </h1>
            </template>
        </List>
        <hr />

        <h2>效果二: 显示TODO列表时, 带序号, TODO的颜色为蓝绿搭配</h2>
        <List :data="todos">
            <template slot-scope="{ todo, index }">
                <h2>
                    <span>{{ index + 1 }}</span
                    >：<span
                        :style="{
                            color: todo.isComplete ? 'blue' : 'lightgreen',
                        }"
                        >{{ todo.text }}</span
                    >
                </h2>
            </template>
        </List>
    </div>
</template>

<script type="text/ecmascript-6">
import List from "./List";
import Child from "./Child.vue";
export default {
    name: "ScopeSlotTest",
    data() {
        return {
            todos: [
                { id: 1, text: "AAA", isComplete: false },
                { id: 2, text: "BBB", isComplete: true },
                { id: 3, text: "CCC", isComplete: false },
                { id: 4, text: "DDD", isComplete: false },
            ],
        };
    },

    components: {
        List,
        Child,
    },
};
</script>
