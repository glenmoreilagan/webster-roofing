import WrapperLayout from './layouts/wrapper-layout'

import { PiEnvelopeSimpleLight, PiTiktokLogoLight, PiLinkedinLogoLight } from 'react-icons/pi'

export default function Footer() {
  return (
    <div className='h-48 bg-[#2F2E41]'>
      <WrapperLayout className='text-my-background text-xs py-10 flex gap-10'>
        <div className='space-y-3'>
          <p>Designed By:</p>
          <div className='flex gap-2 items-center'>
            <PiEnvelopeSimpleLight size={22} />{' '}
            <a href='mailto:daniela.arsenal08@gmail.com'>daniela.arsenal08@gmail.com</a>
          </div>
          <div className='flex gap-2 items-center'>
            <PiLinkedinLogoLight size={22} />{' '}
            <a href='https://www.linkedin.com/in/daniela-arsenal-94875123b/'>Daniela Arsenal</a>
          </div>
          <div className='flex gap-2 items-center'>
            <PiTiktokLogoLight size={22} /> <a href='https://www.tiktok.com/@daniewebdev'>@daniewebdev</a>
          </div>
        </div>
        <div className='space-y-3'>
          <p>Developed By:</p>
          <div className='flex gap-2 items-center'>
            <PiEnvelopeSimpleLight size={22} />{' '}
            <a href='mailto:ilaganglenmore019@gmail.com'>ilaganglenmore019@gmail.com</a>
          </div>
          <div className='flex gap-2 items-center'>
            <PiLinkedinLogoLight size={22} /> <a href='https://www.linkedin.com/in/glenmoreilagan/'>Glenmore Ilagan</a>
          </div>
        </div>
      </WrapperLayout>
    </div>
  )
}
