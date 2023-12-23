import React, { useRef } from 'react'
import { API_OPTIONS, BG_URL } from '../utils/constant'
import { lang } from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openAI'
import { addGPTSuggestedMovieNames, addGPTsuggestedMovies, addTMDBmoviesResponse } from '../utils/gptSlice'
import GptSuggestedMovies from './GptSuggestedMovies'

const GptView = () => {

  const dispatch = useDispatch();

  const langSelected = useSelector((store) => store.config.userLanguage)
  const inputTxt = useRef(null)

  const tmdbMovieSearch = async (mov) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+mov+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    return json.results;
  }
  
  const onSearchBtnClick = async () => {

    const query = 'act as movie recommendation system for ' + 
    inputTxt.current.value + 
    'and give only 5 movies and just name also output should be comma separated. for example - Animal, Kuch kuch hota hai, Main hoon na, Bajrangi Bhaijaan, War '

    const gptResult = await openai.chat.completions.create({
      messages: [{ role: 'user', content: query }],
      model: 'gpt-3.5-turbo',
    });

    const arrayGptResults = gptResult?.choices[0]?.message?.content?.split(',');

    dispatch(addGPTSuggestedMovieNames(arrayGptResults))

    const promiseArray = arrayGptResults.map((m) => tmdbMovieSearch(m));

    const tmdbMovieResponse = await Promise.all(promiseArray);

    dispatch(addTMDBmoviesResponse(tmdbMovieResponse))
  }


  return (
    <>
    <img 
    className='fixed -z-10 object-cover h-screen md:h-auto'
    src={BG_URL} 
    alt='bg-poster'/>
    <div className='pt-[45%] md:pt-[10%] flex justify-center'>
    <form 
    onSubmit={(e) => {e.preventDefault()}}
    className='w-full md:w-1/2 bg-black grid grid-cols-12'>
      <input 
      ref={inputTxt}
      type='text' 
      placeholder={lang[langSelected].placeholder}
      className='p-4 m-4 col-span-9'  
      />
      <button 
      onClick={onSearchBtnClick}
      className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'>
        {lang[langSelected].search}
      </button>
    </form>
    </div>
    <GptSuggestedMovies/>
    </>
  )
}

export default GptView