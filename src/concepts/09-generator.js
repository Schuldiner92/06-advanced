
/**
 * 
 * @param {HTMLDivElement} element 
 * 
 */
export const generatorFunctionsComponent = (element) =>{

    // const myGenerator = myFirstGeneratorFunction();
    // console.log(myGenerator.next());
    
    const genId = idGenerator();

    const button = document.createElement('button');
    button.innerText = 'Click 0';
    element.append(button);

    const renderButton = () => {
        const {value} = genId.next();
        button.innerText = `Click ${value}`;
    }

    button.addEventListener('click', renderButton);

}

function* idGenerator(){
    let currentId = 0;
    while(true){
        yield ++currentId;
    }
}

function* myFirstGeneratorFunction(){

    yield 'Primer valor';
    yield '2 valor';
    yield '3 valor'; 
    yield '4 valor';

    return 'Ya no hay valores';
    yield 'Ya no pueden hacer nada';

}