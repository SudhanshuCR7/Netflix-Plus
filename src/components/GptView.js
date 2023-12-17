import React from 'react'
import { BG_URL } from '../utils/constant'
import { lang } from '../utils/languageConstant'
import { useSelector } from 'react-redux'

const GptView = () => {

  const langSelected = useSelector((store) => store.config.userLanguage)
  return (
    <>
    <img 
    className='absolute -z-10'
    src={BG_URL} 
    alt='bg-poster'/>
    <div className='pt-[10%] flex justify-center'>
    <form className='w-1/2 bg-black grid grid-cols-12'>
      <input 
      type='text' 
      placeholder={lang[langSelected].placeholder}
      className='p-4 m-4 col-span-9'  
      />
      <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'>
        {lang[langSelected].search}
      </button>
    </form>
    </div>
    </>
  )
}

export default GptView