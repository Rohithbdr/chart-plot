import './index.css'

const Profile = (props) => {
    const {userDetails , onChecked  } = props
    const {name , email , phone, status , type, date ,id, activeSelection} = userDetails
    
   const checked = (id) => {
        onChecked(id)     
   }
  
        return (
            <div className={`contacts taskBar-bg ${activeSelection && 'color' } `}>
                <div className="name-bar task-bar1">
                    <input type="checkbox" id={id} onChange={() => checked(id)}  />
                    <label className="task-para c-name" htmlFor={id}>{name}</label>
                    <button className="dialogue">...</button>
                </div>
                <div className="contacts">
                    <p className="task-para email c-name">{email}</p>
                    <p className="task-para c-name">{phone}</p>
                    <p className="task-para c-name status">{status} </p>
                    <p className="task-para c-name">{type}</p>
                    <p className="task-para c-name">{date}</p>
                </div>                  
            </div>
        )

    }




export default Profile

