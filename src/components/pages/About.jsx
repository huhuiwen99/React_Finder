function About() {
  return (
    <>
      <h3 className='text-6xl mb-4'>Github Finder</h3>
      <p className='mb-4 text-2xl font-light'>
        This is a React app to search GitHub profiles and see profile details. <br/>
        The code of this project can be found at
        <a href='https://github.com/huhuiwen99/React_Finder/'>
          {' '}
          <strong>my github.</strong>
        </a>{' '}
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white' >1.0.0</span> 
        
      </p>
      <p className='text-lg text-gray-400'>
        Layout By:
        <a href='https://github.com/huhuiwen99/'>
           <span className='text-white' > Huiwen Hu</span>         
        </a>
      </p>
    </>
  )
}

export default About
