import React from 'react'

export default function Conversation() {
  return (
    <>
      <div className="conversatio-item">
        <img src="https://avatar.iran.liara.run/public" alt="avatar" width='40' />
        <div className="user-cnt">
          <div className="left-msg">
            <h4>Rahul</h4>
            <div className="recent-msg"></div>
          </div>
          <div className="last-seen-data">24 Mar</div>
        </div>
      </div>
    </>
  );
}
