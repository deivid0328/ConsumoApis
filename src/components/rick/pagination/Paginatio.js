import React from 'react'

const Paginatio = ({ prev, next, onPrevious, onNext }) => {

    const handlePrevious = () => {
        onPrevious();
    }


    const handleNext = () => {
        onNext();
    }

    return (
        <nav>
            <ul className='pagination justify-content-center mt-4'>
                {
                    prev ? (

                        <li className='page-item'><button onClick={handlePrevious} className='page-link'>Previous</button></li>
                    ) : null
                }

                {
                    next ? (
                        <li className='page-item'><button onClick={handleNext} className='page-link'>Next</button></li>
                    ) : null

                }

            </ul>
        </nav>
    )
}

export default Paginatio