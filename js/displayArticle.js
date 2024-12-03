export const displayArticle = (data) => {
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