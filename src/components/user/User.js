import { useState, useEffect } from 'react';

export const User = (props) => {
    const [user, setUser] = useState(null);

    const fetchUserData = async(id) => {
        const response = await fetch('/' + id);
        setUser(await response.json());
    }

    useEffect(() => {
        fetchUserData(props.id)
    }, [props.id]);

    if ( !user ) {  
        return 'Loading... '
    }

    return (
        <div>
            <h3>{user.name}</h3>
            <h4>{user.age}</h4>
            <h4>{user.address}</h4>
        </div>
    );
}