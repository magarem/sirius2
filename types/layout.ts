import type { FunctionalComponent } from 'vue'

export type NavbarLinkType = {
  id?: string
  name: string
  icon?: FunctionalComponent
  path?: string
}
