import React from 'react'

export default function Slugs({ params }: { params: { slugs: Array<string> } }) {

    if(params.slugs.length === 2){
        return (
            <div>view docs for features {params.slugs[0]} and concepts {params.slugs[1]}</div>
        )
    } else if(params.slugs.length === 1) {
        return (
            <div>view docs for features {params.slugs[0]}</div>
        ) 
    }else {
        return (
            <>docs page</>
        )
    }
    
}
