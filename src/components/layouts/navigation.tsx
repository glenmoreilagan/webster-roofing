export default function Navigation() {
  return (
    <header>
      <nav className='bg-white flex items-center justify-between max-w-6xl mx-auto font-mons'>
        <h1 className='uppercase font-semibold text-my-primary'>Webster Roofing</h1>
        <ul className='flex gap-6 justify-end items-center h-24 text-my-primary font-medium'>
          <li>Home</li>
          <li>Services</li>
          <li>Locations</li>
          <li>Contact</li>
          <li>
            <button className='bg-my-primary text-my-secondary uppercase px-8 py-1 rounded-full text-sm'>Free Estimate</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
