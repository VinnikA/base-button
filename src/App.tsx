import s from './App.module.scss'
import { BaseButton } from './ui/BaseButton'
import arrowLeft from './icons/arrow-left.svg'
import arrowRight from './icons/arrow-right.svg'
import cross from './icons/cross.svg'
import heart from './icons/heart.svg'

function App() {

  const handleClick = () => alert('Click!');

  return (
    <div className={s.app}>
      <h1 className={s.heading}>Basic Button Examples</h1>
      <div className={s.table}>
        <section className={s.section}>
          <h2 className={s.title}>filled - primary</h2>
          <BaseButton 
            variant='filled' 
            color='primary' 
            startIcon={arrowLeft}
            click={handleClick}
          >
            previous page
          </BaseButton>
          <BaseButton 
            variant='filled' 
            color='primary' 
            startIcon={arrowLeft} 
            disabled={true}
          >
            previous page
          </BaseButton>
        </section >
        <section className={s.section}>
          <h2 className={s.title}>outlined - primary</h2>
          <BaseButton 
            variant='outlined' 
            color='primary' 
            endIcon={arrowRight}
            click={handleClick}
          >
            go forward
          </BaseButton>
          <BaseButton 
            variant='outlined' 
            color='primary' 
            endIcon={arrowRight} 
            disabled={true}
          >
            go forward
          </BaseButton>
        </section>
        <section className={s.section}>
          <h2 className={s.title}>filled - accent</h2>
          <BaseButton 
            variant='filled' 
            color='accent' 
            endIcon={cross}
            click={handleClick}
          >
            health care
          </BaseButton>
          <BaseButton 
            variant='filled' 
            color='accent' 
            endIcon={cross} 
            disabled={true}
          >
            health care
          </BaseButton>
        </section>
        <section className={s.section}>
          <h2 className={s.title}>outlined - accent</h2>
          <BaseButton 
            variant='outlined' 
            color='accent' 
            startIcon={heart}
            click={handleClick}
          >
            like
          </BaseButton>
          <BaseButton 
            variant='outlined' 
            color='accent' 
            startIcon={heart} 
            disabled={true}
          >
            like
          </BaseButton>
        </section>
      </div>
    </div>
  )
}

export default App
