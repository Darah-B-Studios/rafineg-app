import React from 'react'

type Props = {
  type: "success" | "error" | "warning";
  message: string;
}

const Nofitication: React.FunctionComponent<Props> = ({ type, message}) => {
  return (
    <div>
      <p>Type: {type}</p>
      {message}
    </div>
  )
}

export default Nofitication
