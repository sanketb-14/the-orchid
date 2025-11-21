import SideNavigation from '@/components/SideNavigation'

const layout = ({children}) => {
  return (
    <div className='grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 py-8'>
      <SideNavigation/>
      <div className='min-h-screen'>{children}</div>
    </div>
  )
}

export default layout