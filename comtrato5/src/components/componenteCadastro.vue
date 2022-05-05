<template>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

  <div class="modal-body">
        <form class="row g-3" @submit.prevent="Register">
          <div class="col-12">
            <label for="inputNome" class="form-label textoForm">Nome completo/Fantasia</label>
            <input type="text" class="form-control" id="inputNomeFantasia" v-model="nome">
          </div>
          <div class="col-12">
            <label for="inputCpfCnpj" class="form-label textoForm">CPF/CNPJ</label>
            <input type="text" class="form-control" id="inputCpfCnpj">
          </div>
          <div class="col-md-12">
            <label for="inputEmail4" class="form-label textoForm">Email</label>
            <input type="email" class="form-control" id="inputEmail" v-model="email">
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label textoForm">Senha</label>
            <input type="password" class="form-control" id="inputSenha" v-model="password">
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label textoForm">Confirme a Senha</label>
            <input type="password" class="form-control" id="inputSenha2">
          </div>
          <div class="col-md-6">
            <label for="inputZip" class="form-label textoForm" placeholder="78.555.000">CEP</label>
            <input type="text" class="form-control" id="inputCep">
          </div>
          <div class="col-md-6">
            <label for="inputState" class="form-label textoForm">Estado</label>
            <select id="inputState" class="form-select">
              <option selected>Selecionar...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-10">
            <label for="inputEndereco" class="form-label textoForm">Endereço</label>
            <input type="text" class="form-control" id="inputEndereco" placeholder="Av. Julio Campos">
          </div>
          <div class="col-2">
            <label for="inputAddress2" class="form-label textoForm">Numero</label>
            <input type="text" class="form-control" id="inputAddress2">
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label textoForm">Bairro</label>
            <input type="text" class="form-control" id="inputBairro">
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label textoForm">Cidade</label>
            <input type="text" class="form-control" id="inputCidade">
          </div>                      
            <p>Ja possui cadastro? <router-link to="/Login">Acesse aqui</router-link></p>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            <input type="submit" value="Cadastrar-se" class="btn btn-success"/>
          </div>
        </form>
      </div>
</template>

<script>
export default {
    nome: 'componenteCadastro',
    
    data(){


      return{
        incio:"",
      }
    },
}
</script>

<style>

</style>