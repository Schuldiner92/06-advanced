
/**
 * 
 * @param {HTMLDivElement} element 
 * 
 */
export const environmentsComponent = (element) =>{

    console.log(import.meta.env);

    const html= `
        Mode: ${import.meta.env.MODE} <br/>
        Dev: ${import.meta.env.DEV} <br/>
        Prod: ${import.meta.env.PROD} <br/>
        KEY: ${import.meta.env.VITE_API_KEY} <br/>
        URL: ${import.meta.env.VITE_BASE_URL} <br/>
    `;
    element.innerHTML = html;
}