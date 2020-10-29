import React, { useEffect, useState } from 'react';


const SetStatus = (props) => {
    let [mode, editMode] = useState(false);
    let [status, editStatus] = useState(props.status);

    const deActivateStatus = () => {
        editMode(false);
        props.updateStatus(status);
    }

    const activateStatus = () => {
            editMode(true);
    }
    const onStatusChange= (e)=>{
        editStatus(e.currentTarget.value)
    }

    useEffect(() => {
        editStatus(props.status);

    }, [props.status])


    return (
        <div>
            {mode && <><input onBlur={deActivateStatus} onChange={onStatusChange} value={status}></input></>}
            {!mode && <><span onDoubleClick={activateStatus}>{props.status || 'No status!'}</span></>}
        </div>
    )
}

export default SetStatus;
