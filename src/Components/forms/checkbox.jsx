import { Checkbox } from "@mui/joy";
import { useState } from "react";

/**
 * 
 * @param {boolean} isChecked 
 * @param {(s: String)=>void} onChange 
 * @param {String} label 
 * @returns 
 */

function CCheckbox({isChecked, label, onChange}){
    return <div>
        <Checkbox 
            checked = {isChecked}
            label={label}
            onChange={(e)=> onChange(e.target.checked)}
            sx={{padding: 1.5}}
        />
    </div>
}

export default CCheckbox;