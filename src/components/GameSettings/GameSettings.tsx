import { IOption } from '../../App'

import './GameSettings.scss'

interface IPropsType {
    options: IOption[]
    selectedOption: number
    onClick: () => void
    onChange: React.ChangeEventHandler<HTMLSelectElement>
}

export const GameSettings = ({
  options,
  selectedOption,
  onClick,
  onChange,
}: IPropsType) => {
  return (
    <div className="game__settings">
      <select
        className="game__settings-select"
        value={selectedOption}
        onChange={onChange}
      >
        {!selectedOption && <option>Pick mode</option>}
        {options.map(({ name, field } : IOption) => (
          <option key={name} value={field}>
            {name}
          </option>
        ))}
      </select>
      <button className="game__settings-button" onClick={onClick}>
        Start
      </button>
    </div>
  )
}
