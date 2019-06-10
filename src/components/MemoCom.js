import React from "react";

function FunctionCom(props) {
    return (
        <div>
            {JSON.stringify(props)}
        </div>
    )
}
export default React.memo(FunctionCom);
