import React, { FC } from 'react'

const WorkLayout: FC = ({ children }) => (
  <div className="flex justify-center">
    <div className="w-10/12">{children}</div>
  </div>
)
export default WorkLayout
