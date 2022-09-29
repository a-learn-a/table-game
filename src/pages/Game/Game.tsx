import { useState } from 'react'

import { GameSettings } from '../../components/GameSettings/GameSettings'
import { List } from '../../components/List/List'
import { Table } from '../../components/Table/Table'

import { IOption } from '../../App'

import './Game.scss'

interface IPropsType {
  options: IOption[]
}

export const Game = ({ options }: IPropsType) => {
  const [selectedOption, setSelectedOption] = useState<number>(0)
  const [isStarted, setIsStarted] = useState<boolean>(false)
  const [hovered, setHovered] = useState<Record<string, boolean>>({}) 

  const handleOptionChange: React.ChangeEventHandler<HTMLSelectElement> = (
    e,
  ) => {
    setSelectedOption(+e.target.value)
    setIsStarted(false)
    setHovered({})
  }

  const handleStart = (): void => {
    setIsStarted(true)
  }

  const handleMouseOver = (key: string): void => {
    setHovered((prevState) => ({ ...prevState, [key]: !prevState[key] }))
  }

  return (
    <div className="game">
      <div className="game__content">
        <GameSettings
          options={options}
          selectedOption={selectedOption}
          onClick={handleStart}
          onChange={handleOptionChange}
        />
        <div className="game__content-table">
          {!!selectedOption && isStarted && (
            <Table
              option={selectedOption}
              hoveredItems={hovered}
              onMouseEnter={handleMouseOver}
            />
          )}
        </div>
      </div>
      <div className="game__content">
        <div className="game__content-list">
          <List hoveredItems={hovered} />
        </div>
      </div>
    </div>
  )
}
