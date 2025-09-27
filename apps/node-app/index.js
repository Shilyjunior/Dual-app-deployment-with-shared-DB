const express = require('express');
const { Pool } = require('pg');
const app = express();

const pool = new Pool({
  host: 'localhost',
  user: 'devops',
  password: 'password',
  database: 'sharedappdb'
});

app.get('/', async (req, res) => {
  const result = await pool.query('SELECT name FROM devs');
  const names = result.rows.map(row => `<li>${row.name}</li>`).join('');
  
  const team7Html = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Node.js Shared DB</title>
        <style>
            .team-header {
                background-color: #e8f5e8;
                padding: 15px;
                margin-bottom: 20px;
                border-left: 4px solid #28a745;
                border-radius: 5px;
            }
            .team-members {
                background-color: #f9f9f9;
                padding: 20px;
                margin-top: 20px;
                border-top: 2px solid #ddd;
                border-radius: 5px;
            }
            .teamwork-img {
                max-width: 100%;
                height: auto;
                border-radius: 8px;
                margin: 20px 0;
                box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            }
            .container {
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
            }
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Node.js app with shared DB is up and running!</h1>
            
            <div class="team-header">
                <strong>This project was executed by Team 7</strong>
            </div>

            <!-- Teamwork Image -->
            <div style="text-align: center;">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                     alt="Great Teamwork" 
                     class="teamwork-img"
                     style="max-width: 400px;">
                <p><em>Great teamwork makes the dream work</em></p>
            </div>

            <h2>Database Content:</h2>
            <ul>${names}</ul>

            <div class="team-members">
                <h3>Members of Team 7:</h3>
                <ul style="list-style-type: none; padding-left: 0;">
                    <li>• Saudat Bada-Akande</li>
                    <li>• Sulaiman Adamu</li>
                    <li>• Akeem Adeshile</li>
                </ul>
            </div>
        </div>
    </body>
    </html>
  `;
  
  res.send(team7Html);
});

app.listen(3000, '0.0.0.0', () => console.log('Node.js app listening on port 3000'));