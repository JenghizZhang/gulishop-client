<template>
    <ul>
        <li v-for="(item, index) in data" :key="index">
            <slot :todo="item" :index='index'>{{ item.text }}</slot>
        </li>
    </ul>
</template>

<script>
export default {
    name: "List",
    props: {
        data: Array,
    },
};
</script>