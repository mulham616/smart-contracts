/**
 * Credits for this goes to https://medium.com/swlh/how-to-create-a-self-updating-readme-md-for-your-github-profile-f8b05744ca91
 * many thanks to the author: Thomas Guibert (https://github.com/thmsgbrt)
 */

const Mustache = require('mustache');
const fs = require('fs');
const MUSTACHE_MAIN_DIR = './main.mustache';

const DATA = {
  preferred_stack: [
    {
      group: "IDE",
      items: [
        {
          name: "Visual Studio Code",
          encoded_name: "Visual%20Studio%20Code",
          color: "purple",
          logo: "visual-studio-code",
          logo_color: "white"
        }
      ]
    },
    {
      group: "Cloud",
      items: [
        {
          name: "Docker",
          encoded_name: "Docker",
          color: "blue",
          logo: "docker",
          logo_color: "white"
        },
        {
          name: "Heroku",
          encoded_name: "Heroku",
          color: "purple",
          logo: "heroku",
          logo_color: "white"
        },
        {
          name: "Rancher Certified",
          encoded_name: "Rancher%20Certified",
          color: "blue",
          logo: "rancher",
          logo_color: "white"
        }
      ]
    },
    {
      group: "DevOps",
      items: [
        {
          name: "Gitlab Pipelines",
          encoded_name: "Gitlab%20Pipelines",
          color: "orange",
          logo: "gitlab",
          logo_color: "white"
        },
        {
          name: "Github Actions",
          encoded_name: "Github%20Actions",
          color: "black",
          logo: "github",
          logo_color: "white"
        }
      ]
    },
    {
      group: "CDN",
      items: [
        {
          name: "Cloudflare",
          encoded_name: "Cloudflare",
          color: "yellow",
          logo: "gitlab",
          logo_color: "orange"
        }
      ]
    },
    {
      group: "Blockchain",
      items: [
        {
          name: "Solidity",
          encoded_name: "Solidity",
          color: "black",
          logo: "ethereum",
          logo_color: "green"
        },
        {
          name: "Truffle",
          encoded_name: "Truffle",
          color: "black",
          logo: "ethereum",
          logo_color: "green"
        },
        {
          name: "Ganache",
          encoded_name: "Ganache",
          color: "black",
          logo: "ethereum",
          logo_color: "green"
        }
      ]
    },
    {
      group: "Backend",
      items: [
        {
          name: "Golang",
          encoded_name: "Golang",
          color: "blue",
          logo: "go",
          logo_color: "white"
        },
        {
          name: "Goa Design framework (also maintainer)",
          encoded_name: "Goa%20Design%20framework%20(also%20maintainer)",
          color: "blue",
          logo: "go",
          logo_color: "white"
        },
        {
          name: "Redis",
          encoded_name: "Redis",
          color: "red",
          logo: "redis",
          logo_color: "white"
        },
        {
          name: "MongoDB & Atlas",
          encoded_name: "MongoDB%20&%20Atlas",
          color: "green",
          logo: "mongodb",
          logo_color: "white"
        }
      ]
    },
    {
      group: "Frontend",
      items: [
        {
          name: "VueJS",
          encoded_name: "VueJS",
          color: "green",
          logo: "vue.js",
          logo_color: "white"
        },
        {
          name: "Nuxt",
          encoded_name: "Nuxt",
          color: "green",
          logo: "nuxt.js",
          logo_color: "white"
        },
        {
          name: "Realm DB",
          encoded_name: "Realm%20DB",
          color: "purple",
          logo: "realm",
          logo_color: "white"
        },
        {
          name: "Typescript",
          encoded_name: "Typescript",
          color: "blue",
          logo: "typescript",
          logo_color: "white"
        }
      ]
    }
  ],
  projects: [
    {
      url: "https://alessandro.sanino.dev",
      name: "My personal website",
      description: "A website built to show my job profile",
      tech_stack_items: [
        {
          name: "Pure HTML5 + CSS",
          encoded_name: "Pure%20HTML5%20+%20CSS",
          color: "orange",
          logo: "html5",
          logo_color: "white"
        }
      ]
    },
    {
      url: "https://goa.design",
      name: "Goa Design",
      description: "I an official maintainer of this framework which provides a holistic approach for developing remote APIs and microservices in Go",
      tech_stack_items: [
        {
          name: "Golang",
          encoded_name: "Golang",
          color: "blue",
          logo: "go",
          logo_color: "white"
        },
        {
          name: "Goa Design framework",
          encoded_name: "Goa%20Design%20framework",
          color: "blue",
          logo: "go",
          logo_color: "white"
        }
      ]
    },
    {
      url: "https://github.com/saniales/golang-crypto-trading-bot",
      name: "Golang Crypto Trading Bot",
      description: "A golang implementation of a console-based trading bot for cryptocurrency exchanges. 300+ stars, featured on Awesome GO list",
      tech_stack_items: [
        {
          name: "Golang",
          encoded_name: "Golang",
          color: "blue",
          logo: "go",
          logo_color: "white"
        }
      ]
    },
    {
      url: "https://github.com/zero-penny-architecture/vuejs-starter-kit",
      name: "Zeropenny Vue.js Starter Kit",
      description: "A VueJS project which includes Navigation (vue-router), State management (vuex) all in an OOP Typescript flavour. Inspired by the [**Zero Penny Architecture**](https://medium.com/@saniales/the-0-penny-architecture-explained-how-i-created-a-complete-development-environment-composing-4f1318c71a17) concept",
      tech_stack_items: [
        {
          name: "Docker",
          encoded_name: "Docker",
          color: "blue",
          logo: "docker",
          logo_color: "white"
        },
        {
          name: "Heroku",
          encoded_name: "Heroku",
          color: "purple",
          logo: "heroku",
          logo_color: "white"
        },
        {
          name: "Gitlab Pipelines",
          encoded_name: "Gitlab%20Pipelines",
          color: "orange",
          logo: "gitlab",
          logo_color: "white"
        },
        {
          name: "VueJS",
          encoded_name: "VueJS",
          color: "green",
          logo: "vue.js",
          logo_color: "white"
        }
      ]
    },
    {
      url: "https://github.com/zero-penny-architecture/create-zp-vue-app",
      name: "Create Zeropenny Vue App",
      description: "An application made to generate projects based on [zeropenny-vuejs-starter-kit](https://github.com/zero-penny-architecture/vuejs-starter-kit)",
      tech_stack_items: [
        {
          name: "Node",
          encoded_name: "Node",
          color: "green",
          logo: "node.js",
          logo_color: "white"
        }
      ]
    }
  ]
};

/**
  * A - We open 'main.mustache'
  * B - We ask Mustache to render our file with the data
  * C - We create a README.md file with the generated output
  */
function generateReadMe() {
  fs.readFile(MUSTACHE_MAIN_DIR, (err, data) => {
    if (err) throw err;
    const output = Mustache.render(data.toString(), DATA);
    fs.writeFileSync('README.md', output);
  });
}

generateReadMe();
