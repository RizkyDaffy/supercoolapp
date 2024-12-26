const express = require('express');
const app = express();
const fs = require('fs');
const bcrypt = require('bcrypt');

const session = require('express-session');
const { exec } = require('child_process');
const bodyParser = require('body-parser');
const multer = require('multer'); // Library for handling file uploads
const path = require('path');
const { v4: uuidv4 } = require('uuid'); // Import the UUID library
const { sendVerificationEmail } = require('./send-mail'); // 


// Sistem
app.set('view engine', 'ejs');


app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false,
}));

app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: 'cdn', // Destination folder for uploaded files
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const username = req.session.user; // Get the username
    cb(null, username + '.jpg'); // Save files with username.jpg extension
  }
});
const upload = multer({ storage: storage });








// (basic sistem)

app.get('/', (req, res) => {
  res.render('index', { title: 'FourtyFour' });
});
// '/' : penguhubung menuju ke login / reg (Home Page)

app.get('/terms', (req, res) => {
  res.render('terms', { title: 'FourtyFour' });
});

app.get('/dev', (req, res) => {
  // Menggunakan path relatif dari direktori tempat skrip Node.js berjalan
  // Asumsi skrip Node.js berada di root project dan memiliki folder /views
  exec('php ./views/mail.php', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.send('Error executing PHP');
    }
    // Kirim output dari PHP sebagai respons
    res.send(stdout);
  });
});




//'/terms' : utility tambahan dari '/'

app.get('/terms/User-Conduct', (req, res) => {
  res.render('terms3', { title: 'FourtyFour' });
});
//pelengkap dari Terms

app.get('/berhasil', (req, res) => {
  res.render('berhasil', { title: 'FourtyFour' });
});

// Untuk sistem register (informasi) link verfikiasi

app.get('/sukses', (req, res) => {
  res.render('sukses', { title: 'FourtyFour' });
});




const handleLike = function(req, res) {
  const postId = req.params.postId;

  // Baca isi berkas post.json
  let postData = [];
  try {
    postData = JSON.parse(fs.readFileSync('db/post.json', 'utf8'));
  } catch (error) {
    console.error("Failed to read post data:", error);
    return res.status(500).json({ error: "Failed to read post data" });
  }

  // Cari postingan dengan ID yang sesuai
  const postIndex = postData.findIndex(post => post.id === postId);

  // Jika postingan ditemukan, tambahkan jumlah like
  if (postIndex !== -1) {
    postData[postIndex].likes++;

    // Simpan kembali data postingan yang diperbarui ke berkas post.json
    try {
      fs.writeFileSync('db/post.json', JSON.stringify(postData, null, 2));
      res.status(200).json({ success: true, message: "Like added successfully" });
      
    } catch (error) {
      console.error("Failed to write post data:", error);
      res.status(500).json({ error: "Failed to write post data" });
    }
  } else {
    console.error("Post with ID", postId, "not found.");
    res.status(404).json({ error: "Post not found" });
  }
};

// Fungsi untuk menangani pengurangan like
const handleUnlike = function(req, res) {
  const postId = req.params.postId;

  // Baca isi berkas post.json
  let postData = [];
  try {
    postData = JSON.parse(fs.readFileSync('db/post.json', 'utf8'));
  } catch (error) {
    console.error("Failed to read post data:", error);
    return res.status(500).json({ error: "Failed to read post data" });
  }

  // Cari postingan dengan ID yang sesuai
  const postIndex = postData.findIndex(post => post.id === postId);

  // Jika postingan ditemukan, kurangi jumlah like jika lebih dari 0
  if (postIndex !== -1 && postData[postIndex].likes > 0) {
    postData[postIndex].likes--;

    // Simpan kembali data postingan yang diperbarui ke berkas post.json
    try {
      fs.writeFileSync('db/post.json', JSON.stringify(postData, null, 2));
      res.status(200).json({ success: true, message: "Like removed successfully" });
      
      
    } catch (error) {
      console.error("Failed to write post data:", error);
      res.status(500).json({ error: "Failed to write post data" });
    }
  } else {
    console.error("Post with ID", postId, "not found or has no likes.");
    res.status(404).json({ error: "Post not found or has no likes" });
  }
};


// Handler for the '/like/' route
app.get('/like/:postId', handleLike);

// Rute untuk menghapus like
app.get('/unlike/:postId', handleUnlike);



function getUserPhotoUrl(username, userData) {
  if (userData[username] && userData[username].photo) {
    return userData[username].photo;
  } else {
    // Jika tidak, gunakan gambar default
    return 'cdn/basic/basicpp.png';
  }
}


