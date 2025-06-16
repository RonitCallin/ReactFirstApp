import React from 'react'

export const Heading = (props) => {
  return (
    {/* This is a functional component that takes variable and returns a div with the name passed as a prop */},
    {/*So that many headings can be used diffrently in different screens*/},
    <div style={{ color: 'green', fontSize: '20px', margin: '10px 0' }}>
        {props.name}
    </div>
  )
}
