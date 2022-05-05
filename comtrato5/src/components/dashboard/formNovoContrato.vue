<template>

    <form class="container  mt-5 g-3 ">
        <h3>Cadastro de novo contrato</h3>
        <div class="">
            <div class="displayFlex">
                <select class="form-select mb-3" aria-label="example">
                    <option selected>Safra</option>
                    <option value="1">21/22</option>
                    <option value="2">22/22</option>
                    <option value="3">22/23</option>
                </select>
                <select class="form-select form mb-3" aria-label=" example">
                    <option selected>Cultura</option>
                    <option value="1">Soja</option>
                    <option value="2">Milho</option>
                    <option value="3">Arroz</option>
                </select>
                <select class="form-select form mb-3" aria-label=" example">
                    <option selected>Operação</option>
                    <option value="1">Compra</option>
                    <option value="2">Venda</option>
                    <option value="3">Armazenagem</option>
                </select>
            </div>
            <div class="row">
                <div class="col">
                    <label for="exampleInputEmail1" class="form-label ">Vendedor:</label>
                    <input type="text" class="form-control"  >
                </div>
                <div class="col">
                    <label for="exampleInputEmail1" class="form-label ">Local/Inscrição:</label>
                    <input type="text" class="form-control"  >
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <label for="exampleInputEmail1" class="form-label ">Comprador:</label>
                    <input type="text" class="form-control"  >
                </div>
                <div class="col">
                    <label for="exampleInputEmail1" class="form-label ">Local/Inscrição:</label>
                    <input type="text" class="form-control"  >
                </div>
            </div>
            <div class="">
                <div class="row d-flex justify-content-center">
                    <h4 class="mt-3">Tolerâncias</h4>
                    <div class="col form-label">
                        <label for="exampleInputEmail1" class="form-label ">Umidade: </label>
                        <input type="text" class="form-control"  >
                    </div>
                    <div class="col form-label">
                        <label for="exampleInputEmail1" class="form-label ">Impureza:</label>
                        <input type="text" class="form-control"  >
                    </div>
                    <div class="col form-label">
                        <label for="exampleInputEmail1" class="form-label ">Avariados:</label>
                        <input type="text" class="form-control"  >
                    </div>
                    <div class="col form-label">
                        <label for="exampleInputEmail1" class="form-label ">Quebrados:</label>
                        <input type="text" class="form-control"  >
                    </div>
                    <div class="col form-label">
                        <label for="exampleInputEmail1" class="form-label ">Esverdeados:</label>
                        <input type="text" class="form-control"  >
                    </div>
                </div>
                
                <div class="row d-flex justify-content-center">
                    <h4 class="mt-3">Valores</h4>
                        <div class="col form-label">
                            <label for="exampleInputEmail1" class="form-label ">Quantidade (Kgs):</label>
                            <input type="text" class="form-control"  >
                        </div>
                        <div class="col form-label">
                            <label for="exampleInputEmail1" class="form-label ">Vlr. Unt. por Kg:</label>
                            <input type="text" class="form-control"  >
                        </div>
                        <div class="col form-label">
                            <label for="exampleInputEmail1" class="form-label ">Qtd. Sacas:</label>
                            <input type="text" class="form-control"  >
                        </div>
                        <div class="col form-label">
                            <label for="exampleInputEmail1" class="form-label ">Vlr. Sacas:</label>
                            <input type="text" class="form-control"  >
                        </div>
                        <div class="col form-label">
                            <label for="exampleInputEmail1" class="form-label ">Vlr. Total:</label>
                            <input type="text" class="form-control"  >
                        </div>
                </div>

                <div>
                    <hr>
                    <h4 class="mt-3">Transporte</h4>
                    <div class="d-flex">
                        <div class="col-2">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                <label class="form-check-label" for="flexRadioDefault1">
                                    CIF
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                                <label class="form-check-label" for="flexRadioDefault2">
                                    FOB
                                </label>
                            </div>
                        </div>

                        <div class="col-6">
                            <label for="exampleInputEmail1" class="form-label ">Transportadora:</label>
                            <input type="text" class="form-control"  >
                        </div>

                    </div>
                </div>


            </div>
            <div class="d-flex justify-content-between">
                <router-link to="Dashboard" class="btn">Voltar</router-link>
                <button class="btn btn-success mt-3" type="submit">Cadastrar</button>
            </div>
        </div>
        
    </form>
</template>

<script>

export default {
    nome: 'formNovoContrato',
    

   
}
</script>

<style>
.displayFlex{
    display: flex;
}
.testeBG{
    background-color: antiquewhite;
}

</style>