// function to generate markdown for README
function generateMarkdown(data) {
  return`# ${data.title} 
    ${data.license}
  |Table of Contents
  | -----------------                                                                                     |
  | [Description](https://github.com/TheCoaxial/HW-Professional-README-Generator#description)             |
  | [Usage](https://github.com/TheCoaxial/HW-Professional-README-Generator#usage)                         |
  | [License](https://github.com/TheCoaxial/HW-Professional-README-Generator#license)                     |
  | [Install](https://github.com/TheCoaxial/HW-Professional-README-Generator#install)                     |
  | [How to Contribute](https://github.com/TheCoaxial/HW-Professional-README-Generator#how-to-contribute) |
  | [Tests](https://github.com/TheCoaxial/HW-Professional-README-Generator#tests-required)                |
  | [Questions?](https://github.com/TheCoaxial/HW-Professional-README-Generator#questions)                |

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
