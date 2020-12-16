// function to generate markdown for README
function generateMarkdown(data) {
  return`# ${data.title} 
    ${data.license}

  ## Description
  ${data.description}  
  
  ## Usage
  ${data.usage}

  ## License
  ${data.licenseInfo}
    
  ## Install
  ${data.install}   
    
  ## How to contribute
  ${data.contribute}
    
  ## Questions?
  ${data.github}
  ${data.email}

  `;
}

module.exports = generateMarkdown;
