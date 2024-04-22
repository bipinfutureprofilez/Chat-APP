import React, { useState } from 'react';
import { BiSearchAlt } from "react-icons/bi";
import useGetConversations from '../hooks/useGetConversations';

export default function SearchUser() {

  const [search, setSearch] = useState();
  const { getConversations } = useGetConversations();

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    searchOnChange(e.target.value);
  }
  
  const searchOnChange = async (value) => {
    await getConversations(value);  
  };

  return (
    <div className="search-user">
      <form>
        <div className="input-group">
          <BiSearchAlt />
          <input type="search" name="search" id="search" className='form-control' value={search} onChange={handleInputChange} placeholder='Search...' />
        </div>
      </form>
    </div>
  );
}
