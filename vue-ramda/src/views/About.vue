<template>
  <!-- 是views还是component主要是看路由端的匹配 -->
  <div class="about">
    <h1>This is an about page</h1>
    {{data}}
  </div>
</template>



<script>
export default {
  data(){
    return {
      data:'',
    }
  },
  mounted(){
    

  },
  created(){
    var gro = (student)=>{
    var score = student.score;
    return  score < 65 ? 'F':
            score < 70 ? 'E':
            score < 80 ? 'C':
            score < 90 ? 'B':'A';
    };

    var students = [{name: 'Abby', score: 84},
                  {name: 'Eddy', score: 58},
                  {name: 'Jack', score: 69}];


    console.log("R.groupBy:",R.groupBy(gro)(students));
    this.data = R.groupBy(gro)(students);
    
  },


  methods:{

  },
  filters:{

  },
  computed:{

  }
}
</script>

<style lang="scss" scoped>

</style>
