const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'fourtyfourapp@gmail.com',
    pass: 'zpkeksgrtuolynta',
  },
});

function sendVerificationEmail(toEmail, verificationId) {
  const mailOptions = {
    from: 'fourtyfourapp@gmail.com',
    to: toEmail,
    subject: 'Verify Your Account',
    html: `
<div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="text-align: center;">FourtyFour</h2> <hr>
        <h3 style="text-align: center;">Verifikasi akun FourtyNet</h3>
        <h4 style="text-align: center;">Bantuan datang! Silakan Verifikasi akun Anda</h4>
        <p>Halo Pengguna Baru</p>
        <p>Klik tombol di bawah ini untuk Verifikasi akun Anda.</p>
        
        <p style="text-align: center;">
          <a href="http://66aeefab-396f-406c-968f-a67b8c9ebbbb-00-1yl433i5vp1lm.sisko.replit.dev/verify?id=${verificationId}" 
             style="display: inline-block; padding: 10px 20px; font-size: 16px; color: #fff; background-color: #28a745; text-decoration: none; border-radius: 5px;">
             Verifikasi Akun Ku
          </a>
        </p>
        <p>Pastikan setelah berhasil masuk, langsung setup profile dahulu.</p>
        <hr>
        <p style="font-size: 12px; color: #888;">
          Apabila Anda masih belum bisa masuk atau masalah lainnya, hubungi langsung Tim Kami di 
          <a href="tel:081228800048">085156591459</a> via WhatsApp atau SMS
        </p>
        <p style="text-align: center; font-size: 12px; color: #888;">
          PT. EsempehBerkarya.corp <br>
          connect with people eveywhere, everytime
        </p>
      </div>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

module.exports = {
  sendVerificationEmail,
};
