# Okular Events App Management

#### Project Dependencies

```
Django3.x
PostgreSQL
Redis
Gmail
```


The application itself has three modules.
- Birthday
- Event
- Wedding


##### Development

```shell
# clone the repository
git clone https://github.com/icoldplayer/events


# move into it
cd events


# create your own virtual environment and activate it
python -m venv env
# for windows powershell
env/Scripts/activate
# for Linux (Ubuntu/Debian based)
source env/bin/activate


# install all the dependencies
pip install -r requirements.txt


# run the server
# (Ubuntu/Debian) based
./manage.py runserver


# Windows PowerShell
py manage.py runserver
```


##### Migrating the database:

```shell
# makemigrations
./manage.py makemigrations 

# migrate the database
./manage.py migrate

# create the superuser
./manage.py createsuperuser
```

Todo lists:
- [ ] Adding dashboard
- [ ] Adding payment
