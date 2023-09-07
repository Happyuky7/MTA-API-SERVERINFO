document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const ipInput = document.getElementById('ipInput');
    const portInput = document.getElementById('portInput');
    const formatSelect = document.getElementById('formatSelect');
    const serverInfo = document.getElementById('serverInfo');

    searchButton.addEventListener('click', async () => {
        const ip = ipInput.value;
        const port = portInput.value;
        const selectedFormat = formatSelect.value; 
        if (!ip || !port) {
            alert('Please provide both IP and Port');
            return;
        }

        try {
            const response = await fetch(`/api/${ip}/${port}`);
            const data = await response.json();

            if (response.status === 404) {
                serverInfo.textContent = data.error;
            } else if (response.status === 200) {
                if (selectedFormat === 'normal') {
                    
                    serverInfo.innerHTML = `
                        <p>IP: ${data.ip}</p>
                        <p>Port: ${data.port}</p>
                        <p>Password: ${data.password}</p>
                        <p>Server Name: ${data.name}</p>
                        <p>Players Online: ${data.players}/${data.maxplayers}</p>
                        <p>Keep: ${data.keep}</p>
                        <p>Version: ${data.version}</p>
                    `;
                } else if (selectedFormat === 'json') {
                    
                    serverInfo.textContent = JSON.stringify(data, null, 2);
                }
            } else {
                serverInfo.textContent = 'An error occurred. Please try again.';
            }
        } catch (error) {
            console.error('Error:', error);
            serverInfo.textContent = 'An error occurred. Please try again.';
        }
    });
});
