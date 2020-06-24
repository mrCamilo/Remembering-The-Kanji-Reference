import React from 'react'

function Kanji(props) {
    return (
        <div className="rtkContainer">
	    <div className="rtk">
	        <h1>{props.kanji}</h1>
	        <p>{props.number}</p>
	        <p>{props.keyword}</p>
	        <p>{props.heisig}</p>
	        <hr></hr>
	    </div>
	</div>
    )
}

export default Kanji
