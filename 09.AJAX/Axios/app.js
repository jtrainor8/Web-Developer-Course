// axios.get("https://swapi.dev/api/people/2/")
// .then(res => {
//   console.log("response: ", res)
// })
// .catch (e => {
//   console.log("error", e)
// });


const getStarWarsPerson = async (id) => {
  try { 
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(res.data);
  } catch (e) {
    console.log("error", e);
  }

}

getStarWarsPerson(2);
getStarWarsPerson(10);