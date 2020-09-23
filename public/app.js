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
addForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  await db.collection("cafes").add({
    name: addForm["name"].value,
    city: addForm["city"].value,
  });
  addForm.reset();
});

const deleteCafe = (docId) => db.collection("cafes").doc(docId).delete();
