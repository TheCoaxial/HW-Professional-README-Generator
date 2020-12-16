// function to generate markdown for README
function generateMarkdown(data) {
  return`# ${data.title} 
    ${data.license}
  |Table of Contents
  | ----------------- |
  | Description       |
  | Usage             |
  | License           |
  | Install           |
  | How to Contribute |
  | Tests             |
  | Questions?        |

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

  ## Tests required
  ${data.tests}
    
  ## Questions?
  ${data.github}
  ${data.email}

  `;
}

module.exports = generateMarkdown;
