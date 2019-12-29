<template>
<div class="container">
  <div class="row">
    <div class="col-12">
  <el-table
    :data="this.info"
    style="width: 100%"
    border
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="nom"
      label="Nom"
      width="180">
    </el-table-column>
    <el-table-column
      prop="description"
      label="Description">
    </el-table-column>
    <el-table-column
      width="120"
      prop="couleur"
      label="Couleur">
    </el-table-column>
    <el-table-column
    label="Dimensions"
    width="150">
       <template slot-scope="scope">
         <div>{{scope.row.longueur}} x {{scope.row.largeur}}</div>
       </template>
    </el-table-column>
    <el-table-column
      prop="prix"
      label="Prix"
      width="120">
    </el-table-column>
  </el-table>
</div>
  <div class="col-12 mt-4">
    <el-button type="warning" icon="el-icon-plus" @click.native="swapComponent('AddPoisson')">Ajouter un poisson</el-button>
    </div>
  </div>
  </div>
</template>

<script type="text/javascript" src="./Poissons.js"></script>

<style>
  .el-table .warning-row {
    background: PeachPuff;
  }
</style>

