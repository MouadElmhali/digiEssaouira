import { mailOptions, transporter } from "../../config/nodemailer";
import { Writable } from "stream";
import formidable from "formidable";

const CONTACT_MESSAGE_FIELDS = {
    name: "اسم الجمعية ",
    date: "تارخ تأسيس الجمعية ",
    prisident: "الممثل القانوني للجمعية ",
    email: "البريد الالكتروني ",
    facebook: "روابط مواقع التواصل الإجتماعي الخاصة بالجمعية",
    fieldOfWork: "مجال اشتغال الجمعية  ",
    region: "مكان عمل الجمعية ",
    phone: "الهاتف ",
};

const generateEmailContent = (data) => {
    const stringData = Object.entries(data).reduce(
        (str, [key, val]) =>
            (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
        ""
    );
    const htmlData = Object.entries(data).reduce((str, [key, val]) => {
        return (str += `<h3 class="form-heading" align="right">${CONTACT_MESSAGE_FIELDS[key]}</h3><p class="form-answer" align="right">${val}</p>`);
    }, "");

    return {
        text: stringData,
        html: `
    <!DOCTYPE html>
    <html lang="ar">
    
    <head>
        <title></title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <style type="text/css">
            body,
            table,
            td,
            a {
                -webkit-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
            }
    
            table {
                border-collapse: collapse !important;
            }
    
            body {
                height: 100% !important;
                margin: 0 !important;
                padding: 0 !important;
                width: 100% !important;
                text-align: right !important;
            }
    
            @media screen and (max-width: 525px) {
                .wrapper {
                    width: 100% !important;
                    max-width: 100% !important;
                }
    
                .responsive-table {
                    width: 100% !important;
                }
    
                .padding {
                    padding: 10px 5% 15px 5% !important;
                }
    
                .section-padding {
                    padding: 0 15px 50px 15px !important;
                }
            }
    
            .form-container {
                margin-bottom: 24px;
                padding: 20px;
                border: 1px dashed #ccc;
            }
    
            .form-heading {
                color: #2a2a2a;
                font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
                font-weight: 400;
                text-align: right;
                line-height: 20px;
                font-size: 18px;
                margin: 0 0 8px;
                padding: 0;
            }
    
            .form-answer {
                color: #2a2a2a;
                font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
                font-weight: 300;
                text-align: right;
                line-height: 20px;
                font-size: 16px;
                margin: 0 0 24px;
                padding: 0;
            }
    
            div[style*="margin: 16px 0;"] {
                margin: 0 !important;
            }
        </style>
    </head>
    
    <body style="margin: 0 !important; padding: 0 !important; background: #fff">
        <div
            style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px;  max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; ">
        </div>
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
                <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px"
                        class="responsive-table">
                        <tr>
                            <td>
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td>
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                <tr>
                                                    <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; "
                                                        class="padding message-content">
                                                        <h2>New Contact Message</h2>
                                                        <div class="form-container">${htmlData}</div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    
    </html>`,
    };
};

// body parser config
const formidableConfig = {
    keepExtensions: true,
    maxFileSize: 10_000_000,
    maxFieldsSize: 10_000_000,
    maxFields: 8,
    allowEmptyFiles: false,
    multiples: false,
  };
  
  // Disable default parser
  export const config = {
    api: {
      bodyParser: false,
    },
  };
  
  // Parsing body request
  function formidablePromise(req, opts) {
    return new Promise((accept, reject) => {
      const form = formidable(opts);
  
      form.parse(req, (err, fields, files) => {
        if (err) {
          return reject(err);
        }
        return accept({ fields, files });
      });
    });
  }
  
  // File writer
    const fileConsumer = (acc) => {
    const writable = new Writable({
      write: (chunk, _enc, next) => {
        acc.push(chunk);
        next();
      },
    });
  
    return writable;
  };

const handler = async (req, res) => {
    if (req.method === "POST") {
        
        try {
            
            // File buffer
            const chunks = [];
            
            // Parsing body of request 
            const { fields, files } = await formidablePromise(req, {
                ...formidableConfig,
                // consume this, otherwise formidable tries to save the file to disk
                fileWriteStreamHandler: () => fileConsumer(chunks),
            });
            
            
            // Verify if all fields are filled
            if (!fields ||
                !fields.name ||
                !fields.email ||
                !fields.phone ||
                !fields.date ||
                !fields.prisident ||
                !fields.fieldOfWork ||
                !fields.region ||
                !files.file 
            ) {
                return res.status(400).send({ message: "Fill all the required fields", fields });
            }

            const ext = files.file[0].originalFilename.split(".");
            
            if( ext[1] !== 'png' && ext[1] !== 'jpg' && ext[1] !== 'jpeg') {
                return res.status(400).send({ message: "File extension is forbiden" });
            }
            
            // or the actual field name you used in the front end
            const { file } = files;

            console.log(file)

            // The content of picture
            const fileData = Buffer.concat(chunks);

            // Name of picture
            const filename = file[0]?.originalFilename;

            if(file[0].size >= 5132600) {
                return res.status(400).send({ message: "File size should be under 5132600 KB" });
            }

            // Construct attachements
            const attachments = [{ content: fileData, filename }];

            // Send email
            await transporter.sendMail({
                ...mailOptions,
                ...generateEmailContent(fields),
                subject: "إضافة جمعية : DigiEssaouira",
                attachments,
            });

            // Response with success
            return res.status(200).json({ success: true });

        } catch (err) {
            // Response with error message
            return res.status(400).json({ message: err.message });
        }
    }

    return res.status(400).json({ message: "Bad request" });
};


export default handler;