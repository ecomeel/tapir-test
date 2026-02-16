export type TextButtonColor = 'red' | 'transparent'

export interface TextButtonProps {
  label: string
  colorToken?: TextButtonColor
  bordered?: boolean,
  disabled?: boolean,

  // для ссылок
  to?: string
  href?: string
}