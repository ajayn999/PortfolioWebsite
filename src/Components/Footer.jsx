// import React from "react";
// import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

// import { CgProfile } from "react-icons/cg";

// function Footer() {
//   return (

//     <footer className="footer--container">

//       <p className="footer--content">AJAY PARIHAR</p>
//       <br />
//       <div id="icon">
//         <h1>
//           <a
//             style={{ color: "black" }}
//             href="https://github.com/ajayn999"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <AiFillGithub />
//           </a>
//         </h1>
//         <h1>
//           <a
//             style={{ color: "black" }}
//             href="https://www.linkedin.com/in/mr-ajay-pariharn/"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <AiFillLinkedin />
//           </a>
//         </h1>
//         <h1>
//           <a
//             style={{ color: "black" }}
//             href="https://www.crio.do/learn/portfolio/ajaypariharn/"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <CgProfile />
//           </a>
//         </h1>
//         <h1>
//           <a
//             style={{ color: "black" }}
//             href="https://instagram.com/ajaypariharn?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D "
//             target="_blank"
//             rel="noreferrer"
//           >
//             <AiFillInstagram />
//           </a>
//         </h1>
//       </div>
//       <h5>Email : ajaypariharn@gmail.com</h5>
//       <h5>Phone : +919173541990</h5>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

import { CgProfile } from "react-icons/cg";

const Footer = () => {
  return (
    <div>
      <footer style={{display:'flex',flexDirection:'raw' , justifyContent: 'space-around',alignItems: 'center'}}>
        <div>
          <p>Phone:+919173541990</p>
          <p>Email:ajaypariharn@gmail.com</p>
        </div>

        <div>
        <div id="icon">
          <h1>
            <a
              style={{ color: "black" }}
              href="https://github.com/ajayn999"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
          </h1>
          <h1>
            <a
              style={{ color: "black" }}
              href="https://www.linkedin.com/in/mr-ajay-pariharn/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
          </h1>
          <h1>
            <a
              style={{ color: "black" }}
              href="https://www.crio.do/learn/portfolio/ajaypariharn/"
              target="_blank"
              rel="noreferrer"
            >
              <CgProfile />
            </a>
          </h1>
          <h1>
            <a
              style={{ color: "black" }}
              href="https://instagram.com/ajaypariharn?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D "
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram />
            </a>
          </h1>
        </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
