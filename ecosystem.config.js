module.exports = {
    apps: [
      {
        name: "app1",
        script: "./app.js",
        namespace: "test aap.js",
        watch: true,
        // env: {
        //     VERSION: "1.0.0" // Example version
        //   }
        // Optional: Specify other settings like environment variables
        env: {
           PORT: 3001,
           VERSION: "1.0.0"
        }
      },
      {
        name: "app2",
        script: "./app.js",
        namespace: "test aap.js",
        watch: true,
        // env: {
        //     VERSION: "1.0.0" // Example version
        //   }
        // Optional: Specify other settings like environment variables
        env: {
           PORT: 3002,
           VERSION: "1.0.0"
        }
      },
      {
        name: "app3",
        script: "./app.js",
        namespace: "test aap.js",
        watch: true,
        VERSION: "1.0.0", // Example version
        // env: {
        //     VERSION: "1.0.0" // Example version
        //   }
        // Optional: Specify other settings like environment variables
        env: {
           PORT: 3003,
           VERSION: "1.0.0"
        }
      }
            


      // Add more containers as needed
    ]
  };
  
