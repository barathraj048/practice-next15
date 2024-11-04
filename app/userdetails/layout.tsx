import React,{ReactNode} from 'react'

export default function layout({children} : {children  : ReactNode}) {
  return (
    <div>
      userUi from user specific layout
      {children }
    </div>
  )
}
