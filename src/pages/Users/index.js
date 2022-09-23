import './index.css'

const Users = ({ API_URL }) => {
  return (
    <div className="users-container">
      <div className="users-header-container">
        <div className="users-banner-container">
          <img className="users-banner" />
        </div>
        <div className="users-search-container">
            <label htmlFor="user-search">Find users</label>
            <input className="users-search-input" name="user-search"/>
        </div>
      </div>
      <div className="users-cards-container">

      </div>
    </div>
  );
};

export default Users;
