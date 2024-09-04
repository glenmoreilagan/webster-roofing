import WrapperLayout from '../components/layouts/wrapper-layout'

import { CiCircleCheck } from 'react-icons/ci'

export default function AboutPage() {
  return (
    <section>
      <WrapperLayout>
        <div className='grid grid-cols-2 gap-6 py-20'>
          <div>
            <h2 className='uppercase text-my-primary font-semibold text-4xl'>about us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nostrum neque ipsum nulla natus sit
              temporibus rem ipsa reiciendis exercitationem.
            </p>
          </div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro nam aspernatur hic pariatur magni a
            architecto? Itaque laborum dolores ab sint voluptates cum consequuntur blanditiis nostrum dolorum quam.
            Culpa, vel.
          </div>
        </div>
        <div className='grid grid-cols-2 gap-6'>
          <div className='grid grid-cols-2 gap-3'>
            <div>
              <img
                src='https://img.freepik.com/free-photo/full-shot-man-wearing-protection-helmet-outdoors_23-2149343635.jpg?t=st=1725427496~exp=1725431096~hmac=c65eabe46a41502244c7275336d2fc9e4481f2a89dd01469300727ee955da144&w=740'
                alt=''
                className='h-full rounded-lg'
              />
            </div>
            <div className='flex flex-col gap-3'>
              <img
                src='https://img.freepik.com/free-photo/full-shot-roofers-working-together-with-helmets_23-2149343707.jpg?t=st=1725427548~exp=1725431148~hmac=50ca48de4bf6bbcae5109c475f5bbad32f003ac1ec4f7798f120a4232f95f419&w=1060'
                alt=''
                className='h-full rounded-lg'
              />
              <img
                src='https://img.freepik.com/free-photo/medium-shot-men-working-roof-together_23-2149343670.jpg?t=st=1725428586~exp=1725432186~hmac=8d232cb3e8638b4afa1da81d4f2e0f411183a138f9e032519411f2899c12fe9b&w=1380'
                alt=''
                className='h-full rounded-lg'
              />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-6'>
            <div>
              <div className='py-6 flex justify-center items-center'>
                <CiCircleCheck size={48} className='text-my-primary' />
              </div>
              <div>
                <p className='text-sm text-center'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam exercitationem dignissimos accusantium
                  quia repudiandae ut!
                </p>
              </div>
            </div>
            <div>
              <div className='py-6 flex justify-center items-center'>
                <CiCircleCheck size={48} className='text-my-primary' />
              </div>
              <div>
                <p className='text-sm text-center'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam exercitationem dignissimos accusantium
                  quia repudiandae ut!
                </p>
              </div>
            </div>
            <div>
              <div className='py-6 flex justify-center items-center'>
                <CiCircleCheck size={48} className='text-my-primary' />
              </div>
              <div>
                <p className='text-sm text-center'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam exercitationem dignissimos accusantium
                  quia repudiandae ut!
                </p>
              </div>
            </div>
            <div>
              <div className='py-6 flex justify-center items-center'>
                <CiCircleCheck size={48} className='text-my-primary' />
              </div>
              <div>
                <p className='text-sm text-center'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam exercitationem dignissimos accusantium
                  quia repudiandae ut!
                </p>
              </div>
            </div>
          </div>
        </div>
      </WrapperLayout>
    </section>
  )
}
