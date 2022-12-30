<script setup lang="ts">
const route = useRoute();
</script>

<template>
    <ContentDoc :path="`/blog/${route.params.slug}`" />
</template>