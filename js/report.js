db.collection('guides').onSnapshot(snapshot => {
            setupGuides(snapshot.docs);
          });
          
    

  //create user
  const createForm = document.querySelector('#create-form');
  createForm.addEventListener('submit',(e) => {
      e.preventDefault();
      db.collection('guides').add({
          Date: createForm['Date'].value,
          Symptoms: createForm['Symptoms'].value,
          Prescription: createForm['Prescription'].value

      }).then(() =>{
          const modal = document.querySelector('#modal-create');
          M.Modal.getInstance(modal).close();
          createForm.reset();
      }).catch(err => {
          console.log(err.message)
      })
  })

  