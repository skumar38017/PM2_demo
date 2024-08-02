module.exports = {
    apps: [
      {
        name: "app1",
        script: "./app.js",
        // env: {
        //     VERSION: "1.0.0" // Example version
        //   }
        // Optional: Specify other settings like environment variables
        env: {
           PORT: 3001
        }
      }
      /*{
        name: "container1",
        script: "docker",
        args: "run --name container1 -d -p 3001:3001 app-js-3001:latest",
        watch: true, // Enable watching
        namespace: "testing containor"
        // env: {
        //     VERSION: "1.0.0" // Example version
        //   }
        // Optional: Specify other settings like environment variables
        // env: {
        //   NODE_ENV: "production"
        // }
      },
      {
        name: "container2",
        script: "docker",
        args: "run --name container2 -d -p 3002:3002 app-js-3002:latest",
        watch: true, // Enable watching
        namespace: "testing containor"
        // env: {
        //     VERSION: "1.0.0" // Example version
        //   }
        // Optional: Specify other settings like environment variables
        // env: {
        //   NODE_ENV: "production"
        // }
      },
      {
        name: "docker-monitor",
        script: "./docker-monitor.js",
        watch: true,
        namespace: "Monitoring containor"
      },*/

      


      // Add more containers as needed
    ]
  };
  
