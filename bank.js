function populateStates() {
    const bankSelect = document.getElementById("bankSelect");
    const stateSelect = document.getElementById("stateSelect");
  
    stateSelect.innerHTML = '<option value="">Select state</option>';
    document.getElementById("districtSelect").innerHTML = '<option value="">Select district</option>';
    document.getElementById("branchSelect").innerHTML = '<option value="">Select branch</option>';
  
    if (bankSelect.value === "bank1") {
      // Populate states for Bank 1
      const states = ["State A", "State B", "State C"];
      states.forEach(state => {
        const option = document.createElement("option");
        option.value = state;
        option.text = state;
        stateSelect.appendChild(option);
      });
    } else if (bankSelect.value === "bank2") {
      // Populate states for Bank 2
      const states = ["State X", "State Y", "State Z"];
      states.forEach(state => {
        const option = document.createElement("option");
        option.value = state;
        option.text = state;
        stateSelect.appendChild(option);
      });
    }
  }
  
  function populateDistricts() {
    const stateSelect = document.getElementById("stateSelect");
    const districtSelect = document.getElementById("districtSelect");
  
    districtSelect.innerHTML = '<option value="">Select district</option>';
    document.getElementById("branchSelect").innerHTML = '<option value="">Select branch</option>';
  
    const selectedState = stateSelect.value;
    if (selectedState === "State A") {
      // Populate districts for State A
      const districts = ["District 1", "District 2", "District 3"];
      districts.forEach(district => {
        const option = document.createElement("option");
        option.value = district;
        option.text = district;
        districtSelect.appendChild(option);
      });
    } else if (selectedState === "State B") {
      // Populate districts for State B
      const districts = ["District X", "District Y", "District Z"];
      districts.forEach(district => {
        const option = document.createElement("option");
        option.value = district;
        option.text = district;
        districtSelect.appendChild(option);
      });
    }
  }
  
  function populateBranches() {
    const districtSelect = document.getElementById("districtSelect");
    const branchSelect = document.getElementById("branchSelect");
  
    branchSelect.innerHTML = '<option value="">Select branch</option>';
  
    const selectedDistrict = districtSelect.value;
    if (selectedDistrict === "District 1") {
      // Populate branches for District 1
      const branches = ["Branch Alpha", "Branch Beta", "Branch Gamma"];
      branches.forEach(branch => {
        const option = document.createElement("option");
        option.value = branch;
        option.text = branch;
        branchSelect.appendChild(option);
      });
    } else if (selectedDistrict === "District 2") {
      // Populate branches for District 2
      const branches = ["Branch X", "Branch Y", "Branch Z"];
      branches.forEach(branch => {
        const option = document.createElement("option");
        option.value = branch;
        option.text = branch;
        branchSelect.appendChild(option);
      });
    }
  }
  