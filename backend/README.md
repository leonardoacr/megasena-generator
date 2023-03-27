#  <a href="https://codechallenge-1.onrender.com/">Lottery Generator</a>
Learning a bit of Python & Django to make a generator for the lottery Mega-Sena (the biggest lottery game on Brazil), the random numbers consider 
the 10 numbers that were most popular on the previous games and make a guess based on the best probabilities inside this range, also compares with previous games. 

Check the live website: https://mega-sena.onrender.com

<div id="running">
  <h2>⚙ Running</h2>
</div>

##

```bash
# Clone this repository
$ git clone https://github.com/leonardoacr/lotterygenerator

$ update pip
$ python.exe -m pip install --upgrade pip

# Activate the virtual environment
$ pip install virtualenv
$ virtualenv venv
$ venv\scripts\activate 

# Install dependencies
$ pip install -r requirements.txt

# Go to "myproject" directory
$ cd myproject

# Run the server on http://127.0.0.1:8000
$ python manage.py runserver


```
