import UserCard from '../../components/UserCard';
import usedata from '../../components/UserCard/usedata';
import './index.css'

const Users = ({ API_URL }) => {
  const userCards = usedata.map(user => {
    return (
      <UserCard props={user} />
    )
  })

  return (
    <div className="users-container">
      <div className="users-header-container">
        <div className="users-search-container">
            <label className='users-search-label' htmlFor="user-search">Find users:</label>
            <input className="users-search-input" name="user-search"/>
        </div>
      </div>
      <div className="users-cards-container">
        {userCards}
      </div>
    </div>
  );
};

export default Users;
