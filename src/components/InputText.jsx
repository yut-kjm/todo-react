import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputText = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        id="add-text"
        value={todoText}
        placeholder="TODOを入力"
        onChange={onChange}
      />
      <button disabled={disabled} id="add-button" onClick={onClick}>
        追加
      </button>
    </div>
  );
};
