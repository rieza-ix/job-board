<template>
    <div class="p-8">
        <h1 class="text-center md:text-4xl text-3xl font-bold py-8">Discover Timeless Opportunities</h1>
        <div class="py-12">
            <SearchBar />
        </div>
        <div class="md:flex px-4 py-12 md:space-x-8 space-y-8 md:space-y-0">
            <Card :cardContent="cardContent" />
        </div>
    </div>
</template>

<script setup>
const cardContent = [
    { title: 'Explore Job Opportunities', description: 'Discover job opportunities perfectly matched to your preferences on our straightforward job posting board.', id: 1 },
    { title: 'Job Seekers and Employers', description: 'Connect with employers offering timeless opportunities through our simple and effective job posting board system.', id: 2 },
    { title: 'Cultivating Your Next Challenge', description: 'Explore into a world of possibilities as you seek out fresh challenges and opportunities to push your limits, igniting a journey of growth and achievement.', id: 3 },
]
</script>