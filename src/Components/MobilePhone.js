import React from "react";

const MobilePhone = ({ FilterMobilePhone, info}) => {
  return (
    <div>
      {info && (
        <>
          <form>
            <label>Filter by  </label>
            <select onChange={FilterMobilePhone}>
              <option value= "true">Mobile Phone</option>
              <option value="false">No Mobile Phone</option>
            </select>
          </form>
        </>
      )}
    </div>
  );
};

export default MobilePhone;
