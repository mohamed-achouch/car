import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top_footer">
          <div className="contact">
            <h1>Subscribe to the newsletter</h1>
            <div className="message">
              <input type="text" placeholder="enter your email" />
          <div className="send">
          <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8.90991 19.9201L15.4299 13.4001C16.1999 12.6301 16.1999 11.3701 15.4299 10.6001L8.90991 4.08008"
                  stroke="#FFFFFE"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
          </div>
            </div>
            <div className="social">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle cx="16" cy="16" r="16" fill="#55ACEE" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.3289 9.88039C22.8773 10.1697 21.8404 10.59 21.3291 10.59V10.5909C20.7452 9.9809 19.9231 9.6001 19.0115 9.6001C17.2408 9.6001 15.805 11.0359 15.805 12.8059C15.805 13.0518 15.8335 13.2917 15.8861 13.5217H15.8856C13.4837 13.4587 10.8568 12.2548 9.27541 10.1944C8.30312 11.8773 9.14451 13.749 10.2479 14.431C9.87019 14.4595 9.1749 14.3875 8.84764 14.0682C8.82571 15.1852 9.3628 16.6652 11.3212 17.2021C10.944 17.405 10.2764 17.3468 9.98607 17.3037C10.088 18.2466 11.4084 19.4793 12.8523 19.4793C12.3377 20.0746 10.4014 21.1543 8.22852 20.8108C9.70422 21.7087 11.4241 22.2287 13.2445 22.2287C18.4177 22.2287 22.4352 18.0361 22.219 12.8639C22.2181 12.8582 22.2181 12.8525 22.2176 12.8463C22.2181 12.833 22.219 12.8197 22.219 12.8059C22.219 12.7898 22.2176 12.7746 22.2171 12.7591C22.688 12.437 23.3199 11.8673 23.7714 11.1174C23.5096 11.2616 22.7241 11.5504 21.9933 11.6221C22.4623 11.3689 23.1573 10.5397 23.3289 9.88039Z"
                  fill="white"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle cx="16" cy="16" r="16" fill="#3B5998" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.8007 23.788H16.7148V15.7837H18.9009L19.3333 13.2826H16.7148V11.4702C16.7148 10.886 17.0926 10.2726 17.6325 10.2726H19.1207V7.77148H17.2969V7.7827C14.4432 7.88627 13.8569 9.539 13.806 11.275H13.8007V13.2826H12.3429V15.7837H13.8007V23.788Z"
                  fill="white"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle cx="16" cy="16" r="16" fill="#0976B4" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.76704 11.8705C10.8686 11.8705 11.7615 11.0561 11.7615 10.0505C11.7615 9.04394 10.8686 8.22852 9.76704 8.22852C8.66446 8.22852 7.77148 9.04394 7.77148 10.0505C7.77148 11.0561 8.66446 11.8705 9.76704 11.8705Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.22852 23.5783H11.8072V13.2571H8.22852V23.5783Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.83 17.838C16.83 16.6543 17.39 15.4969 18.729 15.4969C20.068 15.4969 20.3973 16.6543 20.3973 17.8097V23.4466H23.96V17.5792C23.96 13.5028 21.5504 12.8 20.068 12.8C18.587 12.8 17.7701 13.301 16.83 14.5149V13.1254H13.2572V23.4466H16.83V17.838Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="menu">
            <ul>
              <li>Buying & Selling</li>
              <li>Find a car</li>
              <li>Listings by city</li>
              <li>Sell your car</li>
              <li>Compare side by side</li>
            </ul>
            <ul>
              <li>Resource</li>
              <li>Blog</li>
              <li>Guides</li>
              <li>FAQ</li>
              <li>Help Center</li>
            </ul>
            <ul>
              <li>About</li>
              <li>Company</li>
              <li>Career</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="bottom_footer">
          <p>© 2023 Car Leadership</p>
          <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Trust & Safety</li>
            <li>Law Enforcement</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
