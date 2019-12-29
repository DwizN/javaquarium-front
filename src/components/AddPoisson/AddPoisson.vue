<template>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <h1 class="mb-3">Ajout d'une nouvelle espèce</h1>
                <el-input class="py-1" placeholder="Entrez un nom.." v-model="form.nom" clearable name="nom"><template class="om" slot="prepend">Nom : </template></el-input>
                <span>{{ errors.first('nom') }}</span>
                <el-input class="py-1" placeholder="Entrez une description.." v-model="form.description" clearable><template slot="prepend">Description : </template></el-input>
                <el-input class="py-1" placeholder="Entrez une couleur.." v-model="form.couleur" clearable><template slot="prepend">Couleur : </template></el-input>
                <el-input class="py-1" type="number" step="0.01" placeholder="Entrez une largeur.." v-model="form.largeur" clearable><template slot="prepend">Largeur : </template></el-input>
                <el-input class="py-1" type="number" step="0.01" placeholder="Entrez une longueur.." v-model="form.longueur" clearable><template slot="prepend">Longueur : </template></el-input>
                <el-input class="py-1" type="number" step="0.01" placeholder="Entrez un prix.." v-model="form.prix" clearable><template slot="prepend">Prix : </template></el-input>
                <el-button class="mt-2" @click="addFish()" type="warning" icon="el-icon-plus">Ajouter un poisson</el-button>
                <el-button class="mt-2" @click="reset()" type="success">Reset</el-button>
                <el-button class="float-right mt-2" @click.native="swapComponent('Poissons')" type="danger">Retour</el-button>
            </div>
            <div class="col-6">
                <img src="../../assets/image.jpg" width=500/>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript" src="./AddPoisson.js"></script>
<style>
  .el-input-group__prepend {
    width : 125px!important;
}
</style>