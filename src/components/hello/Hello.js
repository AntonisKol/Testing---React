 export const Hello = ({name}) => {

    let msg;

    if (name) {
        msg = `Hello, ${name}`
    } else {
       msg = `Hey stranger`
    }

    return (
        <div>
           <h1>{msg}</h1> 
        </div>
    )
}

