import "./GroupItem.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const port = 8080;
const url = `http://localhost:${port}`;

function GroupItem() {
  const { id } = useParams();
  const [group, setGroup] = useState(null);
  const [members, setMembers] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const getGroupDetails = async () => {
      try {
        const response = await axios.get(`${url}/groups/${id}`);
        setGroup(response.data);
        console.log(response.data.expenses);
        setMembers(response.data.members);
        setExpenses(response.data.expenses);
      } catch (error) {
        console.error("Error fetching group details: ", error);
      }
    };
    getGroupDetails();
  }, [id]); //get group details when id is set in url (component mounts)

  return (
    <section className="group-item">
      <h1 className="group-item__title">{group?.name}</h1>
      <p className="group-item__description">{group?.description}</p>
      <div className="group-item__members">
        <h2>Members</h2>
        <ul>
          {members?.map((member) => (
            <li key={member.id}>{member.username}</li>
          ))}
        </ul>
      </div>
      <div className="group-item__expenses">
        <h2>Expenses</h2>
        <ul>
          {expenses?.map((expense) => (
            <li key={expense.id}>
              {expense.title} - ${expense.total_amount} on{" "}
              {new Date(expense.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default GroupItem;
