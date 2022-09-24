const UserCard = ({ props }) => {
    return (
      <div className="user-card-container">
        <div className="user-card-image">
          <img alt='user profile' src={props.image}/>
        </div>
        <div className="user-card-body">
          <h2></h2>
          <p></p>
        </div>
      </div>  
    )
}