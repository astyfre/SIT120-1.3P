<template>
    <div id="portfolio">
      <h2>Portfolio</h2>
      <ul>
        <li v-for="project in projects" :key="project.id">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <img v-if="project.image" v-bind:src="require(`@/assets/${project.image}`)" alt="Project Image" class="project-image">
        </li>
      </ul>
    </div>
  </template>
  
  <script>
          import '@/styles.css'; // Add this line to import the CSS file

  export default {
    name: 'PortfolioPage',
    data() {
      return {
        projects: [
                        {id: 1, title: 'Ecommerce Website', description: 'An Ecommerce Website I built as part of this unit. With a login system, contact form and even the ability to add items to your kart', image: 'eCom.png'},
                        {id: 2, title: 'Maze Solving Robot', description: 'This robot used a single proximity sensor to its left and a light sensor in the front to navigate its way through a complex maze unassisted.', image: 'maze.png'},
                        {id: 3, title: 'Automatic Plant Waterer', description: 'An automatic plant watering system using an arduino. It read the soils moisture and when it droped too low it turned on a pump which watered the plant to a desired level.', image: 'plantWater.png'},
                    ] ,
      };
    }
  }
  </script>
  
  <style scoped>
  /* Add specific styles for the Portfolio component here */
  </style>
  