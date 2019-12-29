export default {
  name: 'Poissons',
  data () {
  return {
    info : null
  }
},

mounted () {
    this.axios.get('http://localhost:8080/rest/bd/poisson/listePoissons').then(
    response => (this.info = response.data
    )
    )},

  methods: {
      // Mettre une ligne sur deux en orange
      tableRowClassName({rowIndex}) {
        if (rowIndex % 2 === 0) {
          return 'warning-row';
        } else {
          return '';
        }
      },

      swapComponent(component){
        this.$emit('swap-component', component)
      }
    }
  }