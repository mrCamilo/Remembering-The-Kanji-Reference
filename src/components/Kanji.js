import React from 'react'

function Kanji(props) {
    return (
        <div className="rtkContainer">
	    <div className="rtk">
	        <p>{props.number}</p>
	        <p>{props.keyword}</p>
	        <p>{props.heisig}</p>
	    </div>
	</div>
    )
}

export default Kanji
