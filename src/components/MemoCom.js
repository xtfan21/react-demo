import React from "react";

function FunctionCom(props) {
    const { value } = props;
    return (
        <div>
            {value.toLocaleString()}
        </div>
    )
}
export default React.memo(FunctionCom);
