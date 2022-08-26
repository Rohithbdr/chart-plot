import {Component} from'react'
import Profile from './index'

const contacts = [
    {
        id:"1",   
        name:"Jane Cooper",
        email:"alma.lawson@example.com",
        phone:"(319) 555-0115",
        status:"Open",
        type:"Manually Added",
        date:"11/7/16",
        activeSelection: false
    },
    {
        id:"2",
        name:"Wade Warren",
        email:"tim.jennings@example.com",
        phone:"(229) 555-0109",
        status:"Open",
        type:"Manually Added",
        date:"10/6/13",
        activeSelection: false
    },
    {
        id:"3",
        name:"Esther Howard",
        email:"alma.lawson@example.com",
        phone:"(208) 555-0112",
        status:"Open",
        type:"Manually Added",
        date:"2/11/12",
        activeSelection: false
    },
    {
        id:"4",
        name:"Cameron Williamson",
        email:"alma.lawson@example.com",
        phone:"(702) 555-0122",
        status:"In Progress",
        type:"Web form",
        date:"7/18/17",
        activeSelection: false
    },
    {
        id:"5",
        name:"Brooklyn Simmons",
        email:"alma.lawson@example.com",
        phone:"(684) 555-0102",
        status:"On Hold",
        type:"Intercom",
        date:"3/4/16",
        activeSelection: false
    },
    {
        id:"6",
        name:"Leslie Alexander",
        email:"alma.lawson@example.com",
        phone:"(307) 555-0133",
        status:"Open",
        type:"Intercom",
        date:"12/4/17",
        activeSelection: false
    },
    {
        id:"7",
        name:"Jenny Wilson",
        email:"alma.lawson@example.com",
        phone:"(808) 555-0111",
        status:"Open",
        type:"Bulk Upload",
        date:"5/7/16",
        activeSelection: false
    },
    {
        id:"8",
        name:"Guy Hawkins",
        email:"alma.lawson@example.com",
        phone:"(302) 555-0107",
        status:"Closed",
        type:"Bulk Upload",
        date:"1/31/14",
        activeSelection: false
    },
    {
        id:"9",
        name:"Robert Fox",
        email:"jackson.grahan@example.com",
        phone:"(308) 555-0121",
        status:"In Progress",
        type:"Bulk Upload",
        date:"12/10/13",
        activeSelection: false
    },
    {
        id:"10",
        name:"Jacob Jones",
        email:"sara.cruz@example.com",
        phone:"(405) 555-0128",
        status:"Open",
        type:"Bulk Upload",
        date:"8/6/13",
        activeSelection: false
    }
]



class Chart extends Component {
    state =  {
        isChecked: false,
        inputString:"",
    }


    onChecked = (id) => {                
        contacts.map(each =>{
            if(each.id === id) {
                each.activeSelection = !each.activeSelection
            }            
        })
        this.setState(prev => ({isChecked: !prev.isChecked}))  
    }
    
    search = (input) => {
        this.setState({inputString: input.target.value})
    }

    render() { 
        const { inputString }  = this.state         
        const searchResult = contacts.filter(each => each.name.toLowerCase().includes(inputString.toLowerCase())) 
    return (
        <div className="background">
            <div className="nav-bar">
                <div className='search-cont'> 
                    <img src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png" alt="icon" className='search-icon'/>
                    <input type="search" placeholder="search contacts" onChange={this.search} className='srch'/>                    
                </div>
                <div>
                    <button className='nav-buttons'>View</button>
                    <button className='nav-buttons'>Edit</button>
                    <select  className='nav-buttons'> <option>Phone</option>
                    <option>status</option></select>
                    
                    <button className='nav-buttons'>Send</button>
                    <button className='nav-buttons'>...</button>
                    <button className='nav-buttons' style={{color:"lightgray" , borderColor:"lightgrey"}}> prev </button>
                    <button className='nav-buttons'> next </button>
                </div>
            </div>
            <div className="contacts-bg">
                <div className="taskBar-bg">
                    <div className="task-bar1">
                        <input type="checkbox" id="check"/>
                        <label className="task-para name" htmlFor="check">Name</label>
                        <button className="dialogue">...</button>
                    </div>
                    <div className="task-bar2">
                        <p className="email task-para">Email</p>
                        <p className="task-para ">Phone</p>
                        <p className={`task-para `} onClick={this.drop}>Status</p>
                        <p className="task-para ">Type</p>
                        <p className="task-para ">Date</p>
                    </div>
                </div>
                     {searchResult.map(each => <Profile userDetails={each} key={each.id} onChecked={this.onChecked} />)}
            </div>
            <div className='footer'>
                <button className='nav-buttons' style={{color:"lightgrey", borderColor:"lightgrey"}}>prev</button>
                <p className='foot-p'>1</p>
                <p className='foot'> of 28</p>
                <button className='nav-buttons'>next</button>
            </div>
            </div>
    )
}
}

export default Chart
