<template>
    <div id="about">
      <h2>About Me</h2>
      <p>{{ aboutText }}</p>
      <table>
  <thead>
    <tr>
      <th>Skills</th>
      <th>Time Spent Learning</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Python</td>
      <td>3 years</td>
      
    </tr>
    <tr>
      <td>Robotics</td>
      <td>1 Year</td>
      
    </tr>
    <tr>
      <td>Web Development</td>
      <td>4 Months</td>
     
    </tr>
    <tr>
      <td>Mobile Development</td>
      <td>8 Months</td>
     
    </tr>
  </tbody>
</table>
    </div>
  </template>
  
  <script>
 import '@/styles.css'; // Add this line to import the CSS file
            export default ({
                name: 'AboutPage',
                data () {
                  return {
                    siteTitle: "Aston's Portfolio",
                    aboutText: 'I am a passionate student of Computer Science currently in my Bachelors Degree. My skills and intrests are vast, stretching across robotics, web development, app development, embedded systems and cybersecurity. ',
                  }
                },
            
            })
  </script>
  
  <style scoped>
  /* Add specific styles for the About component here */
  </style>
  