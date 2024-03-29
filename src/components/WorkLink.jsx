import React from 'react'

const WorkLink = ( {title, imgUrl, link}) => {
  return (
    <div>
        <p className="font-abhaya text-7xl lg:text-9xl font-extrabold hover:text-[#F5F5F5] lg:text-stroke text-stroke2 text-transparent">
            {title}
        </p>
    </div>
  )
}

export default WorkLink