import { defineAsyncComponent } from 'vue';
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <span class="text-success fs-3 fw-bold mx-2">5696NKR</span>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <span class="fs-3">13 Marzo 2022</span>
        </ul>
        <div class="d-flex">
          <button class="btn btn-danger mx-2">
            Borrar
            <i class="fa fa-trash-alt"></i>
          </button>
          <button class="btn btn-primary">
            Subir Foto
            <i class="fa fa-upload"></i>
          </button>
        </div>
      </div>
    </div>
  </nav>
  <hr />
  <!-- Formulario: -->
  <div class="container formulario-scrollarea row">
    <div class="d-flex flex-column px-3 h-75 col-md-6">
      <form id="registrar-mantenimiento-form">
        <div class="mb-3">
          <label for="iFecha" class="form-label">Fecha:</label>
          <input type="date" class="form-control" id="iFecha" />
        </div>

        <div class="mb-3">
          <label for="iPlaca" class="form-label">Placa:</label>
          <input type="text" class="form-control" id="iPlaca" />
        </div>

        <div class="mb-3">
          <label for="iCantLubMotor" class="form-label">
            Cant. aceite motor:
          </label>
          <div class="flex d-flex">
            <input type="number" class="form-control" id="iCantLubMotor" />
            <div class="col-auto">
              <select class="form-select" aria-label="Default select example">
                <option selected>L</option>
                <option value="1">QT</option>
              </select>
            </div>
          </div>
        </div>

        <div class="mb-3">
          <label for="iAceiteMotor" class="form-label">
            Tipo de aceite de motor:
          </label>
          <input type="text" class="form-control" id="iAceiteMotor" />
        </div>

        <div class="row">
          <div class="mb-3 col-md-6">
            <label for="iFAceite" class="form-label">Filtro de aceite:</label>
            <input type="text" class="form-control" id="iFAceite" />
          </div>

          <div class="mb-3 col-md-6">
            <label for="iFCombustible" class="form-label"
              >Filtro de combustible:</label
            >
            <input type="text" class="form-control" id="iFCombustible" />
          </div>
        </div>

        <div class="row">
          <div class="mb-3 col-md-6">
            <label for="iFAire" class="form-label">Filtro de aire:</label>
            <input type="text" class="form-control" id="iFAire" />
          </div>

          <div class="mb-3 col-md-6">
            <label for="iFCabina" class="form-label">Filtro de cabina:</label>
            <input type="text" class="form-control" id="iFCabina" />
          </div>
        </div>

        <!-- Transmisiones -->
        <p>
          <a
            class="btn btn-primary"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Transmisiones
          </a>
        </p>
        <div class="collapse" id="collapseExample">
          <div class="card card-body">

            <!-- Inputs -->
            <div class="row">
              <div class="mb-3 col-md-6">
                <label for="iDifTrasero" class="form-label">Dif. Trasero:</label>
                <input type="text" class="form-control" id="iDifTrasero" />
              </div>

              <div class="mb-3 col-md-6">
                <label for="iRoster" class="form-label">Roster:</label>
                <input type="text" class="form-control" id="iRoster" />
              </div>
            </div>

            <div class="row">
              <div class="mb-3 col-md-6">
                <label for="iCaja" class="form-label">Caja de cambios:</label>
                <input type="text" class="form-control" id="iCaja" />
              </div>

              <div class="mb-3 col-md-6">
                <label for="iDifDelantero" class="form-label">Dif. Delantero:</label>
                <input type="text" class="form-control" id="iDifDelantero" />
              </div>
            </div>
            <!-- Fin de los inputs -->

          </div>
        </div>
        <!-- Fin de Transmisiones -->
        
        <!-- Otros -->
        <p class="mt-3">
          <a
            class="btn btn-primary"
            data-bs-toggle="collapse"
            href="#collapseOtros"
            role="button"
            aria-expanded="false"
            aria-controls="collapseOtros"
          >
            Otros
          </a>
        </p>
        <div class="collapse" id="collapseOtros">
          <div class="card card-body">
            <!-- Inputs -->
              <div class="mb-3">
                <label for="iRadiador" class="form-label">Líquido para radiador:</label>
                <input type="text" class="form-control" id="iRadiador" />
              </div>

              <div class="mb-3">
                <label for="iDireccion" class="form-label">Dirección:</label>
                <input type="text" class="form-control" id="iDireccion" />
              </div>

              <div class="mb-3">
                <label for="iFreno" class="form-label">Líquidos de freno y embrague:</label>
                <input type="text" class="form-control" id="iFreno" />
              </div>

              <div class="mb-3">
                <label for="iOtros" class="form-label">Otros:</label>
                <input type="text" class="form-control" id="iOtros" />
              </div>
            <!-- Fin de los inputs -->
          </div>
        </div>
        <!-- Fin de Transmisiones -->

        

        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="cbBateria"
          />
          <label class="form-check-label" for="cbBateria"> Agua bateria </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="cbParabrisas"
            checked
          />
          <label class="form-check-label" for="cbParabrisas">
            Agua parabrisas
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="cbEngrase"
            checked
          />
          <label class="form-check-label" for="cbEngrase"> Engrase </label>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>

  <!-- Fin del formulario -->

  <Fab 
      icon="fa-save"
  />
</template>

<script>
import {defineAsyncComponent} from 'vue'
export default {
    components:{
      Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
    }
};
</script>

<style lang="scss" scoped>
.formulario-scrollarea {
  height: calc(100vh - 110px);
  overflow-y: scroll;
}
</style>
>
