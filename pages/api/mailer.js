//sending mail

export default (req, res) => {
  const body = JSON.parse(req.body);
  res.status(200).json({ body });
  console.log("body", body);

  // create reusable transporter object using the default SMTP transport
  var nodemailer = require("nodemailer");

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "adaksudi@gmail.com",
      pass: "sudi11101997",
    },
  });

  const mailOptions = {
    from: "adaksudi@gmail.com", // sender address
    to: "adaksudi@gmail.com,adakchandramala@gmail.com", // list of receivers
    subject: `ORDER ${body.title}`, // Subject line
    html: `
    <div>
    <h1>${body.FirstName + body.LastName}</h1>
    <p>${body.address}</p>
    <p>${body.state}</p>
    <p>${body.zipcode}</p>
    <p>${body.phone}</p>
    <p>${body.email}</p>
    <p>${body.title}</p>
    <p>${body.product.price}</p>
    </div>`, // plain text body
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
};
