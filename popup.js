const tableOfTable = document.getElementById('tableOfTable')

tableOfTable.innerHTML = '<p>Empty</p>'

chrome.storage.sync.get('hide', (data)=>{
    changeBlur.checked = data.hide
})