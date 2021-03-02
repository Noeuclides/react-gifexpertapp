import React from 'react'

export const GifGridItem = (({ id, title, image }) => {
    return (
        <div className="card animate__animated animate__bounce">
            <img src={ image } alt={ title } />
            <p>{ title }</p>
        </div>

    )
}
)
