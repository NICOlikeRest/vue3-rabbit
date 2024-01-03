import { getCategoryAPI } from '@/apis/category';
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';

export function useCategory () {
    const categoryData = ref({})

    const route = useRoute()

    const getCategory = async (id = route.params.id) => {
        const res = await getCategoryAPI(id)
        categoryData.value = res.result
    }



    onMounted(() => getCategory())

    //分类页面重新渲染
    onBeforeRouteUpdate((to) => {
        // console.log(111);
        getCategory(to.params.id)
    })

    return {
        categoryData
    }
}