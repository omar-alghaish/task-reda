import { filterOptions, filterOptionsIdeas } from './filterOptions.js';
import { createFilterOptions } from './filterUtils.js';

export const applayFilters = () => {
    const container = document.querySelector(".filter-options");
    const generalButton = document.getElementById("generalButton");
    const ideasButton = document.getElementById("ideasButton");
  
    function toggleFilterOptions(filterType) {
      container.innerHTML = "";
  
      generalButton.classList.remove("active");
      ideasButton.classList.remove("active");
  
      if (filterType === "general") {
        generalButton.classList.add("active");
        createFilterOptions(filterOptions, container); 
      } else {
        ideasButton.classList.add("active");
        createFilterOptions(filterOptionsIdeas, container); 
      }
    }
  
    toggleFilterOptions("general");
  
    generalButton.addEventListener("click", () => toggleFilterOptions("general"));
    ideasButton.addEventListener("click", () => toggleFilterOptions("ideas"));
  };
