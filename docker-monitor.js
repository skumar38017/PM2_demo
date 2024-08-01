const { exec } = require('child_process');
const fs = require('fs');

function logDockerStats() {
  exec('docker stats --no-stream', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    fs.appendFile('docker-stats.log', stdout, (err) => {
      if (err) throw err;
    });
  });
}

// Run the monitoring every minute
setInterval(logDockerStats, 60000);
