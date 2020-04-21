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
git clone https://github.com/OkularID/ReservasiDulu


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
- [x] Adding event for each logged in user
- [x] Adding more option to choose in the admin dashboard
- [x] Adding multiple form (input choice) for user to choose the price of the events
- [ ] Adding dashboard
- [ ] Adding payment
- [ ] Adding template models to use multiple template choices




===


@hanandito @MuhammadFikriGunawan 

`main_template`
- `style.css`
- `app.js`

`dev_template`
- `global_front`
    - `whatever_fonts.ttf`
    - `another_whatever_fonts.ttf`
    - `another_what_the_fuck_fonts.ttf`

- `global_style`
    - `default.css`
    - `owl_carousel.css`
    - `bootstrap.min.css`
    
- `template_1`
    - `style.css`

- `template_2`
    - `style.css`

- `template_3`
    - `style.css`




# Development tutorial.

**How to contribute**

- Fork ke masing-masing akun.
- Clone menggunakan `git` dengan perintah:

`git clone https://github.com/USERNAME/ReservasiDulu.git nama_folder`

atau

`git clone git@github.com:USERNAME/ReservasiDulu.git nama_folder`

Rubah bagian `username` di atas dengan username masing-masing setelah melakukan `Fork`.
kedua perintah di atas sama saja (menggunakan method `SSH` dan `HTTPS`).


Setelah melakukan `Fork` dan clone ke local / komputer kita, kita sudah bisa melakukan development. 

**Cara melakukan `push` ke repository kita**

```
git init

git add .

git commit -m "isi pesan"

git push origin master
```


**Cara melakukan `pull request` / PR**
Klik `Pull Request` pada bagian bawah seperti di gambar ini:

![image](https://user-images.githubusercontent.com/31838603/79295134-22e02b00-7f02-11ea-820d-49eed2e73aa1.png)

Isikan pesan / comment lalu pilih tombok `Create Pull Request` yang berwarna hijau di bagian kanan bawah

![image](https://user-images.githubusercontent.com/31838603/79295208-5327c980-7f02-11ea-878d-957dfa4f55d8.png)

Selama terdapat notifikasi `Able to merge` artinya kita aman untuk melakukan `Pull Request` / PR kepada repository utama / `master`.

![image](https://user-images.githubusercontent.com/31838603/79295301-879b8580-7f02-11ea-98b1-7f35d23e588a.png)

Setelah itu tunggu hingga terdapat notif button berwarna biru bertuliskan `merged`, yang artinya `Pull Request` kita telah diterima oleh master. 

![image](https://user-images.githubusercontent.com/31838603/79295396-c29db900-7f02-11ea-9a53-0782a8c1f1f8.png)


**Issue**

Jika ada yang tidak dapat diselesaikan, maka sangat dianjurkan untuk membuka issue / discussion pada repository master agar masalah tersebut dapat diselesaikan bersama-sama.

