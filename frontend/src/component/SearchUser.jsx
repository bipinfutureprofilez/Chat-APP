import React from 'react';
import { BiSearchAlt } from "react-icons/bi";

export default function SearchUser() {
  return (
    <div className="search-user">
      <form>
        <div className="input-group">
          <BiSearchAlt />
          <input type="search" name="search" id="search" className='form-control' placeholder='Search...' />
        </div>
      </form>
    </div>
  );
}
