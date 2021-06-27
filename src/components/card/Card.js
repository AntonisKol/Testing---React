import { useEffect } from "react";

export default  (props) => {

    useEffect(() => {
        const timeOutID = setTimeout(() => {
            props.onSelect('Time is over!');
        }, 5000);

        return () => {
            clearTimeout(timeOutID);
        }// eslint-disable-next-line
    }, [props.onSelect]);

    const options = ['JS', 'React', 'Angular', 'Vue', 'NodeJS'];

    const content = options.map( option => 
        <button 
            key = {option} 
            data-testid = {option}
            onClick = {() => props.onSelect(option)}
        > 
            {option}
        </button>)

    return (
        <div>
            {content}
        </div>
    );
}