export interface IBaseButton {
  variant: string,
  color: string,
  disabled?: boolean, 
  children?: any, 
  click?: () => void,
  startIcon?: string,
  endIcon?: string
}