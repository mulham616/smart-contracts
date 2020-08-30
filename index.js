/**
 * Credits for this goes to https://medium.com/swlh/how-to-create-a-self-updating-readme-md-for-your-github-profile-f8b05744ca91
 * many thanks to the author: Thomas Guibert (https://github.com/thmsgbrt)
 */

const Mustache = require('mustache');
const fs = require('fs');
const MUSTACHE_MAIN_DIR = './main.mustache';

let DATA = {
  name: 'Alessandro',
  date: new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
    timeZone: 'Europe/Rome',
  }),
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
          logo: "nuxt",
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
  projects: {

  }
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
