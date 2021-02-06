import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";

import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import db from "./firebase"
import { useStateValue } from "./StateProvider";

function Sidebar() {

  const [ rooms, setRooms ] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = db.collection('rooms').onSnapshot(snapshot => (
      setRooms(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data(),
      })))
    ));
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={user?.photoURL} />
        <div className="sidebar__headerRight">
          <p>Developed with ♥ by Saurabh  </p>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="search" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar__chats">
          <SidebarChat addNewChat />
          {rooms.map(room => (
            <SidebarChat
             key={room.id}
             id={room.id} 
             name={room.data.name} />
          ))}
      </div>
    </div>
  );
}

export default Sidebar;
