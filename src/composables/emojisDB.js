import axios from 'axios'
import { ref } from 'vue'

export default function useEmojis() {
    const data = ref(null)
    
    axios.get("https://emojihub.yurace.pro/api/all")
        .then(response => {
            data.value = response.data
        })
        .catch(error => {
            console.log(error)
        })

    return { data }
}
