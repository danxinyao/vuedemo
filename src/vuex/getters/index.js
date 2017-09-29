export default {
    demoList: (state) => state.demo.demoList,
    isShowFullLoading: (state) => state.loading.isShowFullLoading, // 显示全局加载动画
    localLoading: (state) => state.loading.localLoading, // 显示局部加载动画
}