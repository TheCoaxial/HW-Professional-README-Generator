// function to generate markdown for README
function generateMarkdown(data) {
  return`                   # ${data.title} 
  
  ## Description
    ${data.description}  
  
  ## Usage
    ${data.usage}
    
  ## Install
    ${data.install}   
    
  ## License
    ${data.license}
  
  ## How to contribute
    ${data.contribute}
    
  ## Questions?
    ${data.github}
    ${data.email}

  `;
}

module.exports = generateMarkdown;
