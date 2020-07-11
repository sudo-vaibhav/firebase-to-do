var db = firebase.firestore();

db.collection("cafes").onSnapshot((snapshot) => {
  let list = ``;
  snapshot.forEach((doc) => {
    const docData = doc.data();
    list += `<li>
            <span>${docData.name}</span>
            <span>${docData.city}</span>
            <div onClick="deleteCafe('${doc.id}')">x</div>
        </li>`;
  });
  document.querySelector("#cafe-list").innerHTML = list;
});

const addForm = document.querySelector("#add-cafe-form");
addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  db.collection("cafes")
    .add({
      name: addForm["name"].value,
      city: addForm["city"].value,
    })
    .then(() => {
      addForm.reset();
    });
});

function deleteCafe(docId) {
  db.collection("cafes")
    .doc(docId)
    .delete()
    .then(() => {});
}
