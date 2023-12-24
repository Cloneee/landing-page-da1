import React from "react";

import email from "./icons/email.svg";
import location from "./icons/location.svg";

function Footer() {
  return (
    <div className="flex py-16 px-32 bg-gray-100 gap-16">
      <div className="flex-1">
        <h1 className="text-5xl font-bold">
          <span
            style={{
              background:
                "var(--gradient-1, linear-gradient(132deg, #33BFFD 6.64%, #D7F51B 84.47%))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Get the latest news
          </span>{" "}
          on GoWare events, research and product launches
        </h1>
        <div className="py-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" aria-required={true} className="font-bold">
              Business email <span className="text-red-600">*</span>
            </label>
            <input
              className="bg-transparent focus:outline-0 border-b-2 border-gray-300"
              type="text"
              id="email"
              placeholder="Type email adress"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="country" aria-required={true} className="font-bold">
              Country <span className="text-red-600">*</span>
            </label>
            <select
              id="country"
              className="bg-transparent focus:outline-0 border-b-2 border-gray-300"
            >
              <option value="Viet Nam">Viet Nam</option>
              <option value="America">America</option>
              <option value="England">England</option>
              <option value="China">China</option>
            </select>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-2 items-start">
              <input type="checkbox" className="mt-1" />
              <p>
                Yes, I would like to receive marketing communications regarding
                GoWare products, services, and events
              </p>
            </div>
            <p>
              By providing this information, you agree that we may process your
              personal data in accordance with our{" "}
              <a href="#" className="text-blue-400">
                Privacy Statement
              </a>
            </p>
          </div>
        </div>
      </div>
      <div  className=" flex-1 flex flex-col gap-16">
        <div className="flex gap-32 text-lg">
          <div className="flex flex-col">
            <div className="font-bold">Company</div>
            <div>Value</div>
            <div>About us</div>
            <div>Contact us</div>
          </div>
          <div>
            <div className="font-bold">Services</div>
            <div className="font-bold">Portfolio</div>
          </div>
        </div>
        <div>
          <div className="flex gap-2">
            <img src={location} alt="" className="h-fit" />
            <b>
              Lim Tower 3, WeWork floor 2, 29A Nguyen Dinh Chieu, Da Kao Ward,
              District 1, HCM City, Vietnam
            </b>
          </div>
          <div className="flex gap-2">
            <img src={email} alt=""  className="h-fit" />
            <b>phanan@kie.io</b>
          </div>
        </div>
        <div>© 2022 Goware Technology JSC. All Rights Reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
