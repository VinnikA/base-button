import s from './styles.module.scss'
import { IBaseButton } from '../../types/types'

export const BaseButton = (props: IBaseButton) => {

  const {variant, color, disabled, children, click, startIcon, endIcon} = props

  const btnType = `btn_${variant}-${color}`

  const currentStyle = `${s.btn} ${s[btnType]}`

  return (
    <button 
      className={currentStyle}
      disabled={disabled}
      onClick={click}
    >
      {startIcon && <div
        style={{
          maskImage: `url(${startIcon})`, 
          WebkitMaskImage: `url(${startIcon})`,
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskPosition: 'center'
        }}
        className={s.icon} 
      >
      </div>}
      {children}
      {endIcon && <div
        style={{
          maskImage: `url(${endIcon})`, 
          WebkitMaskImage: `url(${endIcon})`,
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskPosition: 'center'
        }}
        className={s.icon} 
      >
      </div>}
    </button>
  )
}

// how to use this component
// if you want to use this component, you have to pass two required props
// prop variant can be filled or outlined
// prop color can be primary or accent
// you can pass disabled state for the button - disabled={true}
// you can pass function that will be called by the click action - action={yourFunction}
// also you can pass icon via props startIcon/endIcon
// startIcon={yourIcon}, endIcon={yourIcon}
// if you want pass text just write it between tags