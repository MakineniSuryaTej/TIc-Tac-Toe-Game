import { useState } from "react";

export default function Player({
  name,
  symbol,
  isActive,
  onChangeName,
}: {
  name: any;
  symbol: any;
  isActive: any;
  onChangeName: any;
}) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event: any) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let buttonName = "Edit";
  if (isEditing) {
    editablePlayerName = (
      <input type="text" value={playerName} onChange={handleChange} />
    );
    buttonName = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{buttonName}</button>
    </li>
  );
}
