"use client"

function Home() {

  return (
    <div className='flex flex-col items-center  h-screen justify-center text-tc
    px-2'>

      <div className='flex flex-col items-start'>
        <div className='flex flex-col mb-60 max-w-[500px] space-y-4'>
          <h1 className='text-5xl font-bold '>JURIX</h1>
          <p className="font-medium">Instant legal expertise: precise answers and guidance at your fingertips</p>
        </div>

        <div className='flex space-x-2'>
          <div className='infoText'>
            <h2 className='font-bold'>Instant and Reliable</h2>
            <p className='text-sm font-medium'>Get immediate, accurate legal answers, reducing information search time</p>
          </div>

          <div className='infoText'>
            <h2 className='font-bold'>Guidance and Support</h2>
            <p className='text-sm font-medium'>Beyond answers, Jurix provides valuable legal guidance for confident decision-making</p>
          </div>
        </div>

      </div>
    </div>
  )
}


export default Home