<template>
    <blockquote v-if="error">{{ error }}</blockquote>
    <div v-if="detail">
        <h4>
            <a :href="detail.url" target="_blank">{{ detail.title }}</a>
        </h4>
        <p>{{ detail.content }}</p>
    </div>
</template>

<script>
import { getArticle } from "@/services/axios";

export default {
    data() {
        return {
            articleId: 3,
            detail: null,
            error: null,
        };
    },
    async created() {
        try {
            this.detail = await getArticle(this.articleId);
        } catch (error) {
            this.error = "API服务异常";
        }
    },
};
</script>
