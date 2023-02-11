async function listBooks(){

    let response = await fetch ('http://localhost:3001/listBooks')
    
    
    
    let books = await response.json()
    
    books.forEach(newbook)
    }
    
