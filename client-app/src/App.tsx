import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Header, List } from "semantic-ui-react";
import Button from "semantic-ui-react/dist/commonjs/elements/Button";

interface Activity {
  id: number;
  title: string;
}

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((response) => {
      setActivities(response.data);
    });
  }, []);

  return (
    <div>
      <Header as="h2" icon="users" content="Reactivities" />

      <List>
        {activities.map((activity: Activity) => {
          return <List.Item key={activity.id}>{activity.title}</List.Item>;
        })}
      </List>
    </div>
  );
}

export default App;
