import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./EditGroup.scss";

const port = 8080;
const url = `http://localhost:${port}`;

function EditGroup() {
  const { id } = useParams(); //get id fro url
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getGroupData = async () => {
      try {
        const response = await axios.get(`${url}/groups/${id}`);
        const { name, description } = response.data;
        setGroupName(name);
        setDescription(description);
      } catch (error) {
        console.error("Error getting Group data:", error);
      }
    };
    getGroupData();
  }, [id]); //get data when component mounts (id in url is set)

  const handleNameChange = (event) => {
    setGroupName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`${url}/groups/${id}`, {
        name: groupName,
        description: description,
      });
      navigate("/groups");
    } catch (error) {
      console.error("Error editing group:", error);
    }
  };

  return (
    <section className="edit-group">
      <h1 className="edit-group__title">Edit Group</h1>
      <form className="edit-group__form" onSubmit={handleSubmit}>
        <div className="edit-group__form-group">
          <label className="edit-group__label" htmlFor="groupName">
            Group Name
          </label>
          <input
            className="edit-group__input"
            type="text"
            id="groupName"
            value={groupName}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="edit-group__form-group">
          <label className="edit-group__label" htmlFor="description">
            Description
          </label>
          <textarea
            className="edit-group__textarea"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            required
          ></textarea>
        </div>
        <button className="edit-group__button btn btn--primary" type="submit">
          Update Group
        </button>
      </form>
    </section>
  );
}

export default EditGroup;
