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

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "first_name" varchar,
  "last_name" varchar,
  "email" varchar,
  "username" varchar,
  "password" varchar
);

ALTER TABLE "roasts" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");


