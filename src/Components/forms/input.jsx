import Input from '@mui/joy/Input';

/**
 * 
 * @param {*String*} <label htmlFor=""></label> 
 * @returns 
 */

function CInput({label, width,  onChange}) {
    return <Input 
        variant = 'outlined'
        placeholder = {label}
        size='lg'
        onChange={(e)=>{
            console.log(e.target.value)
            onChange(e.target.value)
        }}
        sx={{padding: 1.5, width: {width}}}
    />
}

export default CInput;