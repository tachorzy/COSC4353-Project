import React, { useState } from "react";

function EditableInfo(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [info, setInfo] = useState(props.initialInfo);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    props.onSave(info);
  };

  const handleChange = (event) => {
    setInfo(event.target.value);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input type="text" value={info} onChange={handleChange} />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <span>{props.initialInfo}</span>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default EditableInfo;