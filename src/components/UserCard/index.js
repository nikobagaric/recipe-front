import './index.css'

const UserCard = ({ props }) => {
  return (
    <a className="user-card-container" href={`/user/${props.id-1}`}>
      <div className="user-card-image">
        <img alt='user profile' src={props.image} />
      </div>
      <div className="user-card-body">
        <h2 className='user-card-name'>{props.name}</h2>
      </div>
    </a>
  )
}

export default UserCard