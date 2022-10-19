import React from 'react'

import PropTypes from 'prop-types'


export default function TextForm(props) {
  return (
    <div>
        <h1 className='my-3'>{props.heading}</h1>
        <div className="mb-3">
            <textarea className='form-control' name="" id="myBox" rows="8"></textarea>
        </div>
    </div>
  )
}

TextForm.propType = {
    heading : PropTypes.string.isRequired,
}
