const UserInfo = ({ name, email }) => (
    <div className="user-info">
      <div className="avatar">
        <span>{name.charAt(0)}</span>
      </div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
  
  export default UserInfo;