import React from 'react'
import { RiStarSFill } from "react-icons/ri"


const Rating = (props) => {
    const diffoption = {
        easy: 0,
        medium: 1,
        hard: 2,
    }

    return (
        <>
            {[...Array(5)].map((star, i) => {
                return (
                    <RiStarSFill
                        key={i}
                      color={i <= diffoption[props.diff] ? "black" : "lightgray"}
                    />
                )
            })}
           
        </>
    )


}

export default Rating