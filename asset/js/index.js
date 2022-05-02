$("#getCodeModal").click('show');

var opcion;

$("input[name=flexRadioDefault]").change(function() {

    opcion = ($(this).val());
    console.log(opcion)
})

function buscar(letra) {
    console.log("estoy buscar tragos con letra " + letra)

    $.ajax({
        type: "GET",
        url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" + letra,
        Headers: {
            'Access-Control-Allow-Origin': '*',
        },
        dataType: "json",

        success: function(datos) {
            var selector = $("#selector").html("");
            var container = $("#contenedor").html("");

            // console.log(datos.drinks)
            //RECORRIENDO ELEMENTOS DE DATOS. Y MOSTRANDO EN UNA CARDS


            console.log(opcion);
            var opcionTrago;
            if (opcion == 1) {
                opcionTrago = "Alcoholic"
            } else if (opcion == 2) {
                opcionTrago = "Non Alcoholic"
            } else if (opcion == 3) {
                opcionTrago = "todos"
            }


            datos.drinks.forEach((element, indice) => {
                // console.log(element.strDrink)
                // console.log(element)
                if ((opcionTrago == element.strAlcoholic) || opcionTrago == "todos") {

                    console.log(element);
                    selector.append(`
                    
                    <option>${element.strDrink}</option>
                    
                    `)



                    var lista = "";
                    if (element.strIngredient1 != null) {
                        lista = lista + "<li>" + element.strIngredient1 + "</li>"
                    }
                    if (element.strIngredient2 != null) {
                        lista = lista + "<li>" + element.strIngredient2 + "</li>"
                    }
                    if (element.strIngredient3 != null) {
                        lista = lista + "<li>" + element.strIngredient3 + "</li>"
                    }
                    if (element.strIngredient4 != null) {
                        lista = lista + "<li>" + element.strIngredient4 + "</li>"
                    }
                    if (element.strIngredient5 != null) {
                        lista = lista + "<li>" + element.strIngredient5 + "</li>"
                    }
                    if (element.strIngredient6 != null) {
                        lista = lista + "<li>" + element.strIngredient6 + "</li>"
                    }
                    if (element.strIngredient7 != null) {
                        lista = lista + "<li>" + element.strIngredient7 + "</li>"
                    }
                    if (element.strIngredient8 != null) {
                        lista = lista + "<li>" + element.strIngredient8 + "</li>"
                    }
                    if (element.strIngredient9 != null) {
                        lista = lista + "<li>" + element.strIngredient9 + "</li>"
                    }
                    if (element.strIngredient10 != null) {
                        lista = lista + "<li>" + element.strIngredient10 + "</li>"
                    }
                    if (element.strIngredient11 != null) {
                        lista = lista + "<li>" + element.strIngredient11 + "</li>"
                    }

                    container.append(`
                  
                      <div class="card bg-ligth" style="width: 16rem; display: inline-block;">
                      <img src="${element.strDrinkThumb}" class="card-img-top" alt="...">
                      <div class="card-body">
                       <p class="card-text" color="pink">${element.strDrink}</p>


                       <!-- Button trigger modal -->

                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop${indice}">

                        Mostrar Datos de Trago

                        </button>

                     

                        <!-- Modal -->

                        <div class="modal fade" id="staticBackdrop${indice}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">

                            <div class="modal-dialog">

                            <div class="modal-content">

                            <div class="modal-header">

                                <h5 class="modal-title" id="staticBackdropLabel">${element.strDrink}</h5>

                                <button type="button" class="btn-close" data-bs-dismiss="#staticBackdrop" aria-label="Close"></button>

                            </div>

                            <div class="modal-body">

                                <img src="${element.strDrinkThumb}" class="card-img-top w-50" alt="...">
                                <hr>
                                
                                
                                <h4>Ingredientes</h4>

                                <ul>${element.strIngredient1},${element.strIngredient2},${element.strIngredient3},${element.strIngredient4},${element.strIngredient5},${element.strIngredient6}
                                ,${element.strIngredient7}
                                ,${element.strIngredient8}
                                ,${element.strIngredient9}</ul>






                                <hr>

                                <h4>Preparacion</h4>

                                <p>${element.strInstructions}</p>

                            </div>

                            <div class="modal-footer">

                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>

                            </div>

                        </div>

                        </div>

                        </div>
                        </div>
                        </div>  
                      
                      
                  `)
                }
            });
        },
        error: function(error) {
            console.log(error)
        }
    })
}

function cargarDatos(letra) {

    console.log("estoy mostrando tragos con letra" + letra)
    
    //conexion a la api
    $.ajax({
        type: "GET",
        url: " https: //www.thecocktaildb.com/api/json/v1/1/search.php?f=" + letra,
        Headers: {
            'Access-Control-Allow-Origin': '*',
        },
        dataType: "json",


        success: function(datos) {
            console.log(datos)
        },
        error: function(error) {
            console.log(error)
        }
    })

}

