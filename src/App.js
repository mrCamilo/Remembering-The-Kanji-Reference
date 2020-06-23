import React from 'react'

import Header from "./components/Header"
import Kanji from "./components/Kanji"
import kanjiData from "./kanjiData"

function App() {
    const kanjiComponents = kanjiData.map(rtk => <Kanji key ={rtk.id} number = {rtk.id} keyword ={rtk.keyword} heisig ={rtk.heisig} />)

    return (
        <div>
            <Header/>
	    {kanjiComponents}
        </div>
  )
}

export default App;
