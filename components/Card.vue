<template>
    <div v-for="content in cardContent" :key="content.id">
        <div
            class="block h-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 select-none cursor-pointer">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{ content.title }}
            </h5>
            <p class="font-normal text-sm text-gray-700 dark:text-gray-400 py-2">{{ content.description }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    cardContent: Object
})
</script>
