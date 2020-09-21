<template>
    <div class="post-comments">
        <div class="card text-white bg-dark mb-3" v-for="comment in comments" :key="comment.id">
            <div class="row no-gutters">
                <div class="col-md-2">
                    <img src="@/assets/images/user.png" alt="User" />
                </div>
                <div class="col-md-10">
                    <div class="card-body">
                        <h2 class="card-title text-uppercase font-weight-bold">{{ comment.name }}</h2>
                        <p class="card-text text-secondary">{{ comment.body }}</p>
                        <a class="text-primary" :href="`mailto:${comment.email}`">{{ comment.email }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'PostComments',
    data() {
        return {
            id: this.$route.params.id,
            comments: []
        }
    },
    created() {
        axios
        .get(`http://jsonplaceholder.typicode.com/comments?postId=${this.id}`)
        .then(res => {
            this.comments = res.data
        })
    },
}
</script>

<style>

</style>
