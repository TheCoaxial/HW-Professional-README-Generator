// function to generate markdown for README
function generateMarkdown(data) {
  return`# ${data.title} 
    ${data.license}
  |Table of Contents
  | ----------------- |
  | [Description](https://github.com/TheCoaxial/HW-Professional-README-Generator#description)       |
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
  Github: https://github.com/${data.github}

  If you have any additional questions please email me at
  Email: ${data.email}

  `;
}

module.exports = generateMarkdown;
