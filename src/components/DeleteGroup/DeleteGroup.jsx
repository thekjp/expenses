import axios from "axios";
import Modal from "react-modal";
import Exit from "../../assets/icons/close-24px.svg";
import "./DeleteGroup.scss";
Modal.setAppElement("#root");

const port = 8080;
const url = `http://localhost:${port}`;

function DeleteGroup({ isOpen, onClose, groupId, groupName }) {
  const handleDelete = async () => {
    try {
      await axios.delete(`${url}/groups/${groupId}`);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error deleting group: ", error);
    }
  };

  return (
    <div className="modal-container">
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Delete Modal"
        className="modal"
      >
        <div className="content">
          <div className="content__exit">
            <div className="btn btn--exit" onClick={onClose}>
              <img src={Exit} alt="exit" />
            </div>
          </div>
          <h1 className="content__title">Delete '{groupName}' group?</h1>
          <p className="content__text">
            Please confirm that you’d like to delete '{groupName}'' from groups.
            You won’t be able to undo this action.
          </p>
          <div className="content__buttons">
            <button className="btn btn--secondary" onClick={onClose}>
              Cancel
            </button>
            <button className="btn btn--delete" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default DeleteGroup;
