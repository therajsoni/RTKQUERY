import React from 'react'
import { useGetPostQuery } from './redux/api'

const App = () => {

  const {
    isLoading , isError,
    isSuccess,data,error
  } = useGetPostQuery("")

  return (
    <div>
      
    </div>
  )
}

export default App
