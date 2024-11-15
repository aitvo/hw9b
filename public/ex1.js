document.getElementById('sampleForm').addEventListener('submit', function(event) { // waits for form to submit
  event.preventDefault(); // prevents from reload

  const tableBody = document.getElementById('dataTable').querySelector('tbody');
  tableBody.innerHTML = ''; // clears out data table after every submission

  //  FormData object
  const formData = new FormData(this); // grab all data from form (form = this)

  // loop thorugh form
  formData.forEach((value, key) => {
    const row = document.createElement('tr'); // table row
    const keyCell = document.createElement('td'); // table data
    const valueCell = document.createElement('td');

    keyCell.textContent = key;
    valueCell.textContent = value;

    row.appendChild(keyCell);
    row.appendChild(valueCell);
    tableBody.appendChild(row);
  });
});
