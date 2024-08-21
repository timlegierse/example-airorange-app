import React from "react";
import { Avatar, Toggle } from "@zh-engineer/airorange-react";

export default function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
  
          <Avatar
            name="Seth Corker"
            src="https://sethcorker.com/static/web_prof-small-5ea7bafb5e58043f7536b63497995d29.jpg"
          />
          <Avatar
            name="Rosie Watson"
            src="https://www.rosiewatson.dev/content/images/2024/07/rosie_headshot-5.jpeg"
          />
          <Avatar
            name="Rab Rennie"
            src="https://avatars.githubusercontent.com/u/9087372?v=4"
          />
          <Avatar
            name="Nic A"
            src="https://nicallen.co.uk/assets/images/image01.jpg?v=46174480"
          />
           <Avatar
            name="Tim L"
            src="https://media.licdn.com/dms/image/v2/C4E03AQGI72Unhz-tmA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1605177274081?e=1729728000&v=beta&t=QJeNH8d7QzUbeatV7PVmBUCOYZM1j_syLNTY6hdgeac"
          />
          <Toggle a11yLabel="Allow this feature" />
        </div>
      </div>
    </div>
  );
}
