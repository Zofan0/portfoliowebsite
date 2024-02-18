import Image from 'next/image'
import styles from './page.module.css'
import React from 'react';
import HelloWorld from './aboutme';

export default function Home() {
  return (
  <main>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />

    <div class='div1'>
      <div class='titlecontainer'>
        <h1 class='titletext'>Hi I'm <b>Zak</b></h1>
        <p>I'm a fullstack web developer specializing in</p>
        <div id='codebg' class='bg'><img class='code' alt='background image' src='https://cdn-icons-png.flaticon.com/512/37/37631.png'></img></div>
        <div id='jslogo' class='logos'><img class='js' alt='javascript icon' src='https://static-00.iconduck.com/assets.00/javascript-plain-icon-256x256-ianqz9kb.png'></img></div>
        <div id='pythonlogo' class='logos'><img class='py' alt='python logo' src='https://imgs.search.brave.com/M-FiGkB1jPVADW6xtp-i7TJcdhipqz463z8s2cuR3WY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ4MTUyZmNlZjEw/MTRjMGI1ZTQ5Njcu/cG5n'></img></div>
        <div id='reactlogo' class='logos'><img class='react' alt='react logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'></img></div>
      </div>
    </div>

    <div class='div2'>
      <div class='aboutme'>
        <h2 id='aaa'>About Me</h2>
        <div>
          <h3 class='bbb'>Experience</h3>
          <p>Freelance Graphic Designer</p>
          <p>Fullstack Web Development</p>
        </div>
        <div>
          <h3 class='bbb'>Eduction</h3>
          <p>Certificate 3 in Business at Binnacle College</p>
          <p>Queensland Certificate of Eduction at Ambrose Treacy College</p>
        </div>
      </div>
      <div class='portfolio'>
        <h2>Porfolio</h2>
        <p>This section is work in progress and needs to be updated with future works</p>
        <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </main>
  )
}
