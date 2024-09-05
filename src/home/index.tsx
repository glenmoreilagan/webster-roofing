import AboutPage from '../about'
import HeroImage from '../assets/freepik-export-20240902182923Sirl.jpeg'
import WrapperLayout from '../components/layouts/wrapper-layout'
import WhyNeedOurHelp from '../our-help'
import ServicePage from '../services'

export default function HomeIndex() {
  return (
    <>
      <section
        className='relative overflow-hidden'
        style={{ backgroundImage: `url(${HeroImage})`, backgroundSize: 'cover', height: 'calc(100vh - 6rem)' }}
      >
        <WrapperLayout className='h-full'>
          <div className='flex items-center gap-40 h-full'>
            <div className='w-[40rem]'>
              <div className='mb-6'>
                <h3 className='lowercase text-white font-medium text-4xl'>all in one</h3>
                <h1 className='uppercase text-white font-bold text-7xl'>best roofing solutions</h1>
              </div>

              <p className='text-lg mb-6 text-white'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis sequi ducimus deserunt earum iste
                necessitatibus aspernatur.
              </p>

              <div className='flex gap-3'>
                <button className='uppercase bg-my-primary font-semibold text-sm text-my-secondary px-6 py-1 rounded-full'>
                  Learn More
                </button>
                <button className='uppercase bg-my-secondary font-semibold text-sm text-my-primary px-6 py-1 rounded-full'>
                  Get Started
                </button>
              </div>
            </div>
            <div>
              <div className='w-96 bg-white h-full p-6 rounded-lg'>
                <h1 className='uppercase text-2xl text-center font-semibold'>get free consultation</h1>
                <p className='capitalize text-center'>Need roofing solution?</p>

                <div className='mt-3'>
                  <label htmlFor='' className='text-sm'>
                    Full Name
                  </label>
                  <input type='text' className='w-full border rounded-md px-3 py-2' />
                </div>
                <div className='mt-3'>
                  <label htmlFor='' className='text-sm'>
                    Email
                  </label>
                  <input type='text' className='w-full border rounded-md px-3 py-2' />
                </div>
                <div className='mt-3'>
                  <label htmlFor='' className='text-sm'>
                    Message
                  </label>
                  <textarea rows={2} className='w-full border rounded-md px-3 py-2' />
                </div>

                <div className='mt-3'>
                  <button className='uppercase bg-my-primary font-semibold text-sm text-my-secondary px-6 py-1 rounded-full w-full'>
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </WrapperLayout>
      </section>

      <AboutPage />
      <ServicePage />
      <WhyNeedOurHelp />

      <section className='bg-my-primary'>
        <WrapperLayout className='grid grid-cols-3 gap-6 place-items-center py-20'>
          <div>
            <h1 className='font-bold text-my-secondary text-2xl uppercase'>Webster Roofing</h1>
          </div>
          <div>
            <p className='text-center text-my-secondary'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis alias assumenda numquam consequatur impedit
            </p>
          </div>
          <div>
            <button className='uppercase bg-my-secondary font-semibold text-sm text-my-primary px-6 py-1 rounded-full'>
              Get Started
            </button>
          </div>
        </WrapperLayout>
      </section>
    </>
  )
}
