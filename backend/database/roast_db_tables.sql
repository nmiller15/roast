-- Create the database (this command needs to be executed outside this script, e.g., via psql command line)
-- CREATE DATABASE roast;

-- Connect to the new database (this command is specific to psql command line, not part of the SQL script)
-- \c roast

-- Create the "roasts" table
CREATE TABLE "roasts" (
  "id" SERIAL PRIMARY KEY,
  "date_roasted" date,
  "rating" integer,
  "origin" varchar,
  "variety" varchar,
  "name" varchar,
  "starting_weight_g" float,
  "ending_weight_g" float,
  "heat_level" varchar,
  "start_temp_f" integer,
  "lowest_temp_f" integer,
  "first_crack_seconds" integer,
  "temp_rise_seconds" integer,
  "opened_lid_seconds" integer,
  "heat_off_seconds" integer,
  "dumped_seconds" integer,
  "is_favorite" boolean,
  "notes" text,
  "user_id" integer
);

-- Create the "users" table
CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "first_name" varchar,
  "last_name" varchar,
  "email" varchar UNIQUE,
  "username" varchar UNIQUE,
  "password" varchar
);

-- Add foreign key constraint to the "roasts" table
ALTER TABLE "roasts" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

-- Create the role for database connection
CREATE ROLE p_db_connect;
GRANT CONNECT ON DATABASE roast TO p_db_connect;
GRANT USAGE ON SCHEMA public TO p_db_connect;

-- Create roles for specific permissions on the "users" table
CREATE ROLE p_users_read;
GRANT SELECT ON users TO p_users_read;

CREATE ROLE p_users_write;
GRANT INSERT ON users TO p_users_write;

CREATE ROLE p_users_update;
GRANT UPDATE ON users TO p_users_update;

CREATE ROLE p_users_delete;
GRANT DELETE ON users TO p_users_delete;

-- Create a role for full permissions on the "roasts" table
CREATE ROLE p_roasts_read_write_delete;
GRANT INSERT, UPDATE, SELECT, DELETE ON roasts TO p_roasts_read_write_delete;

-- Create an admin role and grant all specific roles to it
CREATE ROLE g_admin;
GRANT p_db_connect, p_users_read, p_users_write, p_users_update, p_users_delete, p_roasts_read_write_delete TO g_admin;

-- Create an API role and grant necessary roles to it
CREATE ROLE g_api;
GRANT p_db_connect, p_users_write, p_roasts_read_write_delete TO g_api;

-- Create user roles and grant group roles to them
CREATE ROLE u_api WITH LOGIN;
CREATE ROLE u_admin WITH LOGIN;

GRANT g_api TO u_api;
GRANT g_admin TO u_admin;