app.get('/app', (req, res) => {
  if (req.session.user) {
    const username = req.session.user;

    let userData = {};
    try {
      userData = JSON.parse(fs.readFileSync('db/user.json', 'utf8'));
    } catch (error) {
      console.error("Failed to read user data:", error);
    }

    let userPost = {};
    try {
      userPost = JSON.parse(fs.readFileSync('db/post.json', 'utf8'));
    } catch (error) {
      console.error("Failed to read user data:", error);
    }
                
    const currentUser = req.session.user;


    //saran akun
    const suggestions = Object.keys(userData)
      .filter(username => username !== currentUser)
      .map(username => ({
        username: username,
        usertag: userData[username].usertag,
        photo: userData[username].photo
      }))
      .sort(() => Math.random() - 0.5)
      .slice(0, 5);

    // handler like
    const handleLike = (postId) => {
      // Baca isi berkas post.json
      let postData = [];
      try {
        postData = JSON.parse(fs.readFileSync('db/post.json', 'utf8'));
      } catch (error) {
        console.error("Failed to read post data:", error);
        return;
      }

      // Cari postingan dengan ID yang sesuai
      const postIndex = postData.findIndex(post => post.id === postId);

      // Jika postingan ditemukan, tambahkan jumlah like
      if (postIndex !== -1) {
        postData[postIndex].likes++;

        // Simpan kembali data postingan yang diperbarui ke berkas post.json
        fs.writeFileSync('db/post.json', JSON.stringify(postData, null, 2));
      } else {
        console.error("Post with ID", postId, "not found.");
      }
    };
    // handler unlike
    const handleUnlike = (postId) => {
      // Baca isi berkas post.json
      let postData = [];
      try {
        postData = JSON.parse(fs.readFileSync('db/post.json', 'utf8'));
      } catch (error) {
        console.error("Failed to read post data:", error);
        return;
      }

      // Cari postingan dengan ID yang sesuai
      const postIndex = postData.findIndex(post => post.id === postId);

      // Jika postingan ditemukan, kurangi jumlah like jika lebih dari 0
      if (postIndex !== -1 && postData[postIndex].likes > 0) {
        postData[postIndex].likes--;

        // Simpan kembali data postingan yang diperbarui ke berkas post.json
        fs.writeFileSync('db/post.json', JSON.stringify(postData, null, 2));
      } else {
        console.error("Post with ID", postId, "not found or has no likes.");
      }
    };
    //acak konten
    const acakKonten = (currentUser) => {
      return Object.keys(userPost)
        .filter(username => username !== currentUser)
        .map(username => ({
          username: userPost[username].username,
          usertag: userPost[username].usertag,
          photo: userPost[username].photo,
          id: userPost[username].id,
          time: userPost[username].time,
          content: userPost[username].content,
          image: userPost[username].image,
          likes: userPost[username].likes
        }))
         .sort(() => Math.random() - 0.5);
    };

    //usertag
    const usertag = userData[username].usertag;
    //photo profile
    const pp = getUserPhotoUrl(username, userData);
    //udh setup blom
    const setupNeeded = userData[username].setup === false;

    //nampilin render
    res.render('home', { 
      title: 'FourtyFour', 
      username: username, 
      pp: pp, 
      setupNeeded: setupNeeded,
      tag: usertag,
      suggestions: suggestions,
      posts: acakKonten(currentUser),
      handleLike: handleLike,
      handleUnlike: handleUnlike 
    });
  } else {
    res.render('login', { title: 'FourtyFour' });
  }
});

