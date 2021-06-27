import { useState } from 'react'

export const Toggle = (props) => {
    const [state, setState] = useState(false);

    const clickHandler = () => {
        setState(!state); //(preState => !preState    *would do the same)
        props.onChange(!state);
    }

    return (
        <div>
            <button
            onClick = {clickHandler}
            data-testid = 'toggle'
            >
                {state?'Turn Off' : 'Turn On'}
            </button>
        </div>
    )
}
 
