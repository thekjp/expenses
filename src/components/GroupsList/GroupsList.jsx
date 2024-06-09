import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "../../assets/icons/search-24px.svg";
import SortIcon from "../../assets/icons/sort-24px.svg";
import LinkIcon from "../../assets/icons/chevron_right-24px.svg";
import DeleteIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import axios from "axios";
import "./GroupsList.scss";
import DeleteGroup from "../DeleteGroup/DeleteGroup";

const port = 8080;
const url = `http://localhost:${port}`;

function GroupsList() {
  const [groups, setGroups] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedGroupId, setSelectedGroupId] = useState(null);
  const [selectedGroupName, setSelectedGroupName] = useState(null);

  useEffect(() => {
    const getGroups = async () => {
      try {
        const response = await axios.get(`${url}/groups`);
        setGroups(response.data);
      } catch (error) {
        console.error("Error fetching groups data:", error);
      }
    };
    getGroups();
  }, []);

  const handleDeleteClick = (groupId, groupName) => {
    setSelectedGroupId(groupId);
    setSelectedGroupName(groupName);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedGroupId(null);
    setModalIsOpen(false);
  };

  return (
    <section className="groups">
      <div className="groups__title-search-btn-container">
        <h1 className="groups__title">Groups</h1>
        <div className="groups__input-btn-container">
          <div className="groups__input-icon-container">
            <input
              className="groups__search-input"
              type="search"
              placeholder="Search..."
            />
            <img
              className="groups__search-icon"
              src={SearchIcon}
              alt="search icon"
            />
          </div>
          <Link className="groups__btn btn btn--primary" to="/groups/add">
            + Add New Group
          </Link>
        </div>
      </div>
      <div className="list-label__container">
        <div className="list-label__sort">
          <div className="list-label__groups-item">
            <h4 className="list-label__title">GROUP NAME</h4>
            <img className="list-label__icon" src={SortIcon} alt="sort icon" />
          </div>
          <div className="list-label__groups-description">
            <h4 className="list-label__title">DESCRIPTION</h4>
            <img className="list-label__icon" src={SortIcon} alt="sort icon" />
          </div>
        </div>
        <div className="list-label__actions">
          <h4 className="list-label__title">ACTIONS</h4>
        </div>
      </div>
      <div className="divider divider--mobile"></div>
      <ul className="groups-list">
        {groups?.map((group) => (
          <li key={group.id}>
            <div
              className={`divider ${
                group !== group[0] ? "" : "divider--hidden"
              }`}
            ></div>
            <div className="groups-item">
              <div className="groups-item__two-block-container">
                <div className="groups-item__block-container">
                  <div className="groups-item__label-text-container groups-item__label-text-container--group-name">
                    <h4 className="groups-item__label">GROUP NAME</h4>
                    <div className="groups-item__text">
                      <Link
                        className="groups-item__link text-link"
                        to={`/groups/${group.id}`}
                      >
                        {group.name}
                        <img
                          className="groups-item__link-icon"
                          src={LinkIcon}
                          alt="link icon"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="groups-item__label-text-container groups-item__label-text-container--description">
                    <h4 className="groups-item__label">DESCRIPTION</h4>
                    <p className="groups-item__text">{group.description}</p>
                  </div>
                </div>
              </div>
              <div className="groups-item__actions-icons-container">
                <div
                  className="groups-item__actions-link"
                  onClick={() => handleDeleteClick(group.id, group.name)}
                >
                  <img
                    className="groups-item__actions-icon"
                    src={DeleteIcon}
                    alt="delete icon"
                  />
                </div>
                <Link
                  className="groups-item__actions-link"
                  to={`/groups/${group.id}/edit`}
                >
                  <img
                    className="groups-item__actions-icon"
                    src={EditIcon}
                    alt="edit icon"
                  />
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <DeleteGroup
        isOpen={modalIsOpen}
        onClose={handleCloseModal}
        groupId={selectedGroupId}
        groupName={selectedGroupName}
      />
    </section>
  );
}

export default GroupsList;
