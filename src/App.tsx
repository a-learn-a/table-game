import { useEffect, useState } from 'react'

import { Spinner } from './components/Spinner/Spinner'
import { ErrorAlert } from './components/ErrorAlert/ErrorAlert'
import { Game } from './pages/Game/Game'

import './App.scss'

export interface IOption {
  name: string
  field: number
}

export const App = () => {
  const [options, setOptions] = useState<IOption[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    fetch('http://demo7919674.mockable.io')
      .then(async (response) => {
        const data = await response.json()
        setOptions(data)
      })
      .catch((error) => {
        console.error(error)
        setIsError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  const renderContent = () => {
    return isError ? <ErrorAlert /> : <Game options={options} />
  }

  return <div className="App">{isLoading ? <Spinner /> : renderContent()}</div>
}
