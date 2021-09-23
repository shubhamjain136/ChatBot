import React from "react";
import { useState } from "react";
function Chatbot({ chat, setChat }) {
  const [min, setMin] = useState(false);
  return (
    <div
      className=""
      style={{
        width: "30%",
        // border: "1px solid black",
        marginRight: "5px",
        marginLeft: "auto",
        // zIndex: "5",
        position: "absolute",
        right: "0",
        bottom: "0",
      }}
    >
      <header
        style={{
          background: "#2570d7",
          // width: "30%",
          marginLeft: "auto",
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
          // paddingTop: "5px",
          // border: "1px solid #ababab",
        }}
      >
        <div className="d-flex justify-content-between ">
          <div
            className="d-flex align-items-center text-white"
            style={{ marginLeft: "10px" }}
          >
            <img
              src="icon.jpg"
              alt=""
              style={{ height: "50px", padding: "0px 5px" }}
            />
            <h5>Ask Eva</h5>
          </div>
          <div
            className="fs-3 text "
            style={{ filter: "invert()", marginRight: "15px" }}
          >
            <i class="fas fa-gift mx-1"></i>

            <button
              className="mx-1"
              style={{
                backgroundColor: "transparent",
                outline: "none",
                border: "none",
              }}
              onClick={() => {
                setMin(!min);
              }}
            >
              {!min && <i class="fas fa-compress-alt mx-1"></i>}
              {min && <i class="fas fa-expand-alt"></i>}
            </button>
            <button
              className="mx-1"
              style={{
                backgroundColor: "transparent",
                outline: "none",
                border: "none",
              }}
              onClick={() => {
                setChat(false);
              }}
            >
              &#10005;
            </button>
          </div>
        </div>
      </header>
      <article
        style={{
          // width: "30%",
          marginLeft: "auto",
          backgroundColor: "white",
          // borderTop: "none",
        }}
        className={min ? "hide" : ""}
      >
        <div
          className="text-white p-2"
          style={{
            background: "#2570d7",
            border: "1px solid #ababab",
            borderTop: "none",
            padding: "0px",
          }}
        >
          <h5>Hi !</h5>
          <p>
            I am EVA, your personal assistant to help you with HDFC Bank related
            queries. You can select from the options below or can type your
            question in the space provided.
          </p>
        </div>
        <div
          className="d-flex "
          style={{
            border: "1px solid #ababab",
            borderTop: "none",
            borderBottom: "none",
          }}
        >
          <img
            src="ad.jpg"
            alt="hi"
            style={{
              height: "auto",
              width: "80%",
              position: "relative",
              margin: "0px auto",
              borderRadius: "20px",
              bottom: "10px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            padding: "15px",
            border: "1px solid #ababab",
            borderTop: "none",
            // borderBottom: "none",
          }}
        >
          <div className="service">Credit Card Services</div>
          <div className="service">Insta Accout</div>
          <div className="service">Whatsapp Banking</div>
          <div className="service">Pay Bills/ Recharge</div>
          <div className="service">Report Failed Transaction</div>
          <div className="service">Book Fixed Deposit</div>
          <div className="service">Consumer Loan Details</div>
          <div className="service">PAN Aadhaar Link</div>
          <div className="service">
            iPhone 13 Offer
            {/* <span class="badge badge-pill badge-primary">Primary</span> */}
            <span
              style={{
                backgroundColor: "red",
                borderRadius: "50%",
                position: "relative",
                bottom: "15px",
                left: "15px",
                color: "white",
                padding: "3px",
                fontSize: "14px",
              }}
            >
              NEW
            </span>
          </div>
        </div>
      </article>
      <footer
        style={{
          // width: "30%",
          marginLeft: "auto",
          // border: "2px solid black",
          border: "1px solid #ababab",
          height: "50px",
          borderTop: "none",
        }}
      >
        <input
          type="text"
          style={{
            width: "90%",
            height: "100%",
            outline: "none",
            border: "none",
            backgroundColor: "white",
            paddingLeft: "30px",
          }}
          placeholder="Start a conversation"
        />
        <button
          style={{
            width: "10%",
            height: "100%",
            outline: "none",
            border: "none",
            backgroundColor: "white",
          }}
        >
          <i class="fas fa-microphone fs-5" style={{ color: "#2570d7" }}></i>
        </button>
      </footer>
    </div>
  );
}

export default Chatbot;
