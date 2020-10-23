import React from 'react';

class SetStatus extends React.Component{
    state={
        editMode:true,
        status:this.props.status
    };

    deActivateStatus=()=>{
        this.setState({
            editMode:false
        })
        this.props.updateStatus(this.state.status)
    }
    activateStatus=()=>{
        this.setState({
            editMode:true
        })
    }


    onStatusChange = (e)=>{
        this.setState({
            status: e.currentTarget.value
        })
    };
    componentDidUpdate(prevProps,prevState){

        if(prevProps.status !== this.props.status){
            this.setState({
                status:this.props.status
            });
        }
    } 
   
    render(){
        console.log('render')

        return(
            <div>
                {this.state.editMode  && <><input onBlur={this.deActivateStatus}  onChange={this.onStatusChange} value={this.state.status }></input></>}
                {!this.state.editMode && <><span onDoubleClick={this.activateStatus}>{this.state.status || 'No status!'}</span></>}

            </div>
        )
    }
}

export default SetStatus;


// import React from 'react';

// class SetStatus extends React.Component{
//     state={
//         activeStatus:false,
//         status:this.props.status
//     };
    
//     onStatus= ()=>{
//         this.setState({
//             activeStatus:true
//         })
//         this.props.updateUserStatus(this.state.status)
//     }
//     offStatus= ()=>{
//         this.setState({
//             activeStatus:false
//         })
//     }
//     onChangeStatus=(e)=>{
//         this.setState({
//             status:e.currentTarget.value
//         })

        
//     }

//     render(){
//         return(
//             <div>
//                 {this.state.activeStatus    ? <><span onDoubleClick={this.offStatus}>{this.state.status}</span></>   
//                                             : <><input onChange={this.onChangeStatus} onDoubleClick={this.onStatus} value={this.state.status} ></input></>}

//             </div>
//         )
//     }
// }

// export default SetStatus;
