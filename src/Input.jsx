import React from 'react'


const data = [
    {id:1 , name: 'Eshmat', surname:'Eshmatov'},
    {id:2 , name: 'Toshmat', surname:'Eshmatov'},
    {id:3 , name: 'Gulmat', surname:'Eshmatov'},
]

class Input extends React.Component{
    state = {
        name:'Webrain',
        surname: 'Academy',
        data: data,
    }


    render(){
        const onChange =({target}) =>{
            let res = data.filter((value)=>value.name.includes(target.value))
            this.setState({
                data : res
            })
        }
        return(
            <div className='wrapper'>
                <h1>Students</h1>
                <select name="" id="name">
                    <option value="">ID</option>
                    <option value="">Name</option>
                    <option value="">Surname</option>
                </select>
                <input name='name' type="text" onChange={onChange}/>
                {this.state.data.map((value)=>(
                    <>
                        <h1>
                            {value.id} - {value.name} - {value.surname}
                        </h1>
                    </>
                ))}
            </div>
        )
    }
}

export default Input