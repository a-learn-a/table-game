import { useMemo } from 'react'

import './Table.scss'

interface IPropsType {
  option: number
  hoveredItems: Record<string, boolean>
  onMouseEnter: (arg: string) => void
}

export const Table = ({ option, hoveredItems, onMouseEnter }: IPropsType) => {
  const rows = useMemo(() => new Array(option).fill(0), [option])

  return (
    <div className="table">
      {rows.map((_, rowIndex) => {
        return (
          <div
            className={`table__row ${
              rowIndex === 0 ? 'table__row--first' : ''
            }`}
            key={rowIndex}
          >
            {rows.map((_, cellIndex) => {
              const itemPath = `${rowIndex + 1}-${cellIndex + 1}`
              return (
                <div
                  className={`table__cell ${
                    hoveredItems[itemPath] ? 'table__cell--hovered' : ''
                  }`}
                  key={`${rowIndex}-${cellIndex}`}
                  onMouseEnter={() => onMouseEnter(itemPath)}
                />
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
