// export default {
//   sortByAge(a, b) {
//     return a.age - b.age;
//   },
//   filterByAge(ageMin, ageMax) {
//     return (item)=>(item.age >= ageMin && item.age <= ageMax);
//   },
// };


export const sortByAge= (a, b) => {
  return a.age - b.age;
};
export const filterByAge= (ageMin, ageMax) =>{
  return (item)=>(item.age >= ageMin && item.age <= ageMax);
};