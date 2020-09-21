<template>
    <div class="post-list">
        <div class="card text-white bg-dark mb-3" v-for="post in posts" :key="post.id">
            <div class="card-header text-uppercase font-weight-bold">
                <router-link :to="`/post-details/${post.id}`">{{ post.title }}</router-link>
            </div>
            <div class="card-body">
                <p class="card-text">{{ post.body }}</p>
            </div>
        </div>

        <div class="card text-white bg-dark mb-3" v-if="errors && errors.length">
            <div class="card-body">
                <p class="card-text" v-for="(error, index) of errors" :key="index">{{ error.message }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PostList',
    props: ['posts']
}
</script>

<style>

</style>
