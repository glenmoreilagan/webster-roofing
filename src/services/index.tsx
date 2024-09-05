import WrapperLayout from '../components/layouts/wrapper-layout'

const SERVICES = [
  {
    title: 'Roof Repair Services',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sit quo totam eos rerum. Debitis similique iste illo',
    image:
      'https://img.freepik.com/free-photo/construction-people-working-roof_23-2149343666.jpg?t=st=1725427783~exp=1725431383~hmac=a538180fc4392b4f0208c6601273cba1ff14be5020438fcaa8b9564669715efd&w=740',
  },
  {
    title: 'Roof Replacement Services',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sit quo totam eos rerum. Debitis similique iste illo',
    image:
      'https://img.freepik.com/free-photo/long-shot-men-working-together_23-2149343675.jpg?t=st=1725427362~exp=1725430962~hmac=16bb4fa50bc4844de070f12145b6ad7d4a194fd9f4be6f7da5a6c488cab5725e&w=740',
  },
  {
    title: 'Roof Inspection Services',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sit quo totam eos rerum. Debitis similique iste illo',
    image:
      'https://img.freepik.com/free-photo/man-working-roof-medium-shot_23-2149343644.jpg?t=st=1725431140~exp=1725434740~hmac=91b2624f79ef19d9d0093121253ef16c73f4f018b271e2606fc7624dd910bba5&w=740',
  },
  {
    title: 'Roof Maintenance Services',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sit quo totam eos rerum. Debitis similique iste illo',
    image:
      'https://img.freepik.com/free-photo/full-shot-man-wearing-protection-helmet-outdoors_23-2149343635.jpg?t=st=1725427496~exp=1725431096~hmac=c65eabe46a41502244c7275336d2fc9e4481f2a89dd01469300727ee955da144&w=740',
  },
]

export default function ServicePage() {
  return (
    <section>
      <WrapperLayout>
        <div className='py-20'>
          <h1 className='font-semibold text-4xl uppercase text-center text-my-primary py-3'>our services</h1>
          <p className='text-center py-3 font-medium'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem at, praesentium earum consectetur quos,
            atque numquam laboriosam eum ipsum vel est facere natus, iste laudantium nisi a itaque neque aut!
          </p>
        </div>

        <div className='grid grid-cols-2 gap-6'>
          {SERVICES.map((item, index) => (
            <div className='relative' key={index}>
              <img src={item.image} alt='' className='h-96 rounded-lg' />

              <div className='absolute bg-white shadow-sm w-[24rem] left-40 top-24 rounded-lg space-y-6 p-6'>
                <h4 className='font-semibold text-center text-lg'>{item.title}</h4>
                <p className='text-center text-sm'>{item.description}</p>

                <div className='flex justify-center'>
                  <button className='bg-my-primary text-my-secondary font-medium text-sm uppercase px-8 py-1 rounded-full'>
                    learn more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </WrapperLayout>
    </section>
  )
}
