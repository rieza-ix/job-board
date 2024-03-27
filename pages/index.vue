<template>
    <div class="p-8">
        <h1 class="text-center text-4xl font-bold py-4">Discover Timeless Opportunities</h1>
        <div class="flex px-4 py-16 space-x-8">
            <Card :cardContent="cardContent" />
        </div>
    </div>
</template>

<script setup>
const cardContent = [
    { title: 'Accessing Available Jobs', description: 'Seamlessly connect with a myriad of job openings, empowering you to take control of your career path with accessibility and ease.' },
    { title: 'Finding Your Next Adventure', description: 'Explore uncharted territories and unlock thrilling experiences as you navigate through diverse opportunities, ready to embark on your next great adventure.' },
    { title: 'Cultivating Your Next Challenge', description: 'Delve into a world of possibilities as you seek out fresh challenges and opportunities to push your limits, igniting a journey of growth and achievement.' },
]
</script>
