PersonCard

<template>
  <div class="person-card" @click="$emit('personClick', person)">
    <h4>{{ person.name }}</h4>
    <div><span>Age:</span> {{ person.age }}</div>
    <div><span>Eye Color:</span> {{ person.eyeColor }}</div>
    <div><span>Gender:</span> {{ person.gender }}</div>
  </div>
</template>

<script>
  export default {
    name: "PersonCard",
    props: {
      person: {
        type: Object,
        default: () => {},
      },
    },
    emits: ["personClick"],
  };
</script>

<style scoped>
.person-card {
  background: #e4e4e4;
  min-width: 100px;
  float: left;
  width: 300px;
  margin: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  span {
    font-weight: 700;
  }
  :hover {
    cursor: pointer;
  }
}
</style>
