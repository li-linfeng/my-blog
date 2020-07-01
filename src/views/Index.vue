<template>
    <div>
        <TheContent />
        <ThePaginator />
    </div>
</template>

<script>
    import ThePaginator from '@/components/ThePaginator.vue'
    import TheContent from '@/components/TheContent.vue'
    export default {
        name: "Index",
        components: {
            ThePaginator,
            TheContent
        },
    }
</script>

<style scoped>

</style>