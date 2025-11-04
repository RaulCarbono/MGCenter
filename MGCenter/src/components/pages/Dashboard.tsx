import { Sidebar } from '../organisms/Sidebar'
import { Appbar } from '../molecules/Appbar'
import { CardDeviceInfo } from '../organisms/CardDeviceInfo'

export const Dashboard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-[240px_1fr] grid-rows-[60px_1fr] md: h-svh w-svw'>
      <div className='grid w-full gap-3'>
        <Sidebar />
      </div>
      <div className='grid'>
      <Appbar />
      <CardDeviceInfo />
      </div>
    </div>
  )
}
