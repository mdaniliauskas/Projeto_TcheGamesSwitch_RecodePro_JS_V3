
function exibirCategoria(categoria){ 
    
    let produtos = document.getElementsByClassName("listaProdutos");        

    for(i = 0; i < produtos.length; i++){

        if(categoria == produtos[i].id)
            
            produtos[i].style = "display: inline-table";       

        else

        produtos[i].style = "display: none";   
    }    
}


let exibirTodos = () => {

    let produtos = document.getElementsByClassName("listaProdutos");    

    for(i = 0; i < produtos.length; i++){
        
        produtos[i].style = "display: inline-table;";
    }   
}


let zoomIn = (imagem) => {
    
    imagem.width = 240;
}


let zoomOut = (imagem) => {
    
    imagem.width = 120;
}

