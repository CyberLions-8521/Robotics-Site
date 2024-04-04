import React from 'react'

export default function TidyList({ listName, listItems, boldFirstWord = false }) {

    return (
        <>
            <ul className="tidylist">

                { 
                    listItems.map((item, arrayIndex) => {

                        if (boldFirstWord){
                            let firstWord = item.split(" ")[0];

                            // slice off the first word from the rest of the item string
                            let restOfItem = item.slice(firstWord.length);
                            return <li key={listName + " " + arrayIndex} className="tidylist-item"> <strong>{firstWord}</strong> {restOfItem} </li>
                        }

                        return <li key={listName + " " + arrayIndex} className="tidylist-item"> {item} </li>
                    })
                }

            </ul>
        </>
    )
}
