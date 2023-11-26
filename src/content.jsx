import React from 'react'
import { useSelector } from 'react-redux'

function ContentPart() {
  let infoA=useSelector((state)=>state.header.header.value)



  return (
    <div id='contenter'> {infoA}     </div>
  )
}

export default ContentPart