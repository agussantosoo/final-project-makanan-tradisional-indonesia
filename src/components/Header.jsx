import React from "react";
import {
  BsEnvelope,
  BsFacebook,
  BsInstagram,
  BsTelephoneFill,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { Link } from "react-router-dom";

let LinkFB = "https://www.facebook.com";
let LinkTw = "https://www.twitter.com";
let LinkIG = "https://www.instagram.com";
let LinkYT = "https://www.youtube.com";

export default function Header() {
  return (
    <div id="top-header" className="fixed-top">
      <div className="telp padding">
        <BsTelephoneFill /> (+62) 82194273124
      </div>
      <span className="line-vertical"></span>
      <div className="email padding">
        <BsEnvelope /> info@makananindonesia.com
      </div>
      <div className="space"></div>
      <div className="sosmed">
        <Link to={LinkFB} className="my-1 mx-3 link-light">
          <BsFacebook />
        </Link>
        <span className="line-vertical"></span>
        <Link to={LinkTw} className="my-1 mx-3 link-light">
          <BsTwitter />
        </Link>
        <span className="line-vertical"></span>
        <Link to={LinkIG} className="my-1 mx-3 link-light">
          <BsInstagram />
        </Link>
        <span className="line-vertical"></span>
        <Link to={LinkYT} className="my-1 mx-3 link-light">
          <BsYoutube />
        </Link>
      </div>
    </div>
  );
}