app.get('/profile', (req, res) => {
  if (req.session.user) {

    let username;
    let currentUser 
    // Check if 'u' parameter exists in the URL
    if (req.query.u) {
      // If 'u' parameter exists, update 'username' to the value of 'u'
      username = req.query.u;
      currentUser = req.query.u;
    } else {
      // If 'u' parameter doesn't exist, use the username from the session
      username = req.session.user;
      currentUser = req.session.user;
    }


    let userData = {};
    try {
      userData = JSON.parse(fs.readFileSync('db/user.json', 'utf8'));
    } catch (error) {
      console.error("Failed to read user data:", error);
    }

    let userPost = {};
    try {
      userPost = JSON.parse(fs.readFileSync('db/post.json', 'utf8'));
    } catch (error) {
      console.error("Failed to read user data:", error);
    }

     

    // handler like
    const handleLike = (postId) => {
      // Baca isi berkas post.json
      let postData = [];
      try {
        postData = JSON.parse(fs.readFileSync('db/post.json', 'utf8'));
      } catch (error) {
        console.error("Failed to read post data:", error);
        return;
      }

      // Cari postingan dengan ID yang sesuai
      const postIndex = postData.findIndex(post => post.id === postId);

      // Jika postingan ditemukan, tambahkan jumlah like
      if (postIndex !== -1) {
        postData[postIndex].likes++;

        // Simpan kembali data postingan yang diperbarui ke berkas post.json
        fs.writeFileSync('db/post.json', JSON.stringify(postData, null, 2));
      } else {
        console.error("Post with ID", postId, "not found.");
      }
    };
    // handler unlike
    const handleUnlike = (postId) => {
      // Baca isi berkas post.json
      let postData = [];
      try {
        postData = JSON.parse(fs.readFileSync('db/post.json', 'utf8'));
      } catch (error) {
        console.error("Failed to read post data:", error);
        return;
      }

      // Cari postingan dengan ID yang sesuai
      const postIndex = postData.findIndex(post => post.id === postId);

      // Jika postingan ditemukan, kurangi jumlah like jika lebih dari 0
      if (postIndex !== -1 && postData[postIndex].likes > 0) {
        postData[postIndex].likes--;

        // Simpan kembali data postingan yang diperbarui ke berkas post.json
        fs.writeFileSync('db/post.json', JSON.stringify(postData, null, 2));
      } else {
        console.error("Post with ID", postId, "not found or has no likes.");
      }
    };
    //acak konten
    const acakKonten = (currentUser) => {
      return Object.values(userPost)
        .filter(post => post.username === currentUser) // Hanya menyertakan data dari currentUser
        .map(post => ({
          username: post.username,
          usertag: post.usertag,
          photo: post.photo,
          id: post.id,
          time: post.time,
          content: post.content,
          image: post.image,
          likes: post.likes,
          userbio: post.userbio
        }))
        .sort(() => Math.random() - 0.5);
    };

    
    
 const userbio = userData[username].userbio;
    //usertag
    const usertag = userData[username].usertag;

    
    //photo profile
    const pp = getUserPhotoUrl(username, userData);
    //udh setup blom
    const setupNeeded = userData[username].setup === false;

    res.render('profile', { 
      title: 'Profile mu',
      handleLike: handleLike,
      username: username, 
      handleUnlike: handleUnlike,
      tag: usertag,
      pp: pp,
      setupNeeded: setupNeeded,
      posts: acakKonten(currentUser),
      userbio: userbio
    });
  } else {
    res.render('login', { title: 'FourtyFour | Login' });
  }
});

// main aplikasi (aplikasi utama / User Interface)

app.get('/startup', (req, res) => {
  // jika pengguna sudah masuk ke dalam sesi (session), redirect ke halaman success
  if (req.session.user) {
    res.redirect('/startup/welcome');
  } else {
    res.render('startup', { title: 'FourtyFour | Login' });
  }
});
// untuk menampilkan halaman yg terhubung langsung ke '/startup/welcome'

app.get('/startup/welcome', (req, res) => {
  
  if (req.session.user) {
     res.render('welcome', { title: 'Startup' });
  } else {
    res.render('login', { title: 'FourtyFour | Login' });
  }
});
// sistem untuk menyimpan dan memproses proses registrasi akun



//end basic


















// Account handler (module sistem)

app.get('/login', (req, res) => {
  // jika pengguna sudah masuk ke dalam sesi (session), redirect ke halaman success
  if (req.session.user) {
    res.redirect('/app');
  } else {
    res.render('login', { title: 'FourtyFour | Login' });
  }
});
//sistem interface dalam proses login antara user dengan akun


app.get('/signup', (req, res) => {

  if (req.session.user) {
    res.redirect('/app');
  } else {
    res.render('sign', { title: 'FourtyFour | SignUp' });
  }

});
//sistem interface untuk menyimpan, membuat, enskripsi, serta membuat akun

app.get('/email', (req, res) => {
  res.render('mail', { title: 'FourtyFour' });
});
//sistem untuk meampilkan form yg fungsi nya akan mengrimkan email yg terhubung langsung ke handler send-mailer.js

