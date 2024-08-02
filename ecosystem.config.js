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
      },
      {
        name: "app2",
        script: "./app.js",
        // env: {
        //     VERSION: "1.0.0" // Example version
        //   }
        // Optional: Specify other settings like environment variables
        env: {
           PORT: 3002
        }
      },
      {
        name: "app3",
        script: "./app.js",
        // env: {
        //     VERSION: "1.0.0" // Example version
        //   }
        // Optional: Specify other settings like environment variables
        env: {
           PORT: 3003
        }
      }
            


      // Add more containers as needed
    ]
  };
  
