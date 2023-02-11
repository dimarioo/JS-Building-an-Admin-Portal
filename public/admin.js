async function listBooks(){

    let response = await fetch ('http://localhost:3001/listBooks')
    
    
    
    let books = await response.json()
    
    books.forEach(newbook)
    }
    function newbook(book){
    
        let root = document.querySelector('#root')
        
        let list = document.createElement('li')
        list.textContent = book.title 
        
        let quantityretr = document.createElement('input')
        quantityretr.value = book.quantity
        
        let save = document.createElement('button')
        save.textContent = 'Save'
        
        save.addEventListener('click', () => {
            fetch('http://localhost:3001/updateBook', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: book.id,
                    quantity: quantityretr.value
                })
            })
        })
        list.append(quantityretr,save)
        root.append(list)
        
        }
        
        listBooks()
