import "./AddGroup.scss";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const port = 8080;
const url = `http://localhost:${port}`;

function AddGroup() {
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setGroupName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${url}/groups`, {
        name: groupName,
        description: description,
      });
      const groupId = response.data.id;
      await axios.post(`${url}/groups/${groupId}/members`, {
        userId: 1, //change when auth is sorted
        role: "member",
      });
      console.log(response.data);
      navigate("/groups");
    } catch (error) {
      console.error("Error adding group: ", error);
    }
  };

  return (
    <section className="add-group">
      <h1 className="add-group__title">Add New Group</h1>
      <form className="add-group__form" onSubmit={handleSubmit}>
        <div className="add-group__form-group">
          <label className="add-group__label" htmlFor="groupName">
            Group Name
          </label>
          <input
            className="add-group__input"
            type="text"
            id="groupName"
            value={groupName}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="add-group__form-group">
          <label className="add-group__label" htmlFor="description">
            Description
          </label>
          <textarea
            className="add-group__textarea"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            required
          ></textarea>
        </div>
        <button className="add-group__button btn btn--primary" type="submit">
          Add Group
        </button>
      </form>
    </section>
  );
}

export default AddGroup;
