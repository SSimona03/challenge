<template>
  <ul >
    <li v-for="item in data" :key="item._id" >
      {{ item.name }}
    </li>
  </ul>
</template>

<script>

  export default {
    name: 'List',
    props: {
      data: {type: Array, default: ()=>[]},
      // options: {type: Object, default: ()=>({limit: 25, offset: 0})},
    },
    // created() {
    //   console.log('Received props:', this.options.pagination);
    // },
    computed: {
      // sort data by name
      // sortedData() {
      //   // console.log('Received props:', this.data);
      //   // create a copy of the data array before sorting
      //   return [...this.data].sort((a, b)=>{
      //     if (a.name < b.name) {
      //       return -1;
      //     } else if (a.name > b.name) {
      //       return 1;
      //     }
      //     return 0;
      //   });
      // },
      // // paginate data
      // paginatedData() {
      //   return this.sortedData.slice(this.options.pagination.offset, this.options.pagination.offset + this.options.pagination.limit);
      // },
      // // list of pages to display
      // pages() {
      //   return new Array(Math.ceil(this.data.length / this.options.pagination.limit))
      //     .fill()
      //     .map((v, i)=>i);
      // },
      // // currently displayed page
      // currentPage() {
      //   return (this.options.pagination.offset / this.options.pagination.limit);
      // },
    },
    // methods: {
    //   changePage(page) {
    //     this.options.pagination.offset = (page) * this.options.pagination.limit;
    //   },
    // },
  };

</script>

<style scoped lang="scss">

  .pagination ul {
    list-style: none;
    user-select: none;

    li {
      display: inline-block;
      padding: 0 4px;
      cursor: pointer;
      color: #888;

      &:hover {
        color: #000;
        font-weight: bold;
      }
      &.active{
        color: #000;
        font-weight: bold;
        pointer-events:none;
      }
      &.disabled {
        color: #ddd;
        pointer-events:none;
      }
    }
  }

</style>
