import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    ElAside: typeof import('element-plus/es')['ElAside']
    ElAvatar: typeof import('element-plus/es')['ElAvatar']
    ElButton: typeof import('element-plus/es')['ElButton']
    ElCard: typeof import('element-plus/es')['ElCard']
    ElConfigProvider: typeof import('element-plus/es')['ElConfigProvider']
    ElContainer: typeof import('element-plus/es')['ElContainer']
    ElDropdown: typeof import('element-plus/es')['ElDropdown']
    ElDropdownItem: typeof import('element-plus/es')['ElDropdownItem']
    ElDropdownMenu: typeof import('element-plus/es')['ElDropdownMenu']
    ElHeader: typeof import('element-plus/es')['ElHeader']
    ElIcon: typeof import('element-plus/es')['ElIcon']
    ElImage: typeof import('element-plus/es')['ElImage']
    ElLink: typeof import('element-plus/es')['ElLink']
    ElMain: typeof import('element-plus/es')['ElMain']
    ElMenu: typeof import('element-plus/es')['ElMenu']
    ElMenuItem: typeof import('element-plus/es')['ElMenuItem']
    ElScrollbar: typeof import('element-plus/es')['ElScrollbar']
    ElSubMenu: typeof import('element-plus/es')['ElSubMenu']
    ElTabPane: typeof import('element-plus/es')['ElTabPane']
    ElTabs: typeof import('element-plus/es')['ElTabs']
    Lang: typeof import('./src/components/Lang/index.vue')['default']
    RouterLink: typeof import('vue-router')['RouterLink']
    RouterView: typeof import('vue-router')['RouterView']
    SvgIcon: typeof import('./src/components/SvgIcon/index.vue')['default']
  }
}

export {}
