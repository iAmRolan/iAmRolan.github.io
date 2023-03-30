import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className=' text-4xl font-bold inline border-b-4 border-[#00d9ce]'>About</p>
                </div>
                <div>
                </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, I'm Rolan, nice to meet you. Pleae take a look aroud.</p>
                    </div>
                    <div>
                        <p>I am passionate about building excellent digital products that improves the lives of those around me.
                            I specialize in creating products from clinets ranging from individals to small-businesses.
                            What would you do if you had a front-end expert availavle at your fingertips? 😃

                        </p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default About