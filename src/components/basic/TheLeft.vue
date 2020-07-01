 <template>
    <div class="left" >
        <TheAuthor />
        <TheTags/>
        <TheRecommendLinks/>
    </div>
</template>

<script>
import TheAuthor from '@/components/TheAuthor.vue'
import TheTags from '@/components/TheTags.vue'
import TheRecommendLinks from '@/components/TheRecommendLinks.vue'

export default {
  name: 'TheLeft',
    components: {TheAuthor,TheTags,TheRecommendLinks},
    data() {
        return {}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left{
    width: 15%;
    margin-left: 15%;
    margin-top: 2%;
    float: left;
}
.left>div{
    background: #FFFFFF;
}
</style>
