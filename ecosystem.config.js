module.exports = {
    apps: [
      {
        name: "container0",
        script: "docker",
        args: "run --name container1 -p 3000:3000 app-js-3000:latest"
      },
      {
        name: "container1",
        script: "docker",
        args: "run --name container1 -p 3001:3001 app-js-3001:latest"
      },
      // Add more containers as needed
    ]
  };
  