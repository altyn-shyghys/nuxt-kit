export {}

declare global {
  interface SelectOption {
    id: string | number
    name: string
    icon?: string
  }
}