app.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Load existing user data from file
    const userData = JSON.parse(fs.readFileSync('db/user.json'));

    // Check if user already exists
    if (userData[username]) {
      return res.render('sign', { error: 'Username Sudah Ada' });
    } 

    const emailExists = Object.values(userData).some(user => user.email === email);
    if (emailExists) {
      return res.render('sign', { error: 'Email Sudah terpakai' });
    }

    const unverifiedEmailExists = Object.values(userData).some(user => user.email === email && !user.isVerified);
    if (unverifiedEmailExists) {
      return res.render('sign', { error: 'Email Sudah Ada dan Belum Diverifikasi' });
    }
    
    // Generate a verification ID using UUID
    const verificationId = uuidv4();

    // Store the user data in the database (including isVerified set to false)
    userData[username] = {
      password: await bcrypt.hash(password, 10),
      email,
      isVerified: false,
      verificationId,
      gender: "none",
      birth: "none",
      setup: false,
      photo: "cdn/basic/bassicpp.jpg"
    };
    fs.writeFileSync('db/user.json', JSON.stringify(userData, null, 2));

    // Send verification email
    sendVerificationEmail(email, verificationId);

    // Redirect to a success page or display a success message
    res.render('berhasil', { title: 'Successfully :)' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});
//sistem utamadari interface yg bertugas membuat, enskripsi, serta membuat akun 

app.get('/verify', (req, res) => {
  try {
    const { id } = req.query;

    // Load existing user data from file
    const userData = JSON.parse(fs.readFileSync('db/user.json'));

    // Find the user with the given verification ID
    const username = Object.keys(userData).find((user) => userData[user].verificationId === id);

    if (username) {
      // Update the user's isVerified status to true and remove the verificationId
      userData[username].isVerified = true;
      delete userData[username].verificationId;
      fs.writeFileSync('db/user.json', JSON.stringify(userData, null, 2));

      // Redirect to a success page or display a success message
       res.render('sukses', { title: 'Successfully :)' });
    } else {
      res.send('Invalid verification link.');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});
//sistem untuk memverifikasi akun sebagai akun yg terverfikasi oleh sistem

app.post('/login', function(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const users = JSON.parse(fs.readFileSync('db/user.json', 'utf8'));


  // cek apakah username dan password cocok dengan data di dalam user.json
  if (users[username] && users[username].password === password) {
    // set session dan redirect ke halaman sukses
    req.session.user = username;
    res.redirect('/app');
  } else {
    res.send(`
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@7.12.15/dist/sweetalert2.all.min.js"></script>
<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@7.12.15/dist/sweetalert2.min.css'>


  <script>
 window.onload = function() {
  swal({
    title: "Something Went Wrong",
    text: "Username / Password salah",
    imageUrl: "https://cdn.dribbble.com/users/1138587/screenshots/3533772/media/0a1bbe82fdae32ba8401531908e74874.gif",
    imageWidth: 450,
    imageHeight: 325,
    imageAlt: "Loading.. Bang",
    showCancelButton: false,
    confirmButtonColor: "#008000",
    reverseButtons: true,
    allowOutsideClick: false,
    confirmButtonText: '<a href="/login">Kembali ke login</a>'
  });
};
</script>

<style>
a{
color: white;
text-decoration:none;
}
</style>
`);
  }
});
//sistem utama dalam proses login antara user dengan akun dengan proteksi extra

app.get('/logout', function(req, res) {
  req.session.destroy(function(err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/');
    }
  });
});
//untuk menghapus sesi dari sesion user dengan akun

app.get('/success', function(req, res) {
  if (req.session.user) {
    res.send(`Welcome, ${req.session.user}!`);
  } else {
    res.redirect('/login');
  }
});

app.post('/req0', (req, res) => {
  // Load existing user data from file
  const userData = JSON.parse(fs.readFileSync('db/user.json'));

  // Check if user already exists
  if (userData[req.body.username]) {
    res.send('User already exists');
  } else {
    // Check if required fields are filled
    if (!req.body.username || !req.body.email || !req.body.password) {
      // Jika ada data yang belum diisi, tampilkan pesan error di HTML
      res.render('sign', { error: 'Please fill all the fields.' });
    } else {
      // Generate salt and hash password using Bcrypt
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          // Save new user data to file
          userData[req.body.username] = {
            password: hash,
            email: req.body.email
          };
          fs.writeFileSync('db/user.json', JSON.stringify(userData, null, 2));

          // Redirect to login page
          res.redirect('/login');
        });
      });
    }
  }
});

app.post('/login-startup', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const userData = +JSON.parse(fs.readFileSync('db/user.json'));

  // Check if user exists
  if (!userData[username]) {
    // Jika user tidak terdaftar, tampilkan pesan error di HTML
    res.render('login', { error: 'User not registered.' });
  } else {
    // Compare hashed password with entered password using Bcrypt
    bcrypt.compare(password, userData[username].password, (err, result) => {
      if (result) {
        // Set session and redirect to success page
        req.session.user = username;
        res.redirect('/startup/welcome');
      } else {
        // Jika password salah, tampilkan pesan error di HTML
        res.render('login', { error: 'Incorrect password.' });
      }
    });
  }
});

