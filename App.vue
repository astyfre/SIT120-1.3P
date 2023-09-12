<template>
  <div id="app">
    <header>
      <img src="./assets/AnabolicLifestyle-logo.png" class="logo">
      <h1> {{siteTitle}}</h1>
    </header>
    <div id="nav">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/about" class="nav-link">About</router-link>
          <router-link to="/portfolio" class="nav-link">Portfolio</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
     
    </div>
    <router-view />
  </div>
</template>

<script>



export default {
  name: 'App',
  created() {
    document.title = 'Astons Portfolio Website';
    
  },
  data () {
    return {
      siteTitle: "Astons Portfolio"
    }
  } 
}
</script>


<style>
header{
  display: flex;
  align-items: center;
}
h1 {
  flex-grow: 1;
  text-align: center;
}
.logo{
  max-width: 90px;
  margin-right: 10px;
  align-self: flex-start;
}
.nav-link {
  color: white;
  margin-left: 1em;
}
#app{
    height: auto;
    min-height: 100vh;
    background-color: #dff8ff;
}
#home {
    text-align: center;
}
body{
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
}
header {
    background-color: #000047;
    color: white;
    text-align: center;
    padding: 1rem;
}
#nav{
    background-color: rgb(3, 29, 172);
    color: white;
    padding: 0.5rem;
    text-align: center;
    
}
nav a{
    color: white;
    text-decoration: none;
    margin-left: 1rem;
}
main {
    padding: 2rem;
}
section{
    margin-bottom: 3rem;
}
.project-image{
    width: auto;
    height: auto;
    max-width: 800px;
    max-height: 400px;
}
h2{
    color: #333;
    font-size: 24px;
    margin-bottom: 1rem;
}
h3{
    color: #555;
    font-size: 20px;
    margin-bottom: 0.5rem;
}
p{
    color: #777;
    font-size: 16px;
    margin-bottom: 1.5rem;
}
ul{
    list-style: none;
    padding: 0;
    margin: 0;
}
li{
    margin-bottom: 1rem;
}
footer {
    background-color: #000047;
    color: white;
    text-align: center;
    padding: 1rem;
    margin-bottom: 0px;

}

@media screen and (max-width: 900px) {
   #nav{
    display: flex;
    flex-direction: column; /* Stack items vertically */
   } 
  }
</style>



<head>
  <title></title>
</head>