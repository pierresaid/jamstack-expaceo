<script setup lang="ts">
const { data } = await useAsyncData(() => queryContent('/blog').find())
console.log(data.value);

</script>

<template>
    <nav>
        <ul>
            <li>
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li v-for="blog in data">
                <NuxtLink :to="blog._path">{{ blog.title ?? blog._path?.split('/')[1] }}</NuxtLink>
            </li>
        </ul>
    </nav>
    <main>
        <slot></slot>
    </main>
</template>
  