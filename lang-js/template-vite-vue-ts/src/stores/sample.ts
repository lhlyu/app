import { defineStore } from "pinia"

// 样例
const useSampleStore = defineStore({
    id: "sample",
    state: () => ({}),
    getters: {},
    actions: {},
    // 启用持久化
    persist: {
        enabled: true,
        storage: window.localStorage
    }
})

export default useSampleStore
