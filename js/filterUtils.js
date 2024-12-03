import { displayArticle } from "./displayArticle.js";
let activeArticle ;
export function createFilterOptions(options, parentElement, level = 0) {
  options.forEach((option) => {
    const optionElement = document.createElement("div");
    optionElement.className = "option";

    const titleElement = document.createElement("div");
    titleElement.className = `option-title ${getOptionTitleClass(level)}`;
    optionElement.appendChild(titleElement);

    const title = document.createElement("div");
    title.className = "title";

    if (option.iconClass) {
      const icon = document.createElement("i");
      icon.className = option.iconClass;
      title.appendChild(icon); 
    }

    title.appendChild(document.createTextNode(option.title)); 

    titleElement.appendChild(title); 

    let toggleIcon = null;
    let childContainer = null;
    if (option.children) {
      toggleIcon = document.createElement("i");
      toggleIcon.className = "fa-solid fa-plus toggle-icon";
      titleElement.appendChild(toggleIcon);

      childContainer = document.createElement("div");
      childContainer.className = "children hidden";
      createFilterOptions(option.children, childContainer, level + 1); 
      optionElement.appendChild(childContainer);
    }

    optionElement.addEventListener("click", (event) => {
      event.stopPropagation(); 
      if (option.content) {
        activeArticle = option;
        displayArticle(option.content); 
      } else if (option.children) {
        const siblingContainers = parentElement.querySelectorAll(".children");
        siblingContainers.forEach((sibling) => {
          if (sibling !== childContainer) {
            sibling.classList.add("hidden");
            sibling.previousElementSibling
              .querySelector(".toggle-icon")
              ?.classList.replace("fa-minus", "fa-plus");
            sibling.previousElementSibling.classList.remove("active");
          }
        });
    
        if (childContainer) {
          childContainer.classList.toggle("hidden");
    
          if (toggleIcon) {
            toggleIcon.classList.toggle("fa-plus");
            toggleIcon.classList.toggle("fa-minus");
          }
    
          titleElement.classList.toggle("active");
        }
      }
    });
    

    parentElement.appendChild(optionElement);
  });
}

function getOptionTitleClass(level) {
  switch (level) {
    case 0:
      return "parent"; 
    case 1:
      return "sub-parent"; 
    case 2:
      return "child"; 
    default:
      return "child"; 
  }
}