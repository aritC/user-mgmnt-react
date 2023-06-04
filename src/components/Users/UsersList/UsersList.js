import Card from "../../UI/Card/Card";
import classes from "./UsersList.module.css";
export default function Users(props) {
  return (
    <Card className={classes.users}>
      <p>Users</p>
      <ul>
        {props.users.map((user, i) => {
          return <li key={i}>{`${user.name} (${user.age} Yr(s) Old)`}</li>;
        })}
      </ul>
    </Card>
  );
}
