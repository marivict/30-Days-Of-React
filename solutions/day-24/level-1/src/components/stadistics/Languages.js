import React from 'react'

// Components
import Stadistics from './Stadistics'

const Languages = ({countries}) =>{

    const languageListArray = () => {
        let arrayLanguage = []
        let arrayLanguageName = []
        let objectArray =[]
        //add the language name in array
        arrayLanguage = countries.map(country => country.languages)
        arrayLanguageName = arrayLanguage.map(language => language.map(languageName => languageName.name))
        //flat: create a matrix with all the elements sub-array concatenated
        let flatArray = arrayLanguageName.flat()
        let flatArraySort = flatArray.sort()
        let current = null
        let ctn = 0

        // Create an object with language and the quantify of them
        for( let i=0; i < flatArraySort.length; i++){
            if(flatArraySort[i] !== current){
                if(ctn > 0){
                   objectArray.push({name:current, count:ctn})
                }
                current = flatArraySort[i]
                ctn = 1
            }else {
                ctn++
            }
        }
        return(objectArray)
    }

const sortedLanguage = (languageListArray) => {
    const compare = (a, b) =>{
        const countA = a.count
        const countB = b.count
        let comparison = 0
        if (countA < countB) {
          comparison = 1
        }else if(countA > countB){
          comparison = -1
        }
        return comparison 
      }
      const sortedArray = languageListArray.sort(compare)
      return sortedArray
    }   
    const firstLanguage = sortedLanguage(languageListArray()).slice(0, 1).map(firstOne => (firstOne.count))

    const languageList = sortedLanguage(languageListArray()).slice(0, 10).map((language) => {
        return <Stadistics 
                key={language.name} 
                name={language.name} 
                population ={language.count}
                total={firstLanguage} /> 
    })

    return(
        <>
        {languageList}
       </>
    )
}

export default Languages