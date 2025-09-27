-- Create database if not exists
SELECT 'CREATE DATABASE sharedappdb' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'sharedappdb')\gexec

\c sharedappdb;

-- Create table if not exists
CREATE TABLE IF NOT EXISTS devs (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50)
);

-- Insert only if table is empty
INSERT INTO devs (name) 
SELECT 'Flask Developer' WHERE NOT EXISTS (SELECT 1 FROM devs WHERE name = 'Flask Developer')
UNION ALL
SELECT 'Node Developer' WHERE NOT EXISTS (SELECT 1 FROM devs WHERE name = 'Node Developer')
UNION ALL
SELECT 'Shared DB User' WHERE NOT EXISTS (SELECT 1 FROM devs WHERE name = 'Shared DB User');