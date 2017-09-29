import demo from './demo/demo.vue'
import dialog from './dialog/index.vue'
import operations from './operations/index.vue'
import pagination from './pagination/index.vue'
import search from './search/index'
import box from './box/index.vue'
import button from './button/button.vue'
import buttonGroup from './button/button-group.vue'
import title from './title/index.vue'

const install = function (Vue) {
    Vue.component(demo.name, demo)
    Vue.component(dialog.name, dialog)
    Vue.component(operations.name, operations)
    Vue.component(pagination.name, pagination)
    Vue.component(search.name, search)
    Vue.component(box.name, box)
    Vue.component(button.name, button)
    Vue.component(buttonGroup.name, buttonGroup)
    Vue.component(title.name, title)
}

export default install