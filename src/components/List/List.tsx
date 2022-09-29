import './List.scss'

interface IPropsType {
  hoveredItems: Record<string, boolean>
}

export const List = ({ hoveredItems }: IPropsType) => {
  const sortedKeys = Object.keys(hoveredItems).sort((a, b) => {
    const [firstElRow, firstElColumn] = a.split('-')
    const [secondElRow, secondElColumn] = b.split('-')
    return firstElRow === secondElRow
      ? +firstElColumn - +secondElColumn
      : +firstElRow - +secondElRow
  })

  return (
    <ul className="list">
      {sortedKeys.map((key: string) => {
        if (hoveredItems[key]) {
          const [row, cell] = key.split('-')
          return (
            <li className="list__item" key={`hovered-${key}`}>
              row {row} col {cell}
            </li>
          )
        }
      })}
    </ul>
  )
}
