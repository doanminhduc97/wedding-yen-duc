
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![MIT License][license-shield]][license-url] 



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://wedding-yen-duc.onrender.com">
    <img src="https://wedding-yen-duc.onrender.com/assets/images/bg1.jpg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Wedding Invitation Template</h3>

  <p align="center">
    This is the template for wedding invitation card!
    <br />
    <a href="https://github.com/sauanla/wedding-invitation/wiki"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://wedding-yen-duc.onrender.com/">View Demo</a>
    ·
    <a href="https://wedding-yen-duc.onrender.com/issues">Report Bug</a>
    ·
    <a href="https://wedding-yen-duc.onrender.com/issues">Request Feature</a>
    ·
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li> 
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
[![Product Name Screen Shot][product-screenshot]](https://wedding-yen-duc.onrender.com/)

This is template wedding invation card  using nodeJs and mongodb. You can create a card and send this link for recevier.
The recevier using link invite for view infomation of marriage ceremony.

Flow:
* Go to admin manager page and create a card with receiver's information.
* Get link from system.
* Send to the recipient :smile:

You can easily edit the information and deploy it simply. All information and installation instructions will be detailed.

Thank you for your visit and we look forward to hearing from you!

### Built With

**Server**
* [NodeJS](https://nodejs.org)
* [Express](https://expressjs.com)
* [MongoDB](https://www.mongodb.com)

**Client**
* [EJS](https://ejs.co)
* [Bootstrap](https://getbootstrap.com)
* [JQuery](https://jquery.com)



<!-- GETTING STARTED -->
## Getting Started

I have apply EJS to an Express application, include repeatable parts of your site, and pass data to the views.

### Prerequisites

You need setup prerequisites: 
*   [NodeJS - v14.17](https://nodejs.org/dist/v14.17.0/node-v14.17.0-x64.msi)
*   [Visual studio code](https://code.visualstudio.com/)

* npm
  ```sh
  npm install npm@latest -g
  ```
* nodemon
  ```sh
  npm i nodemon -g
  ```
  
### Installation

1. Get connection of MongoDB at [https://www.mongodb.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/doanminhduc97/wedding-yen-duc.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Rename and edit file in `Exemple.env` to `.env`

   ```env
   PORT = 3001
   URI_MONGO = 'URI'
   DOMAIN = 'http://localhost:3001'
   SITE_KEY = 'SITE_KEY'
   SECRET_KEY = 'SECRET_KEY'
   ```
5. Start server
    for dev using nodemon
   ```sh
   npm run dev
   ```


<!-- USAGE EXAMPLES -->
## Usage
Run Seed Database: [http://localhost:3001/setup](http://localhost:3001/setup) 

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Dinh Phuc - [@facbook](https://www.facebook.com/coi.tim.14/) - ducdm.aptech@gmail.com
⚡ Quote: 
**You fail because you don't believe.**