<template>
    <div class="post-details">
        <div class="row mb-3">
            <div class="col-auto">
                <router-link to="/" class="btn btn-block btn-info">Go Back</router-link>
            </div>
        </div>
        <div class="card text-white bg-secondary mb-3">
            <div class="card-body">
                <img class="m-auto" :src="image.url" :alt="image.title">
                <h2 class="card-title mt-2 text-uppercase font-weight-bold">{{ post.title }}</h2>
                <p class="card-text">{{ post.body }}</p>
            </div>
        </div>

        <PostComments />
    </div>
</template>

<script>
import axios from 'axios';
import PostComments from '@/views/PostComments.vue';

export default {
    name: 'PostDetails',
    components: {
        PostComments
    },
    data() {
        return {
            id: this.$route.params.id,
            post: [],
            image: []
        }
    },
    created() {
        axios
        .get(`http://jsonplaceholder.typicode.com/posts/${this.id}`)
        .then(res => {
            this.post = res.data
        });

        // fetch images
        axios
        .get(`http://jsonplaceholder.typicode.com/photos/${this.id}`)
        .then(res => {
            this.image = res.data
        })
    },
}
</script>

<style scoped>
    h2 {
        font-size: 2rem;
    }
</style>
