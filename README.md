
![Logo](https://nolanmiller-image-hosting.s3.us-east-2.amazonaws.com/Roast+Logo.svg)


# Roast: Know Your Home Roasts

If you like to roast coffee at home low-tech, then you know the frustration of trying to manage your notebook of important timings and references to your other roasts. With Roast, your roast timer and journal are combined into one! Record your first crack with the touch of a button! Save notes about your favorite roasts, and save the recipes for quick reference later! Roast will make your stove-top coffee roasting experience as smooth as the delicious cup of coffee you'll get when you're done!




## Features

- Roast timer that automatically tracks your roasts
- A library of your historical roasts all associated with your account
- Keep a list of your favorite roasts so you remember what to make again
- Store notes on how your roast went, how the coffee comes out, and more all with the roast details!
- Simple mobile installation, just Add to Your Home Screen from your mobile web browser!




## How to Use
It's as simple as going to [roast.nolanmiller.me](roast.nolanmiller.me) and creating a free account! 

For the best experience, add the app to your home screen to see 
## Tech Stack

**Client:** React

**Server:** Node, Express, Postgres


## Run Locally

Clone the project

```bash
  git clone https://github.com/nmiller15/roast
```

Go to the frontend directory within the project directory

```bash
  cd roast
  cd frontend
```

Install dependencies

```bash
  npm install
```

Go to the backend directory and install dependencies

```bash
  cd ../backend
  npm install
```

Install a postgres database using specifications laid out in `roast_db_tables.sql`

Create environment variables accessible to the backend:
+ `DB_HOST`
+ `DB_USER` 
+ `DB_PASS`
+ `DB` - name of database
+ `DB_PORT`

Start the api server

```bash
  cd backend
  node index.js
```

Start the frontend server

```bash
  cd ../frontend
  npm start
```

## Screenshots

![Home Page](https://nolanmiller-image-hosting.s3.us-east-2.amazonaws.com/SCR-20240812-hszn.png)

![Information Tiles](https://nolanmiller-image-hosting.s3.us-east-2.amazonaws.com/SCR-20240812-htel.png)

![Roast Timer](https://nolanmiller-image-hosting.s3.us-east-2.amazonaws.com/SCR-20240812-htkf.png)

![Roast Tiles](https://nolanmiller-image-hosting.s3.us-east-2.amazonaws.com/SCR-20240812-htpv.png)


## License

[MIT](https://choosealicense.com/licenses/mit/)

MIT License

Copyright (c) 2024 Nolan Miller

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

