export const Sum = ({a,b}) => {
    
    let msg = 'Please give 2 numbers to sum';
    let calc;

    if (a && b){
          msg = `${a} + ${b} = `;
          calc = a + b;
    }
    return (
        <div>
           {msg}
           <span data-testid = 'calc'>
            {calc}
           </span>
        </div>
    )
}

 
