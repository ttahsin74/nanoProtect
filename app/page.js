"use client";
import Image from "next/image";
import { useState } from "react";
import { ProgressBar } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";

import axios from "axios";
import navLogo from "../public/nav-logo.jpg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoCallSharp, IoMenu } from "react-icons/io5";
import { IoIosMailOpen } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
const MultiStepForm = () => {
  const [menu, setMenu] = useState();
  const [step, setStep] = useState(1);
  const [resultOne, setResultOne] = useState("");
  const [resultTwo, setResultTwo] = useState("");
  const [formData, setFormData] = useState({
    step1: "",
    step2: "",
    step3: "",
    step4: "",
    step5: "",
    name: "",
    phone: "",
    email: "",
  });

  const [error, setError] = useState("");

  const [price, setPrice] = useState("");
  const [replacement, setReplacement] = useState("");

  const nextStep = () => {
    if (step === 1 && formData.step1 === "") {
      setError("Please make a selection before proceeding to the next step.");
      return;
    }
    if (step === 2 && formData.step2 === "") {
      setError("Please make a selection before proceeding to the next step.");
      return;
    }
    if (step === 3 && formData.step3 === "") {
      setError("Please make a selection before proceeding to the next step.");
      return;
    }
    if (step === 4 && formData.step4 === "") {
      setError("Please make a selection before proceeding to the next step.");
      return;
    }
    if (step === 5 && (!formData.name || !formData.phone || !formData.email)) {
      setError(
        "Please fill out all the fields before proceeding to the next step."
      );
      return;
    }
    if (step === 6 && formData.step6 === "") {
      setError("Please make a selection before proceeding to the next step.");
      return;
    }

    setError("");
    if (step < 6) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);

    // Clear the form data when navigating backwards
    const updatedFormData = { ...formData };
    if (step <= 5) {
      updatedFormData[`step${step}`] = "";
    }
    setFormData(updatedFormData);

    if (step === 6) {
      setPrice("");
      setReplacement("");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [`step${step}`]: e.target.value });
    setError("");
  };

  const handleSubmit = async () => {
    if (step === 1 && formData.step1 === "") {
      setError("Please make a selection before proceeding to the next step.");
      return;
    }
    if (step === 2 && formData.step2 === "") {
      setError("Please make a selection before proceeding to the next step.");
      return;
    }
    if (step === 3 && formData.step3 === "") {
      setError("Please make a selection before proceeding to the next step.");
      return;
    }
    if (step === 4 && formData.step4 === "") {
      setError("Please make a selection before proceeding to the next step.");
      return;
    }
    if (step === 5 && (!formData.name || !formData.phone || !formData.email)) {
      setError(
        "Please fill out all the fields before proceeding to the next step."
      );
      return;
    }

    setError("");

    // Price calculation logic
    const selectedProtection = formData.step1;
    const selectedAge = formData.step2;
    const selectedSize = formData.step4;

    // Example logic: adjust this according to your pricing rules
    let calculatedPrice = "";
    let calculatedReplacement = "";

    if (selectedProtection === "Asphalt Shingle Roof") {
      if (selectedAge === "0-8 Years") {
        if (selectedSize === "Small (500 - 1500sqft)") {
          calculatedPrice = "$800 - $2,400";
          calculatedReplacement = "$5,000 - $14,000";
        }
      }
      if (selectedAge === "8-12 Years") {
        if (selectedSize === "Small (500 - 1500sqft)") {
          calculatedPrice = "$700 - $2,200";
          calculatedReplacement = "$5,000 - $14,000";
        }
      }
      if (selectedAge === "12-20 Years") {
        if (selectedSize === "Small (500 - 1500sqft)") {
          calculatedPrice = "$700 - $2,200";
          calculatedReplacement = "$5,000 - $14,000";
        }
      }
      if (selectedAge === "20+ Years") {
        if (selectedSize === "Small (500 - 1500sqft)") {
          calculatedPrice = "$700 - $2,200";
          calculatedReplacement = "$5,000 - $14,000";
        }
      }
    }
    if (selectedProtection === "Asphalt Shingle Roof") {
      if (selectedAge === "0-8 Years") {
        if (selectedSize === "Medium (1500 - 2500sqft)") {
          calculatedPrice = "$2,500 - $4,000";
          calculatedReplacement = "$14,000 - $24,000";
        }
      }
      if (selectedAge === "8-12 Years") {
        if (selectedSize === "Medium (1500 - 2500sqft)") {
          calculatedPrice = "$2,200 - $3,600";
          calculatedReplacement = "$14,000 - $24,000";
        }
      }
      if (selectedAge === "12-20 Years") {
        if (selectedSize === "Medium (1500 - 2500sqft)") {
          calculatedPrice = "$2,200 - $3,600";
          calculatedReplacement = "$14,000 - $24,000";
        }
      }
      if (selectedAge === "20+ Years") {
        if (selectedSize === "Medium (1500 - 2500sqft)") {
          calculatedPrice = "$2,200 - $3,600";
          calculatedReplacement = "$14,000 - $24,000";
        }
      }
    }
    if (selectedProtection === "Asphalt Shingle Roof") {
      if (selectedAge === "0-8 Years") {
        if (selectedSize === "Large (2500 - 3500sqft)") {
          calculatedPrice = "$4,000 - $5,600";
          calculatedReplacement = "$24,000 - $33,000";
        }
      }
      if (selectedAge === "8-12 Years") {
        if (selectedSize === "Large (2500 - 3500sqft)") {
          calculatedPrice = "$3,600- $5,100";
          calculatedReplacement = "$24,000 - $33,000";
        }
      }
      if (selectedAge === "12-20 Years") {
        if (selectedSize === "Large (2500 - 3500sqft)") {
          calculatedPrice = "$3,600- $5,100";
          calculatedReplacement = "$24,000 - $33,000";
        }
      }
      if (selectedAge === "20+ Years") {
        if (selectedSize === "Large (2500 - 3500sqft)") {
          calculatedPrice = "$3,600- $5,100";
          calculatedReplacement = "$24,000 - $33,000";
        }
      }
    }
    if (selectedProtection === "Asphalt Shingle Roof") {
      if (selectedAge === "0-8 Years") {
        if (selectedSize === "Extra Large (3500 - 5000sqft)") {
          calculatedPrice = "$5,600 - $8,000";
          calculatedReplacement = "$33,000 - $48,000";
        }
      }
      if (selectedAge === "8-12 Years") {
        if (selectedSize === "Extra Large (3500 - 5000sqft)") {
          calculatedPrice = "$3,600- $5,100";
          calculatedReplacement = "$33,000 - $48,000";
        }
      }
      if (selectedAge === "12-20 Years") {
        if (selectedSize === "Extra Large (3500 - 5000sqft)") {
          calculatedPrice = "$3,600- $5,100";
          calculatedReplacement = "$33,000 - $48,000";
        }
      }
      if (selectedAge === "20+ Years") {
        if (selectedSize === "Extra Large (3500 - 5000sqft)") {
          calculatedPrice = "$3,600- $5,100";
          calculatedReplacement = "$33,000 - $48,000";
        }
      }
    }
    if (selectedProtection === "Elastomeric Membrane/SBS") {
      if (selectedAge === "0-8 Years") {
        if (selectedSize === "Small (500 - 1500sqft)") {
          calculatedPrice = "$800 - $2,400";
          calculatedReplacement = "$7,000 - $20,000";
        }
      }
      if (selectedAge === "8-12 Years") {
        if (selectedSize === "Small (500 - 1500sqft)") {
          calculatedPrice = "$800 - $2,400";
          calculatedReplacement = "$7,000 - $20,000";
        }
      }
      if (selectedAge === "12-20 Years") {
        if (selectedSize === "Small (500 - 1500sqft)") {
          calculatedPrice = "$800 - $2,400";
          calculatedReplacement = "$7,000 - $20,000";
        }
      }
      if (selectedAge === "20+ Years") {
        if (selectedSize === "Small (500 - 1500sqft)") {
          calculatedPrice = "$800 - $2,400";
          calculatedReplacement = "$7,000 - $20,000";
        }
      }
    }
    if (selectedProtection === "Elastomeric Membrane/SBS") {
      if (selectedAge === "0-8 Years") {
        if (selectedSize === "Medium (1500 - 2500sqft)") {
          calculatedPrice = "$2,400 - $4,000";
          calculatedReplacement = "$14,000 - $24,000";
        }
      }
      if (selectedAge === "8-12 Years") {
        if (selectedSize === "Medium (1500 - 2500sqft)") {
          calculatedPrice = "$2,400 - $3,600";
          calculatedReplacement = "$14,000 - $24,000";
        }
      }
      if (selectedAge === "12-20 Years") {
        if (selectedSize === "Medium (1500 - 2500sqft)") {
          calculatedPrice = "$2,400 - $3,600";
          calculatedReplacement = "$14,000 - $24,000";
        }
      }
      if (selectedAge === "20+ Years") {
        if (selectedSize === "Medium (1500 - 2500sqft)") {
          calculatedPrice = "$2,400 - $3,600";
          calculatedReplacement = "$14,000 - $24,000";
        }
      }
    }
    if (selectedProtection === "Elastomeric Membrane/SBS") {
      if (selectedAge === "0-8 Years") {
        if (selectedSize === "Large (2500 - 3500sqft)") {
          calculatedPrice = "$4,000 - $5,600";
          calculatedReplacement = "$24,000 - $33,000";
        }
      }
      if (selectedAge === "8-12 Years") {
        if (selectedSize === "Large (2500 - 3500sqft)") {
          calculatedPrice = "$3,600- $5,100";
          calculatedReplacement = "$24,000 - $33,000";
        }
      }
      if (selectedAge === "12-20 Years") {
        if (selectedSize === "Large (2500 - 3500sqft)") {
          calculatedPrice = "$3,600- $5,100";
          calculatedReplacement = "$24,000 - $33,000";
        }
      }
      if (selectedAge === "20+ Years") {
        if (selectedSize === "Large (2500 - 3500sqft)") {
          calculatedPrice = "$3,600- $5,100";
          calculatedReplacement = "$24,000 - $33,000";
        }
      }
    }
    if (selectedProtection === "Elastomeric Membrane/SBS") {
      if (selectedAge === "0-8 Years") {
        if (selectedSize === "Extra Large (3500 - 5000sqft)") {
          calculatedPrice = "$5,600 - $8,000";
          calculatedReplacement = "$33,000 - $48,000";
        }
      }
      if (selectedAge === "8-12 Years") {
        if (selectedSize === "Extra Large (3500 - 5000sqft)") {
          calculatedPrice = "$5,600 - $8,000";
          calculatedReplacement = "$33,000 - $48,000";
        }
      }
      if (selectedAge === "12-20 Years") {
        if (selectedSize === "Extra Large (3500 - 5000sqft)") {
          calculatedPrice = "$5,600 - $8,000";
          calculatedReplacement = "$33,000 - $48,000";
        }
      }
      if (selectedAge === "20+ Years") {
        if (selectedSize === "Extra Large (3500 - 5000sqft)") {
          calculatedPrice = "$5,600 - $8,000";
          calculatedReplacement = "$33,000 - $48,000";
        }
      }
    }
    if (selectedProtection === "Concrete or Asphalt") {
      if (selectedAge === "0-8 Years") {
        if (selectedSize === "Small (500 - 1500sqft)") {
          calculatedPrice = "$800 - $2,400";
          calculatedReplacement = "$13,000 - $38,000";
        }
      }
      if (selectedAge === "8-12 Years") {
        if (selectedSize === "Small (500 - 1500sqft)") {
          calculatedPrice = "$800 - $2,400";
          calculatedReplacement = "$13,000 - $38,000";
        }
      }
      if (selectedAge === "12-20 Years") {
        if (selectedSize === "Small (500 - 1500sqft)") {
          calculatedPrice = "$800 - $2,400";
          calculatedReplacement = "$13,000 - $38,000";
        }
      }
      if (selectedAge === "20+ Years") {
        if (selectedSize === "Small (500 - 1500sqft)") {
          calculatedPrice = "$800 - $2,400";
          calculatedReplacement = "$13,000 - $38,000";
        }
      }
    }
    if (selectedProtection === "Concrete or Asphalt") {
      if (selectedAge === "0-8 Years") {
        if (selectedSize === "Medium (1500 - 2500sqft)") {
          calculatedPrice = "$2,400 - $4,000";
          calculatedReplacement = "$38,000 - $63,000";
        }
      }
      if (selectedAge === "8-12 Years") {
        if (selectedSize === "Medium (1500 - 2500sqft)") {
          calculatedPrice = "$2,400 - $4,000";
          calculatedReplacement = "$38,000 - $63,000";
        }
      }
      if (selectedAge === "12-20 Years") {
        if (selectedSize === "Medium (1500 - 2500sqft)") {
          calculatedPrice = "$2,400 - $4,000";
          calculatedReplacement = "$38,000 - $63,000";
        }
      }
      if (selectedAge === "20+ Years") {
        if (selectedSize === "Medium (1500 - 2500sqft)") {
          calculatedPrice = "$2,400 - $4,000";
          calculatedReplacement = "$38,000 - $63,000";
        }
      }
    }
    if (selectedProtection === "Concrete or Asphalt") {
      if (selectedAge === "0-8 Years") {
        if (selectedSize === "Large (2500 - 3500sqft)") {
          calculatedPrice = "$4,000 - $5,600";
          calculatedReplacement = "$63,000 - $88,000";
        }
      }
      if (selectedAge === "8-12 Years") {
        if (selectedSize === "Large (2500 - 3500sqft)") {
          calculatedPrice = "$4,000 - $5,600";
          calculatedReplacement = "$63,000 - $88,000";
        }
      }
      if (selectedAge === "12-20 Years") {
        if (selectedSize === "Large (2500 - 3500sqft)") {
          calculatedPrice = "$4,000 - $5,600";
          calculatedReplacement = "$63,000 - $88,000";
        }
      }
      if (selectedAge === "20+ Years") {
        if (selectedSize === "Large (2500 - 3500sqft)") {
          calculatedPrice = "$4,000 - $5,600";
          calculatedReplacement = "$63,000 - $88,000";
        }
      }
    }
    if (selectedProtection === "Concrete or Asphalt") {
      if (selectedAge === "0-8 Years") {
        if (selectedSize === "Extra Large (3500 - 5000sqft)") {
          calculatedPrice = "$5,600 - $8,000";
          calculatedReplacement = "$88,000 - $125,000";
        }
      }
      if (selectedAge === "8-12 Years") {
        if (selectedSize === "Extra Large (3500 - 5000sqft)") {
          calculatedPrice = "$5,600 - $8,000";
          calculatedReplacement = "$88,000 - $125,000";
        }
      }
      if (selectedAge === "12-20 Years") {
        if (selectedSize === "Extra Large (3500 - 5000sqft)") {
          calculatedPrice = "$5,600 - $8,000";
          calculatedReplacement = "$88,000 - $125,000";
        }
      }
      if (selectedAge === "20+ Years") {
        if (selectedSize === "Extra Large (3500 - 5000sqft)") {
          calculatedPrice = "$5,600 - $8,000";
          calculatedReplacement = "$88,000 - $125,000";
        }
      }
    }
    if (selectedProtection === "Wood") {
      if (selectedAge === "0-8 Years") {
        if (selectedSize === "Small (500 - 1500sqft)") {
          calculatedPrice = "$800 - $2,400";
          calculatedReplacement = "$9,000 - $27,000";
        }
      }
      if (selectedAge === "8-12 Years") {
        if (selectedSize === "Small (500 - 1500sqft)") {
          calculatedPrice = "$800 - $2,400";
          calculatedReplacement = "$9,000 - $27,000";
        }
      }
      if (selectedAge === "12-20 Years") {
        if (selectedSize === "Small (500 - 1500sqft)") {
          calculatedPrice = "$800 - $2,400";
          calculatedReplacement = "$9,000 - $27,000";
        }
      }
      if (selectedAge === "20+ Years") {
        if (selectedSize === "Small (500 - 1500sqft)") {
          calculatedPrice =
            "$                                                                    800 - $2,400";
          calculatedReplacement = "$9,000 - $27,000";
        }
      }
    }
    if (selectedProtection === "Wood") {
      if (selectedAge === "0-8 Years") {
        if (selectedSize === "Medium (1500 - 2500sqft)") {
          calculatedPrice = "$2,400 - $4,000";
          calculatedReplacement = "$27,000 - $45,000";
        }
      }
      if (selectedAge === "8-12 Years") {
        if (selectedSize === "Medium (1500 - 2500sqft)") {
          calculatedPrice = "$2,400 - $4,000";
          calculatedReplacement = "$27,000 - $45,000";
        }
      }
      if (selectedAge === "12-20 Years") {
        if (selectedSize === "Medium (1500 - 2500sqft)") {
          calculatedPrice = "$2,400 - $4,000";
          calculatedReplacement = "$27,000 - $45,000";
        }
      }
      if (selectedAge === "20+ Years") {
        if (selectedSize === "Medium (1500 - 2500sqft)") {
          calculatedPrice = "$2,400 - $4,000";
          calculatedReplacement = "$27,000 - $45,000";
        }
      }
    }
    if (selectedProtection === "Wood") {
      if (selectedAge === "0-8 Years") {
        if (selectedSize === "Large (2500 - 3500sqft)") {
          calculatedPrice = "$4,000 - $5,600";
          calculatedReplacement = "$45,000 - $63,000";
        }
      }
      if (selectedAge === "8-12 Years") {
        if (selectedSize === "Large (2500 - 3500sqft)") {
          calculatedPrice = "$4,000 - $5,600";
          calculatedReplacement = "$45,000 - $63,000";
        }
      }
      if (selectedAge === "12-20 Years") {
        if (selectedSize === "Large (2500 - 3500sqft)") {
          calculatedPrice = "$4,000 - $5,600";
          calculatedReplacement = "$45,000 - $63,000";
        }
      }
      if (selectedAge === "20+ Years") {
        if (selectedSize === "Large (2500 - 3500sqft)") {
          calculatedPrice = "$4,000 - $5,600";
          calculatedReplacement = "$45,000 - $63,000";
        }
      }
    }
    if (selectedProtection === "Wood") {
      if (selectedAge === "0-8 Years") {
        if (selectedSize === "Extra Large (3500 - 5000sqft)") {
          calculatedPrice = "$5,600 - $8,000";
          calculatedReplacement = "$63,000 - $90,000";
        }
      }
      if (selectedAge === "8-12 Years") {
        if (selectedSize === "Extra Large (3500 - 5000sqft)") {
          calculatedPrice = "$5,600 - $8,000";
          calculatedReplacement = "$63,000 - $90,000";
        }
      }
      if (selectedAge === "12-20 Years") {
        if (selectedSize === "Extra Large (3500 - 5000sqft)") {
          calculatedPrice = "$5,600 - $8,000";
          calculatedReplacement = "$63,000 - $90,000";
        }
      }
      if (selectedAge === "20+ Years") {
        if (selectedSize === "Extra Large (3500 - 5000sqft)") {
          calculatedPrice = "$5,600 - $8,000";
          calculatedReplacement = "$63,000 - $90,000";
        }
      }
    }

    setPrice(calculatedPrice);
    setReplacement(calculatedReplacement);

    if (step < 6) setStep(step + 1);

    if (formData.step1 === "Wood") {
      setResultOne("Wood Protection with GoNano");
      setResultTwo("Wood Replacement Cost");
    } else if (formData.step1 === "Concrete or Asphalt") {
      setResultOne("Concrete or Asphalt Protection with GoNano");
      setResultTwo("Concrete or Asphalt Replacement Cost");
    } else {
      setResultOne("Roof Replacement costs");
      setResultTwo("Roof Replacement costs");
    }

    // console.log(formData);
    const jsonData = {
      to: ["tanmoybiswas2420@gmail.com", `${formData.email}`],
      subject: "Cost Estimation Request",
      emailBody: `Full Name :  ${formData.name}\nPhone Number : ${formData.phone}\nEmail Address : ${formData.email}\nProtection : ${formData.step1}\nEstimated Age : ${formData.step2}\nAny Damage :  ${formData.step3}\nEstimated Size : ${formData.step4}\n${resultOne} : ${price}\n${resultTwo} : ${replacement}`,
      securityKey: "RCHRHGVDCEXXEXJKJHJ",
    };

    try {
      // Send POST request with JSON data
      const response = await axios.post("/api/mail-sender", jsonData, {
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
      });
      // alert("Email sent successfully");
      // Log the response data
      // console.log("Response Data:", response.data);
    } catch (error) {
      if (error.response) {
        console.error("Error Response Data:", error.response.data);
        console.error("Error Response Status:", error.response.status);
        console.error("Error Response Headers:", error.response.headers);
      } else if (error.request) {
        console.error("Error Request:", error.request);
      } else {
        console.error("Error Message:", error.message);
      }
    }
  };

  return (
    <div>
      <div className="bg-[#1B1C36] py-[1%] ">
        <div className="max-w-[90%] m-auto ">
          <div className="flex items-center justify-between ">
            <div className="md:w-[12%] w-[25%]">
              <a href="https://nanoprotectsolutions.ca/">
                <Image src={navLogo} alt="nano-Logo" />
              </a>
            </div>
            <div
              className={`absolute md:static bg-[#1B1C36] z-[10] md:z-10 ${
                menu ? "top-[60px]" : "top-[-200%]"
              } duration-300 md:w-auto w-[90%] md:bg-transparent`}
            >
              <ul className="flex md:flex-row flex-col  md:items-center text-white font-medium text-lg px-5 md:px-0 md:py-0 py-2 ">
                <li className="px-[11px] hover:text-[#6973ED] cursor-pointer duration-300 md:py-9 py-2">
                  <a href="https://nanoprotectsolutions.ca/"> Home</a>
                </li>
                <li className="px-[11px] flex md:flex-row flex-col md:items-center gap-2 hover:text-[#6973ED] cursor-pointer duration-300 relative md:py-9 py-2 group">
                  <span>
                    <a href="https://nanoprotectsolutions.ca/services/">
                      Services
                    </a>
                  </span>
                  <div className="">
                    <MdKeyboardArrowDown className="md:block hidden" />
                    <ul className="flex flex-col py-2 md:py-7 md:px-10 px-5 gap-4 md:absolute static  w-[250px] left-0 bg-[#1B1C36] group-hover:top-[95px] top-[-500%] md:opacity-0 group-hover:opacity-100">
                      <li className="hover:text-[#B9B9C1] text-white">
                        <a href="https://nanoprotectsolutions.ca/shingle-protection/">
                          Shingle Protection
                        </a>
                      </li>
                      <li className="hover:text-[#B9B9C1] text-white md:whitespace-normal whitespace-nowrap">
                        <a href="https://nanoprotectsolutions.ca/membrane-sbs-protection/">
                          Membrane/SBS Protection
                        </a>
                      </li>
                      <li className="hover:text-[#B9B9C1] text-white">
                        <a href="https://nanoprotectsolutions.ca/concrete-and-asphalt-protection/"></a>
                        Concrete And Asphalt Protection
                      </li>
                      <li className="hover:text-[#B9B9C1] text-white">
                        <a href="https://nanoprotectsolutions.ca/wood-protection/"></a>
                        Wood Protection
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="px-[11px] flex md:flex-row flex-col md:items-center gap-2 hover:text-[#6973ED] cursor-pointer duration-300 relative md:py-9 py-2 group">
                  <span>
                    <a href="https://nanoprotectsolutions.ca/info/">Info</a>
                  </span>
                  <div className="">
                    <MdKeyboardArrowDown className="md:block hidden" />
                    <ul className="flex flex-col py-2 md:py-7 md:px-10 px-5 gap-4 md:absolute static  w-[250px] left-0 bg-[#1B1C36] group-hover:top-[95px] top-[-500%] md:opacity-0 group-hover:opacity-100">
                      <li className="hover:text-[#B9B9C1] text-white">
                        <a href="https://nanoprotectsolutions.ca/science/">
                          Science
                        </a>
                      </li>
                      <li className="hover:text-[#B9B9C1] text-white md:whitespace-normal whitespace-nowrap">
                        <a href="https://nanoprotectsolutions.ca/faqs/">FAQs</a>
                      </li>
                      <li className="hover:text-[#B9B9C1] text-white">
                        <a href="https://nanoprotectsolutions.ca/blog/">Blog</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="px-[11px] hover:text-[#6973ED] cursor-pointer duration-300 md:py-9 py-2">
                  <a href="https://nanoprotectsolutions.ca/financing/">
                    Financing
                  </a>
                </li>
                <li className="px-[11px] hover:text-[#6973ED] cursor-pointer duration-300 md:py-9 py-2">
                  <a href="https://nanoprotectsolutions.ca/free-inspection/">
                    Free Inspection
                  </a>
                </li>
              </ul>
            </div>
            <div className="block md:hidden text-white text-[35px]">
              <button
                onClick={() => {
                  setMenu(!menu);
                }}
                className="cursor-pointer"
              >
                <IoMenu />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[800px] m-auto lg:px-[0] px-4 my-[100px]">
        <div>
          <h2 className="text-[#313131] text-[34px] font-bold text-center mb-[26px]">
            Cost Estimator
          </h2>
          <p className="text-[#313131] text-center text-[25px] font-bold leading-[1.5em]">
            Please answer the following questions
          </p>
        </div>

        <div className="mt-[60px]">
          <h3 className="text-[24px] font-bold leading-[2em] mb-2 text-[#313131]">
            Step {step} of 6
          </h3>
          <ProgressBar percent={(step / 6) * 100} filledBackground="#685DE8" />
          <div>
            <form>
              {step === 1 && (
                <div className="mt-10 mb-7">
                  <label className="font-semibold" htmlFor="step1">
                    What is Being Protected?
                    <span className="text-red-400">*</span>
                  </label>
                  <select
                    className="rounded-md mt-3 w-full py-2 px-4 border-2 outline-none"
                    id="step1"
                    value={formData.step1}
                    onChange={handleChange}
                  >
                    <option className="hidden" value="" disabled>
                      Selections are -
                    </option>
                    <option value="Asphalt Shingle Roof" name="asphalt">
                      Asphalt Shingle Roof
                    </option>
                    <option value="Elastomeric Membrane/SBS" name="elastomeric">
                      Elastomeric Membrane/SBS
                    </option>
                    <option value="Concrete or Asphalt" name="concrete">
                      Concrete or Asphalt
                    </option>
                    <option value="Wood" name="wood">
                      Wood
                    </option>
                  </select>
                </div>
              )}
              {step === 2 && (
                <div className="mt-10 mb-7">
                  <label className="font-semibold" htmlFor="step2">
                    What is the estimated age?
                    <span className="text-red-400">*</span>
                  </label>
                  <select
                    className="rounded-md mt-3 w-full py-2 px-4 border-2 outline-none"
                    id="step2"
                    value={formData.step2}
                    onChange={handleChange}
                  >
                    <option className="hidden" value="" disabled>
                      Selections are -
                    </option>
                    <option value="0-8 Years">0-8 Years</option>
                    <option value="8-12 Years">8-12 Years</option>
                    <option value="12-20 Years">12-20 Years</option>
                    <option value="20+ Years">20 Years +</option>
                  </select>
                </div>
              )}
              {step === 3 && (
                <div className="mt-10 mb-7">
                  <label className="font-semibold" htmlFor="step3">
                    Do you have any damage that you know of?
                    <span className="text-red-400">*</span>
                  </label>
                  <select
                    className="rounded-md mt-3 w-full py-2 px-4 border-2 outline-none"
                    id="step3"
                    value={formData.step3}
                    onChange={handleChange}
                  >
                    <option className="hidden" value="" disabled>
                      Selections are -
                    </option>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                    <option value="Unknown">Unknown</option>
                  </select>
                </div>
              )}
              {step === 4 && (
                <div className="mt-10 mb-7">
                  <label className="font-semibold" htmlFor="step4">
                    What would you estimate the size?
                    <span className="text-red-400">*</span>
                  </label>
                  <select
                    className="rounded-md mt-3 w-full py-2 px-4 border-2 outline-none"
                    id="step4"
                    value={formData.step4}
                    onChange={handleChange}
                  >
                    <option className="hidden" value="" disabled>
                      Selections are -
                    </option>
                    <option value="Small (500 - 1500sqft)">
                      Small (500 - 1500sqft)
                    </option>
                    <option value="Medium (1500 - 2500sqft)">
                      Medium (1500 - 2500sqft)
                    </option>
                    <option value="Large (2500 - 3500sqft)">
                      Large (2500 - 3500sqft)
                    </option>
                    <option value="Extra Large (3500 - 5000sqft)">
                      Extra Large (3500 - 5000sqft)
                    </option>
                  </select>
                </div>
              )}
              {step === 5 && (
                <div className="mt-10 mb-7">
                  <div>
                    <h2 className="text-[30px] font-bold text-[#313131] text-center mb-7">
                      Request a Call Back
                    </h2>
                    <div className="mt-3 flex items-center gap-3 justify-between w-full">
                      <div className="flex w-full flex-col gap-1">
                        <label className="font-semibold" htmlFor="name">
                          Your Name
                          <span className="text-red-400">*</span>
                        </label>
                        <input
                          className="border-2 outline-none py-2 px-4 rounded-md"
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>
                      <div className="flex w-full flex-col gap-1">
                        <label className="font-semibold" htmlFor="phone">
                          Your Phone
                          <span className="text-red-400">*</span>
                        </label>
                        <input
                          className="border-2 outline-none py-2 px-4 rounded-md"
                          type="number"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-3 justify-between w-full">
                      <div className="flex w-full flex-col gap-1">
                        <label className="font-semibold" htmlFor="email">
                          Your Email
                          <span className="text-red-400">*</span>
                        </label>
                        <input
                          className="border-2 outline-none py-2 px-4 rounded-md"
                          type="text"
                          id="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {step === 6 && (
                <div className="mt-10 mb-7 text-center">
                  <div>
                    <h2 className="text-[30px] font-semibold text-[#313131]">
                      {resultOne}
                    </h2>
                    <p className="text-[34px] font-bold text-[#685DE8]">
                      {price}
                    </p>
                  </div>
                  <div>
                    <p className="text-[20px] font-normal">VS</p>
                  </div>
                  <div>
                    <h2 className="text-[30px] font-semibold text-[#313131]">
                      {resultTwo}
                    </h2>
                    <p className="text-[34px] font-bold text-[#685DE8]">
                      {replacement}
                    </p>
                  </div>
                </div>
              )}
            </form>

            {error && <p className="text-red-400 mt-4">{error}</p>}

            <div className="mt-10 flex items-center justify-between">
              <button
                className={`bg-[#685DE8] text-[#fafafa] py-2 px-4 rounded-md ${
                  step === 1 ? "opacity-0" : "opacity-1"
                }`}
                onClick={prevStep}
                disabled={step === 1}
              >
                Previous
              </button>
              {step === 5 ? (
                <button
                  className="bg-[#685DE8] text-white py-2 px-4 rounded-md"
                  onClick={handleSubmit}
                >
                  Check Price
                </button>
              ) : step === 6 ? (
                ""
              ) : (
                <button
                  className="bg-[#685DE8] text-white py-2 px-4 rounded-md"
                  onClick={nextStep}
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white">
        <div className="mx-auto w-full max-w-[90%] ">
          <div className="md:flex md:justify-between w-full">
            <div className="md:w-[25%] w-full ">
              <div className="mb-6 md:mb-0 w-[40%] sm:w-[30%] md:w-[45%] md:m-0 m-auto">
                <a
                  href="https://nanoprotectsolutions.ca/"
                  className=" items-center px-4 py-10 rounded-lg bg-[#1B1C36] inline-block"
                >
                  <Image className="" src={navLogo} alt="nano-Logo" />
                </a>
              </div>
              <div>
                <p className="text-lg font-medium text-[#747474] mt-2 mb-5">
                  NanoProtect Solutions is Calgary’s only choice for
                  scientifically improving the lifespan of your assets.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 w-[70%]">
              <div className="">
                <h2 className="relative mb-6 font-bold text-gray-900 text-[23px] whitespace-nowrap after-content">
                  Quick Links
                </h2>
                <ul className="text-[#313131] font-medium">
                  <li className="mb-4 w-full text-lg">
                    <a href="https://nanoprotectsolutions.ca/" className=" ">
                      Home
                    </a>
                  </li>
                  <li className="mb-4 w-full">
                    <a
                      href="https://nanoprotectsolutions.ca/services/"
                      className=" "
                    >
                      Services
                    </a>
                  </li>
                  <li className="mb-4 w-full">
                    <a
                      href="https://nanoprotectsolutions.ca/faqs/"
                      className=" "
                    >
                      Faqs
                    </a>
                  </li>
                  <li className="mb-4 w-full">
                    <a
                      href="https://nanoprotectsolutions.ca/financing/"
                      className=" "
                    >
                      Financing
                    </a>
                  </li>
                  <li className="mb-4 w-full">
                    <a
                      href="https://nanoprotectsolutions.ca/free-inspection/"
                      className=" "
                    >
                      Free Inspection
                    </a>
                  </li>

                  {/* <li className="mb-4 w-full">
                    <a href="" className=" ">
                      Cost Estimator
                    </a>
                  </li> */}
                </ul>
              </div>
              <div className="">
                <h2 className="relative mb-6  text-gray-900 text-[23px] whitespace-nowrap after-content font-bold">
                  Services
                </h2>
                <ul className="text-[#313131] font-medium">
                  <li className="mb-4 w-full text-lg">
                    <a
                      href="https://nanoprotectsolutions.ca/shingle-protection/"
                      className=" "
                    >
                      Shingle Protection
                    </a>
                  </li>
                  <li className="mb-4 w-full">
                    <a
                      href="https://nanoprotectsolutions.ca/membrane-sbs-protection/"
                      className=" "
                    >
                      Membrane/SBS Protection
                    </a>
                  </li>
                  <li className="mb-4 w-full">
                    <a
                      href="https://nanoprotectsolutions.ca/concrete-and-asphalt-protection/"
                      className=" "
                    >
                      Concrete And Asphalt Protection
                    </a>
                  </li>
                  <li className="mb-4 w-full">
                    <a
                      href="https://nanoprotectsolutions.ca/wood-protection/"
                      className=" "
                    >
                      Wood Protection
                    </a>
                  </li>
                </ul>
              </div>
              <div className="">
                <h2 className="relative mb-6  font-bold text-gray-900 text-[23px] whitespace-nowrap after-content">
                  Contact Info
                </h2>
                <ul className="text-[#313131] font-medium">
                  <li className="mb-4 w-full text-lg">
                    <a
                      href="tel: 587-885-4388"
                      className=" flex items-center gap-2"
                    >
                      <span>
                        <IoCallSharp />
                      </span>
                      <span className="whitespace-nowrap">587-885-4388</span>
                    </a>
                  </li>
                  <li className="mb-4 w-full">
                    <a
                      href="mailto:info@nanoprotectsolutions.com"
                      className=" flex items-center gap-2 "
                    >
                      <span>
                        <IoIosMailOpen />
                      </span>
                      <span className="whitespace-nowrap">
                        info@nanoprotectsolutions.com
                      </span>
                    </a>
                  </li>
                  <li className="mb-4 w-full">
                    <a
                      href="https://www.google.com/maps/place/Calgary,+AB,+Canada/@51.0271596,-114.4174685,59259m/data=!3m2!1e3!4b1!4m6!3m5!1s0x537170039f843fd5:0x266d3bb1b652b63a!8m2!3d51.0447331!4d-114.0718831!16zL20vMDFyMzI?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D"
                      className=" flex items-center gap-2 "
                    >
                      <span>
                        <ImLocation />
                      </span>
                      <span className="whitespace-nowrap">
                        Calgary, Alberta
                      </span>
                    </a>
                  </li>
                  <li className="flex items-center gap-2 md:mt-0 my-7">
                    <a href="https://www.facebook.com/NanoProtectSolutions/">
                      <div className="w-[40px] h-[40px] border-[#313131] flex items-center justify-center border rounded-full">
                        <FaFacebookF />
                      </div>
                    </a>
                    <a href="https://www.instagram.com/nanoprotectsolutions/">
                      <div className="w-[40px] h-[40px] border-[#313131] flex items-center justify-center border rounded-full">
                        <CiInstagram />
                      </div>
                    </a>
                    <a href="https://www.linkedin.com/company/nanoprotect-solutions/">
                      <div className="w-[40px] h-[40px] border-[#313131] flex items-center justify-center border rounded-full">
                        <FaLinkedinIn />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center font-normal py-3 bg-[#1B1C36] text-white">
          <p>
            © 2024 |{" "}
            <a href="https://nanoprotectsolutions.ca/">NanoProtect Solutions</a>{" "}
            | All Rights Reserved | Developed by
            <a href="https://skydreamit.com/"> Sky Dream IT</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MultiStepForm;
