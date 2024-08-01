module.exports = {
    apps: [
      {
        name: "container0",
        script: "docker",
        args: "run --name container0 -d -p 3000:3000 app-js-3000:latest",
        watch: true, // Enable watching
        // env: {
        //     VERSION: "1.0.0" // Example version
        //   }
        // Optional: Specify other settings like environment variables
        // env: {
        //   NODE_ENV: "production"
        // }
      },
      {
        name: "container1",
        script: "docker",
        args: "run --name container1 -d -p 3001:3001 app-js-3001:latest",
        watch: true, // Enable watching
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
            watch: false
          }
      // Add more containers as needed
    ]
  };
  