app.post('/login-auth0', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const userData = JSON.parse(fs.readFileSync('db/user.json'));

  // Check if user exists
  if (!userData[username]) {
    // Jika user tidak terdaftar, tampilkan pesan error di HTML
    res.render('login', { error: 'User not registered.' });
  } else {
    // Compare hashed password with entered password using Bcrypt
    bcrypt.compare(password, userData[username].password, (err, result) => {
      if (result) {
        // Set session and redirect to success page
        req.session.user = username;
        res.redirect('/app');
      } else {
        // Jika password salah, tampilkan pesan error di HTML
        res.render('login', { error: 'Incorrect password.' });
      }
    });
  }
});

// end handler



// utility and handler (hard)

app.post('/create', (req, res) => {
  

  try {
    // Baca data topik dari file JSON
    const posts = JSON.parse(fs.readFileSync('db/post.json', 'utf8'));

    // Cek apakah topik dengan nama yang sama sudah ada
    if (posts.hasOwnProperty(req.body['topic-name'])) {
      res.status(409).json({ message: 'Topic with the same name already exists.' });
      return;
    }

    const time = new Date().toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    const randomNumber = Math.floor(Math.random() * 9000000) + 1000000;

    // Buat objek topik baru dan tambahkan ke data topik
    posts[req.body['topic-name']] = [
      {
        author: req.session.user,
        content: req.body['topic-name'],
        like: 0,
        id: randomNumber.toString(),
        comment: 0,
        time,
      },
    ];

    // Tulis data topik yang diperbarui ke file JSON
    fs.writeFileSync('db/post.json', JSON.stringify(posts));

    // Redirect ke halaman utama
    res.redirect('/app');
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

app.post('/startup/process', upload.single('profile'), (req, res) => {
  try {
    const { birthday, gender, username } = req.body;
    const user = req.session.user;

    console.log('Request body:', req.body);
    console.log('File info:', req.file);

    // Load existing user data from file
    const userData = JSON.parse(fs.readFileSync('db/user.json'));

    if (!userData[user]) {
      return res.status(404).send('User not found.');
    }

    // Update the gender format
    let formattedGender;
    if (gender === 'male') {
      formattedGender = 'he/him';
    } else if (gender === 'female') {
      formattedGender = 'she/her';
    } else if (gender === 'other') {
      formattedGender = 'Orang Gila';
    } else if (gender === 'prefer-not-to-answer') {
      formattedGender = 'none';
    } else {
      formattedGender = 'none';
    }

    // Convert the birth date format
    const formattedBirth = new Date(birthday).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    // Update the user data in the database
    userData[user].gender = formattedGender;
    userData[user].birth = formattedBirth;
    userData[user].photo = `cdn/${user}.jpg`;
    userData[user].setup = true;

    if (username.trim() !== '') { // Memastikan username tidak kosong
      userData[user].usertag = username.trim();
    }

    fs.writeFileSync('db/user.json', JSON.stringify(userData, null, 2));

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});





































 // folder handler


app.use('/static', express.static('./static'))

app.use('/assets', express.static('./assets'))

app.use('/cdn', express.static(path.join(__dirname, 'cdn')));
// Middleware untuk menangani permintaan langsung ke file gambar di dalam /cdn
app.use('/cdn', (req, res, next) => {
    const requestedImagePath = path.join(__dirname, 'cdn', req.path);
    if (fs.existsSync(requestedImagePath) && fs.lstatSync(requestedImagePath).isFile()) {
        // Jika permintaan langsung ke file gambar, kirimkan respons 403 Forbidden
        return res.status(403).send('Forbidden');
    }
    // Lanjutkan jika bukan permintaan langsung ke file gambar
    next();
});

// Middleware untuk menangani permintaan ke /cdn
app.use('/cdn', (req, res, next) => {
    // Jika bukan permintaan dari tag <img> (misalnya, permintaan langsung), render halaman 403 Forbidden
    if (!req.headers.referer || !req.headers.referer.includes('/cdn')) {
        return res.status(403).render('403', { title: 'Forbidden' });
    }
    // Lanjutkan jika permintaan berasal dari tag <img>
    next();
});



module.exports = { handleLike, handleUnlike };

//404 handler

app.get('*', (req, res) => {
  res.render('404', { title: 'Are you lost?' });
});

// port
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
