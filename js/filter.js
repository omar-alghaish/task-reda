import { filterOptions, filterOptionsIdeas } from "./filterOptions.js";

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


const displayArticle = (data) => {
  const articleContent = document.querySelector(".article-content");
  
  articleContent.innerHTML = ""; 

  const articleContainer = document.createElement("div");
  articleContainer.className = "article";

  const titleElement = document.createElement("h1");
  titleElement.textContent = data.title;
  articleContainer.appendChild(titleElement);

  const dateElement = document.createElement("p");
  dateElement.className = "date";
  dateElement.textContent = "اخر تحديث في" + data.date;
  articleContainer.appendChild(dateElement);

  data.sections.forEach((section) => {
    let sectionElement;
    switch (section.type) {
      case "intro":
        sectionElement = document.createElement("p");
        sectionElement.className = "intro";
        sectionElement.textContent = section.content;
        break;

      case "list":
        sectionElement = document.createElement("div");
        sectionElement.className = "list-section";

        const listTitle = document.createElement("h2");
        listTitle.textContent = section.title;
        sectionElement.appendChild(listTitle);

        const ul = document.createElement("ul");
        section.items.forEach((item) => {
          const li = document.createElement("li");
          
          if (item.image) {
            const img = document.createElement("img");
            img.src = item.image;
            img.alt = "Image for " + item.text;
            li.appendChild(img);
          }

          const span = document.createElement("span");
          span.textContent = item.text;
          li.appendChild(span);

          ul.appendChild(li);
        });
        sectionElement.appendChild(ul);
        break;

      case "steps":
        sectionElement = document.createElement("div");
        sectionElement.className = "steps-section";

        const stepsTitle = document.createElement("h2");
        stepsTitle.textContent = section.title;
        sectionElement.appendChild(stepsTitle);

        const ol = document.createElement("ol");
        section.items.forEach((step) => {
          const li = document.createElement("li");
          
          if (step.image) {
            const img = document.createElement("img");
            img.src = step.image;
            img.alt = "Image for " + step.text;
            li.appendChild(img);
          }

          const span = document.createElement("span");
          span.textContent = step.text;
          li.appendChild(span);

          ol.appendChild(li);
        });
        sectionElement.appendChild(ol);
        break;

      case "image":
        sectionElement = document.createElement("img");
        sectionElement.src = section.src;
        sectionElement.alt = section.alt;
        break;

      case "faq":
        sectionElement = document.createElement("div");
        sectionElement.className = "faq-section";

        const faqTitle = document.createElement("h2");
        faqTitle.textContent = section.title;
        sectionElement.appendChild(faqTitle);

        section.items.forEach((faq) => {
          const faqContainer = document.createElement("div");
          faqContainer.className = "faq";

          const question = document.createElement("strong");
          question.textContent = faq.question;
          faqContainer.appendChild(question);

          const answer = document.createElement("p");
          answer.textContent = faq.answer;
          faqContainer.appendChild(answer);

          sectionElement.appendChild(faqContainer);
        });
        break;

      case "related":
        sectionElement = document.createElement("div");
        sectionElement.className = "related-section";

        const relatedTitle = document.createElement("h2");
        relatedTitle.textContent = section.title;
        sectionElement.appendChild(relatedTitle);

        const relatedList = document.createElement("ul");
        section.links.forEach((link) => {
          const li = document.createElement("li");
          const a = document.createElement("a");
          a.href = link.href;
          a.textContent = link.text;
          li.appendChild(a);
          relatedList.appendChild(li);
        });
        sectionElement.appendChild(relatedList);
        break;

      default:
        break;
    }

    if (sectionElement) {
      articleContainer.appendChild(sectionElement);
    }
  });

  articleContent.appendChild(articleContainer);
};
