import React, { useState, useEffect } from 'react';

import GlobalStyle from './styles/globals';

import languages from '../src/lang/languages.json'

import detectBrowserLanguage from 'detect-browser-language'

import Header from './components/Header'
import Footer from './components/Footer'
import Skills from './components/Skills'
import WorkingExperience from './components/WorkingExperience'
import LatestProjects from './components/LatestProjects'

function App() {
  useEffect(() => {      
    let userLang = detectBrowserLanguage() // detec the current user default lang

    if(userLang.includes("pt")) { // if its portuguese
      changeSelectedLanguage("pt")
      changeAnotherLanguage("en")
    } else {
      changeSelectedLanguage("en") // otherwise we will load english
      changeAnotherLanguage("pt")
    }
  }, [])

  const [selectedLanguage, changeSelectedLanguage] = useState("en")
  const [anotherLanguage, changeAnotherLanguage] = useState("pt")
  const lang = languages.languages

  function changeLanguage() {
    let newLang = "en"
    let anotherLang = "pt"

    if(selectedLanguage == "en") {
      newLang = "pt"
      anotherLang = "en"
    }

    changeSelectedLanguage(newLang)
    changeAnotherLanguage(anotherLang)
  }

  return (
    <>
      <GlobalStyle />
      <Header
        lang={lang}
        click={changeLanguage}
        anotherLanguage={anotherLanguage}
        selectedLanguage={selectedLanguage}
      />
      <Skills
        lang={lang}
        selectedLanguage={selectedLanguage}
      />
      <LatestProjects
        lang={lang}
        selectedLanguage={selectedLanguage}
      />
      <WorkingExperience
        lang={lang}
        selectedLanguage={selectedLanguage}
      />
      <Footer
        lang={lang}
        selectedLanguage={selectedLanguage}
      />
    </>
  );
}

export default App;