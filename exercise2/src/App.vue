<template>

  <h2>Exercise 2</h2>
  <h4>Statement</h4>
  <div class="statement">
    <p>
      The code behind this page should display a paginated list of
      people sorted by name. It contains common coding mistakes.
    </p>
    <p>
      Please update the files <span class="code">App.vue</span> and
      <span class="code">components/List.vue</span> in order to get
      rid of the errors (console and eslint), and make sure the
      solution works properly.
    </p>
  </div>
  <h4>Solution</h4>
  <div class="solution">
    <List :data="paginatedData" :options="options" ></List>
    <div class="pagination">
      <ul>
        <li :class="{disabled: currentPage === 0}" @click="changePage(currentPage-1)">&lt;</li>
        <li v-for="p in pages" :key="p" :class="{active: p === currentPage}" @click="changePage(p)">{{ p + 1 }}</li>
        <li :class="{disabled: currentPage === pages.length - 1}" @click="changePage(currentPage+1)">&gt;</li> 
      </ul>
    </div>
  </div>

</template>

<script>

  import List from './components/List';

  export default {
    name: 'App',
    components: {List},
    data: ()=>{
      return {
        people: [],
        options: {pagination: {limit: 10, offset: 0}},
      };
    },
    created() {
      fetch('https://suade.org/filehosting/challenges/people.json')
        .then((response) =>{
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
         
        })
        .then((data) =>{
          //  console.log(data)
          this.people = data;
        })
        .catch(error => console.error('Error fetching people data:', error));
    },
    computed: {
      sortedData() {
        //    console.log(this.people)
        // create a copy of the data array before sorting
        return [...this.people].sort((a, b)=>{
          if (a.name < b.name) {
            return -1;
          } else if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
      },
      // paginate data
      paginatedData() {
        return this.sortedData.slice(this.options.pagination.offset, this.options.pagination.offset + this.options.pagination.limit);
      },
      // list of pages to display
      pages() {
        return new Array(Math.ceil(this.people.length / this.options.pagination.limit))
          .fill()
          .map((v, i)=>i);
      },
      // currently displayed page
      currentPage() {
        return (this.options.pagination.offset / this.options.pagination.limit);
      },
    },
    methods: {
      changePage(page) {
        this.options.pagination.offset = (page) * this.options.pagination.limit;
      },
    },
  };

</script>

<style lang="scss">

.statement, .solution {
  border: 1px solid #dedede;
  padding: 0 0.5em;
  min-height: 40px;

  .code {
    color: #434343;
    background-color: #f9f9f9;
    padding: 0 5px;
  }
}



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
        cursor: pointer;
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
