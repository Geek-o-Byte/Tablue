// const init = () =>{
//     const injectElement = document.createElement('div');
//     injectElement.className = 'element';
//     injectElement.innerHTML = 'Suck duck';
//     document.body.appendChild(injectElement);
// }

// init()

const table = () => {
    const extractTable = document.getElementsByTagName('table');
    const tableCount = document.createElement('div');
    tableCount.innerHTML = `Table count: ${extractTable.length}`
    document.body.appendChild(tableCount)
}

table()