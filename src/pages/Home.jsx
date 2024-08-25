import Carroussel from "../Component/Carroussel";
import { FaStar, FaUser, FaUserTie } from "react-icons/fa";
import { Card2, images, products } from "../../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdWork, MdBusinessCenter, MdSecurity, MdApps } from "react-icons/md";
import ScrollReveal from "scrollreveal";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CountUp from 'react-countup';
export default function Home() {
  const [inCart, setInCart] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (inCart) {
      navigate("/viewcart");
    } else {
      setInCart(true);
    }
  };

  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(".reveal", {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      delay: 200,
      reset: true,
    });
  }, []);

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#38A53F" }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#38A53F" }}
        onClick={onClick}
      />
    );
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  var settings1 = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const settings2 = {
    dots: true,
    fade: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  return (
    <main>
     <div className="mx-auto overflow-hidden container-fluid">
<div className="grid grid-cols-1 p-6 bg-[#064D17] h-[40rem] md:grid-cols-2">
    <div className="mx-10 text-left reveal">
    <p className='text-white md:text-5xl mt-[100px]  text-3xl  font-bold'>Find the perfect freelance
    </p>
    <p className='mt-5 text-3xl font-bold text-white md:text-5xl'>Services for your business
</p>
<p className="mt-5 text-lg text-white">Ceci est une description de votre projet. Vous pouvez ajouter plus d'informations ici pour donner un aperçu de ce que fait votre projet.</p>

<form className="max-w-2xl mx-auto">   
    <label  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-8 my-5 text-gray-900 bg-white border border-gray-300 rounded-full text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search" required />
        <button type="submit" className="text-white absolute end-2.5 bottom-4 p-5 bg-yellow-300 items-center  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full cursor-pointer text-sm  dark:bg-blue-600  dark:focus:ring-blue-800 hover:bg-white">Search</button>
    </div>
</form>
 <div className="grid relative sm:bottom-[2rem] sm:grid-cols-2 sm:flex grid-cols-1 space-x-10 md:grid-cols-2 lg:grid-cols-4 compteur">
         <div className='mt-[3rem]'>
         <span className='px-4 text-3xl font-bold text-white'>
          <CountUp
          start={0}
          end={950}
          duration={2.75}
          ></CountUp>M</span>
         <p className='text-center text-white text-md'>Total Freelancer</p>
        </div>
        <div className='mt-[3rem]'>
         <span className='px-4 text-3xl font-bold text-white '>  
         <CountUp
          start={0}
          end={850}
          duration={2.5}
          ></CountUp>M</span>
         <p className='text-center text-white text-md'>Positive Review</p>
        </div>
        <div className='mt-[3rem]'>
          <span className='px-4 text-3xl font-bold text-white '>
          <CountUp
          start={0}
          end={98}
          duration={2.75}
          
          ></CountUp> 
            M</span>
         <p className='text-center text-white text-md'>Order recieved</p>
        </div>
        <div className='mt-[3rem]'>
         <span className='px-4 text-3xl font-bold text-white '>
         <CountUp
          start={0}
          end={250}
          duration={2.75}
          
          ></CountUp>
            M</span>
         <p className='text-center text-white text-md'>Projects Completed</p>
        </div>
    </div>
    </div>
    <div className="hidden space-x-4 lg:flex">
    <img src="images/team5-150x150.jpg" alt="Image de votre projet" className=" object-cover reveal w-[300px] h-auto mt-[80px]"/>
    <img src="images/team2-150x150.jpg" alt="Image de votre projet" className="object-cover h-auto rounded reveal w-80"/>
    </div>
    <div className="absolute">
    <img src="images/link1.png" alt="Image de votre projet" className="h-auto reveal relative inset-10 mx-[50rem] rounded w-80 "/>
    <img src="images/link3.png" alt="Image de votre projet" className="h-auto reveal relative mt-[300px] inset-0 mx-[50rem] rounded"/>
    </div>
</div>
</div>
      <div className="container">
        <div className="mx-10 my-10 drop reveal">
          <p className="text-3xl font-bold ">Need something done ?</p>
          <p className="mt-3">Most viewed and all-time top-selling services</p>
        </div>
        <div className="grid justify-start grid-cols-1 mx-5 space-x-6 reveal icon md:grid-cols-2 lg:grid-cols-4 ">
          <div className="mx-4 icon1">
            <FaUserTie className="text-5xl " />
            <p className="mt-2 text-xl font-bold">Post a job</p>
            <p className="mt-3 text-lg">
              It’s free and easy to post a job. <br /> Simply fill in a title,
              description.
            </p>
          </div>
          <div className=" icon1">
            <MdBusinessCenter className="text-5xl" />
            <p className="mt-2 text-xl font-bold">Choose freelancers</p>
            <p className="mt-3 text-lg">
              It’s free and easy to post a job. Simply fill in a title,
              description.
            </p>
          </div>
          <div className="icon1">
            <MdSecurity className="text-5xl" />
            <p className="mt-2 text-xl font-bold">Pay safely</p>
            <p className="mt-3 text-lg">
              It’s free and easy to post a job. Simply fill in a title,
              description.
            </p>
          </div>
          <div className="icon1">
            <MdApps className="text-4xl" />
            <p className="mt-2 text-xl font-bold">We’re here to help</p>
            <p className="mt-3 text-lg">
              It’s free and easy to post a job. Simply fill in a title,
              description.
            </p>
          </div>
        </div>
        <div className="flex justify-between reveal btn">
          <div className="mx-10 my-20 drop">
            <p className="text-3xl font-bold">Popular Services</p>
            <p className="mt-3 text-gray">
              Most viewed and all-time top-selling services
            </p>
          </div>
          <div className="mx-10 my-20 drop">
            <p className="mt-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-gray space-x-6">
              <button className="p-2 text-center text-black border border-black rounded-full shadow-lg">
                Design & Creative
              </button>
              <button className="p-2 text-center text-black border-black rounded-full hover:bg-white hover:shadow-lg hover:border">
                Developpement & IT
              </button>
              <button className="p-2 text-center text-black border-black rounded-full hover:bg-white hover:shadow-lg hover:border">
                Digital Marketing
              </button>
              <button className="p-2 text-center text-black border-black rounded-full hover:border hover:bg-white hover:shadow-lg ">
                Writing & Tranlation
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid reveal">
        <div className="max-w-2xl px-4 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
            {products.map((product) => (
              <div key={product.id} className="relative group">
                <div className="w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-50">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="object-cover object-center w-full h-60 lg:h-50 lg:w-full"
                  />
                  <p className="mt-3 text-gray-600 ">{product.title}</p>
                </div>
                <Link
                  to="/add"
                  className="text-lg mx-auto cursor-pointer mb-[-50px] hover:text-black "
                >
                  {product.Category}
                </Link>
                <p className="flex space-x-2 ">
                  <FaStar className="my-1 text-yellow-200" /> {product.icon}
                </p>
                <hr className="mt-3 w-50" />
                <div className="flex justify-between">
                  <div>
                    <h3 className="mt-5 text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        <div className="flex items-center gap-4">
                          <img
                            className="w-10 h-10 rounded-full"
                            src={product.image1}
                            alt=""
                          />
                          <div className="font-medium dark:text-white">
                            <div>{product.name}</div>
                          </div>
                        </div>
                      </a>
                    </h3>
                  </div>
                  <p className="mt-8 text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="bg-[#F9F7F5] p-8 rounded-full text-[#38A53F] font-bold text-lg hover:bg-[#38A53F] hover:text-white">
          All Services
        </button>
      </div>
      <div className="flex flex-col items-center justify-between p-4 row sm:flex-row sm:space-x-4">
        <div className="mx-10 text-center reveal sm:text-left sm:w-1/2 left">
          <p className="font-bold text-[#38A53F]  text-xl">For clients</p>
          <h1 className="my-2 text-3xl font-bold">Find talent your way</h1>
          <p className="my-4">
            Work with the largest network of independent professionals and{" "}
            <br /> get things done—from quick turnarounds to big
            transformations.
          </p>
          <button className="bg-[#38A53F] text-white font-bold p-4 text-center text-lg rounded-full w-50 my-4 hover:bg-[#255044]">
            Contact Us
          </button>
        </div>
        <div className="my-5 right">
          <div className="relative flex justify-center mt-4 sm:justify-end sm:w-1/2 sm:mt-0">
            <img src="images/h2 (1).png" className="w-50" alt="" />
            <div className="absolute inset-0 flex items-center justify-start card">
              <a
                href="#"
                className="block max-w-sm p-8  bg-[#1F4B3F] rounded-lg"
              >
                <p className="mb-2 text-lg text-white">
                  The best for every budget
                </p>
                <p className="mb-2 text-lg text-white">
                  Quality work done quickly
                </p>
                <p className="mb-2 text-lg text-white">
                  Protected payments, every time
                </p>
                <p className="mb-2 text-lg text-white"> 24/7 support</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto reveal">
        <p className="my-4 text-lg text-center">Trusted by the world’s best</p>
        <div className="grid grid-cols-3 my-4 space-x-6 md:grid-cols-4 lg:grid-cols-6">
          <img src="images/b1 (1).png" alt=""  className="mx-6"/>
          <img src="images/b2.png" alt="" />
          <img src="images/b3.png" alt="" />
          <img src="images/b4.png" alt="" />
          <img src="images/b5.png" alt="" />
          <img src="images/b6.png" alt="" />
        </div>
      </div>
      <div className="flex justify-between reveal">
        <div className="mx-5 my-4 left">
          <p className="text-3xl font-bold">Browse talent by category</p>
          <p className="text-lg text-slate-500">
            Get some Inspirations from 1800+ skills
          </p>
        </div>
        <div className="right mt-[20px]">
          <button className="me-5 text-[#38A53F] bg-[#EDE3D7] p-5 rounded-full font-bold hover:bg-[#38A53F] hover:text-white">
            All Category
          </button>
        </div>
      </div>
      <div className="mx-20 slider-container reveal">
        <Slider {...settings}>
          <div>
            <img src="images/c1.jpg" alt="" />
          </div>
          <div>
            <img src="images/c2.jpg" alt="" />
          </div>
          <div>
            <img src="images/c3.jpg" alt="" />
          </div>
          <div>
            <img src="images/c4.jpg" alt="" />
          </div>
          <div>
            <img src="images/c5.jpg" alt="" />
          </div>
        </Slider>
      </div>

      <div className="flex justify-between reveal">
        <div className="mx-5 my-4 left">
          <p className="text-3xl font-bold">Highest Rated Freelancers</p>
          <p className="py-10 text-lg text-gray-500">
            Lorem ipsum dolor sit amet, consectetur.
          </p>
        </div>
        <div className="right mt-[20px]">
          <button className="me-5 text-[#38A53F] bg-[#EDE3D7] p-5 rounded-full font-bold hover:bg-[#38A53F] hover:text-white">
            All Freelance
          </button>
        </div>
      </div>
      <div className="slider-container">
        <Slider {...settings1}>
          <div>
            <div className="max-w-sm mx-3 bg-white border border-gray-200 rounded-lg shadow w-50 dark:bg-gray-800 dark:border-gray-700">
              <a href="#" className="flex justify-center">
                <img
                  className="p-5 rounded-full w-[150px]"
                  src="images/5.jpg"
                  alt="product image"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#" className="text-center">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Thomas pawull
                  </h5>
                  <p className="text-gray-400">Product Manager</p>
                </a>
                <div className="flex  justify-center items-center mt-2.5 mb-5">
                  <div className="flex items-center j">
                    <svg
                      className="w-4 h-4 text-yellow-300 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <p>3.0 (2 Reviews)</p>
                  </div>
                </div>
                <div className="space-x-3 text-center btn">
                  <button className="bg-[#FFF4F3] p-3 rounded-full font-bold hover:bg-black hover:text-white">
                    Animation
                  </button>
                  <button className="bg-[#FFF4F3] p-3 rounded-full font-bold hover:bg-black hover:text-white">
                    Creative
                  </button>
                  <span className="font-bold">+1</span>
                </div>
                <hr className="mt-3" />
                <div className="flex justify-center mt-3 space-x-10">
                  <p>Localisation:</p>
                  <p>Rate:</p>
                </div>
                <div className="flex justify-center space-x-10">
                  <p className="mx-3">Los Angeles</p>
                  <p className="font-bold">$50-$60/h</p>
                </div>
              </div>
              <div className="text-center btn2">
                <Link
                  to="/newprofile"
                  className="p-4 flex justify-center bg-[#CAE9D5] w-full rounded-full mb-3 text-lg font-bold hover:bg-[#38A53F] hover:text-white"
                >
                  View Profil
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow w-50 dark:bg-gray-800 dark:border-gray-700">
              <a href="#" className="flex justify-center">
                <img
                  className="p-5 rounded-full w-[150px]"
                  src="images/9-150x150.jpg"
                  alt="product image"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#" className="text-center">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Freelance
                  </h5>
                  <p className="text-gray-400">Marketing manager</p>
                </a>
                <div className="flex  justify-center items-center mt-2.5 mb-5">
                  <div className="flex items-center j">
                    <svg
                      className="w-4 h-4 text-yellow-300 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <p>5.0 (1 Review)</p>
                  </div>
                </div>
                <div className="space-x-3 text-center btn">
                  <button className="bg-[#FFF4F3] p-3 rounded-full  font-bold hover:bg-black hover:text-white">
                    Animation
                  </button>
                  <button className="bg-[#FFF4F3] p-3 rounded-full font-bold hover:bg-black hover:text-white">
                    Creative
                  </button>
                  <span className="font-bold">+1</span>
                </div>
                <hr className="mt-3" />
                <div className="flex justify-center mt-3 space-x-10">
                  <p>Localisation:</p>
                  <p>Rate:</p>
                </div>
                <div className="flex justify-center space-x-10">
                  <p className="mx-3">Los Angeles</p>
                  <p className="font-bold">$25-$30/h</p>
                </div>
              </div>
              <div className="text-center btn2">
                <button className="p-4 flex justify-center bg-[#CAE9D5] w-full rounded-full mb-3 text-lg font-bold hover:bg-[#38A53F] hover:text-white">
                  View Profil
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="max-w-sm mx-3 bg-white border border-gray-200 rounded-lg shadow w-50 dark:bg-gray-800 dark:border-gray-700">
              <a href="#" className="flex justify-center">
                <img
                  className="p-5 rounded-full w-[150px]"
                  src="images/5.jpg"
                  alt="product image"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#" className="text-center">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Thomas pawull
                  </h5>
                  <p className="text-gray-400">Product Manager</p>
                </a>
                <div className="flex  justify-center items-center mt-2.5 mb-5">
                  <div className="flex items-center j">
                    <svg
                      className="w-4 h-4 text-yellow-300 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <p>3.0 (2 Reviews)</p>
                  </div>
                </div>
                <div className="space-x-3 text-center btn">
                  <button className="bg-[#FFF4F3] p-3 rounded-full font-bold hover:bg-black hover:text-white">
                    Animation
                  </button>
                  <button className="bg-[#FFF4F3] p-3 rounded-full font-bold hover:bg-black hover:text-white">
                    Creative
                  </button>
                  <span className="font-bold">+1</span>
                </div>
                <hr className="mt-3" />
                <div className="flex justify-center mt-3 space-x-10">
                  <p>Localisation:</p>
                  <p>Rate:</p>
                </div>
                <div className="flex justify-center space-x-10">
                  <p className="mx-3">Los Angeles</p>
                  <p className="font-bold">$50-$60/h</p>
                </div>
              </div>
              <div className="text-center btn2">
                <button className="p-4 flex justify-center bg-[#CAE9D5] w-full rounded-full mb-3 text-lg font-bold hover:bg-[#38A53F] hover:text-white">
                  View Profil
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow w-50 dark:bg-gray-800 dark:border-gray-700">
              <a href="#" className="flex justify-center">
                <img
                  className="p-5 rounded-full w-[150px]"
                  src="images/5.jpg"
                  alt="product image"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#" className="text-center">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Thomas pawull
                  </h5>
                  <p className="text-gray-400">Product Manager</p>
                </a>
                <div className="flex  justify-center items-center mt-2.5 mb-5">
                  <div className="flex items-center j">
                    <svg
                      className="w-4 h-4 text-yellow-300 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <p>3.0 (2 Reviews)</p>
                  </div>
                </div>
                <div className="space-x-3 text-center btn">
                  <button className="bg-[#FFF4F3] p-3 rounded-full font-bold hover:bg-black hover:text-white">
                    Animation
                  </button>
                  <button className="bg-[#FFF4F3] p-3 rounded-full font-bold hover:bg-black hover:text-white">
                    Creative
                  </button>
                  <span className="font-bold">+1</span>
                </div>
                <hr className="mt-3" />
                <div className="flex justify-center mt-3 space-x-10">
                  <p>Localisation:</p>
                  <p>Rate:</p>
                </div>
                <div className="flex justify-center space-x-10">
                  <p className="mx-3">Los Angeles</p>
                  <p className="font-bold">$50-$60/h</p>
                </div>
              </div>
              <div className="text-center btn2">
                <button className="p-4 flex justify-center bg-[#CAE9D5] w-full rounded-full mb-3 text-lg font-bold hover:bg-[#38A53F] hover:text-white">
                  View Profil
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="max-w-sm mx-3 bg-white border border-gray-200 rounded-lg shadow w-50 dark:bg-gray-800 dark:border-gray-700">
              <a href="#" className="flex justify-center">
                <img
                  className="p-5 rounded-full w-[150px]"
                  src="images/5.jpg"
                  alt="product image"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#" className="text-center">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Thomas pawull
                  </h5>
                  <p className="text-gray-400">Product Manager</p>
                </a>
                <div className="flex  justify-center items-center mt-2.5 mb-5">
                  <div className="flex items-center j">
                    <svg
                      className="w-4 h-4 text-yellow-300 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <p>3.0 (2 Reviews)</p>
                  </div>
                </div>
                <div className="space-x-3 text-center btn">
                  <button className="bg-[#FFF4F3] p-3 rounded-full font-bold hover:bg-black hover:text-white">
                    Animation
                  </button>
                  <button className="bg-[#FFF4F3] p-3 rounded-full font-bold hover:bg-black hover:text-white">
                    Creative
                  </button>
                  <span className="font-bold">+1</span>
                </div>
                <hr className="mt-3" />
                <div className="flex justify-center mt-3 space-x-10">
                  <p>Localisation:</p>
                  <p>Rate:</p>
                </div>
                <div className="flex justify-center space-x-10">
                  <p className="mx-3">Los Angeles</p>
                  <p className="font-bold">$50-$60/h</p>
                </div>
              </div>
              <div className="text-center btn2">
                <button className="p-4 flex justify-center bg-[#CAE9D5] w-full rounded-full mb-3 text-lg font-bold hover:bg-[#38A53F] hover:text-white">
                  View Profil
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#" className="flex justify-center">
                <img
                  className="p-5 rounded-full w-[150px]"
                  src="images/5.jpg"
                  alt="product image"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#" className="text-center">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Thomas pawull
                  </h5>
                  <p className="text-gray-400">Product Manager</p>
                </a>
                <div className="flex  justify-center items-center mt-2.5 mb-5">
                  <div className="flex items-center j">
                    <svg
                      className="w-4 h-4 text-yellow-300 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <p>3.0 (2 Reviews)</p>
                  </div>
                </div>
                <div className="space-x-3 text-center btn">
                  <button className="bg-[#FFF4F3] p-3 rounded-full font-bold hover:bg-black hover:text-white">
                    Animation
                  </button>
                  <button className="bg-[#FFF4F3] p-3 rounded-full font-bold hover:bg-black hover:text-white">
                    Creative
                  </button>
                  <span className="font-bold">+1</span>
                </div>
                <hr className="mt-3" />
                <div className="flex justify-center mt-3 space-x-10">
                  <p>Localisation:</p>
                  <p>Rate:</p>
                </div>
                <div className="flex justify-center space-x-10">
                  <p className="mx-3">Los Angeles</p>
                  <p className="font-bold">$50-$60/h</p>
                </div>
              </div>
              <div className="text-center btn2">
                <button className="p-4 flex justify-center bg-[#CAE9D5] w-full rounded-full mb-3 text-lg font-bold hover:bg-[#38A53F] hover:text-white">
                  View Profil
                </button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="bg-[#EEF8F2]  mt-20 h-[25rem]">
        <div className="mx-5 reveal">
          <p className="py-10 text-3xl font-bold">
            People Love To Learn With Freeio
          </p>
          <p className="mt-5 text-lg text-gray-400">
            Lorem ipsum dolor sit amet, consectetur.
          </p>
        </div>
        <div className="flex mx-5 mt-5 space-x-5 reveal left">
          <div className="div1">
            <p className="text-2xl font-bold text-center">4.9/5</p>
            <p className="mt-2 text-lg text-gray-400">
              Clients rate professionals on Freeio
            </p>
          </div>
          <div className="div2">
            <p className="text-2xl font-bold text-center">90%</p>
            <p className="mt-2 text-lg text-gray-400">
              90% of customers are satisfied <br /> through to see their
              freelancers
            </p>
          </div>
          <div className="div3">
            <p className="text-2xl font-bold text-center">Award winner</p>
            <p className="mt-2 text-lg text-gray-500">
              G2’s 2022 Best Software Awards
            </p>
          </div>
        </div>
      </div>

      <div className="my-20 text-center reveal">
        <p className="text-4xl font-bold ">Membership Plans</p>
        <p className="my-4 text-xl">Lorem ipsum dolor sit amet, consectetur.</p>
      </div>
      <div className="container flex justify-center mx-auto mb-2 reveal">
        <div className="grid grid-cols-1 space-x-4 md:grid-cols-2 lg:grid-cols-4">
          {
            Card2.map((item,prod)=>(
              <div className="max-w-sm p-4 border rounded-lg hover:bg-white hover:border-gray-200 hover:shadow" key={prod}>
            <div className="text-center">
              <h5 className="mb-2 text-3xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                {item.price}
              </h5>
              <h6 className="text-xl">{item.name}</h6>
              <p className="my-3 ">
               {item.title}
              </p>
              <p className="my-2">{item.list}</p>
              <p className="my-2">{item.visible}</p>
              <p className="my-4">{item.title1}</p>
              <p className="my-4">{item.title2}</p>
              <p className="my-4">{item.time}</p>
              <p className="my-4">{item.support}</p>
              <button
                onClick={handleClick}
                className="bg-[#EEF8F2] w-full rounded-full p-5 text-center font-bold text-[#5BBB7B]
                 hover:bg-[#5BBB7B] hover:text-white"
              >
                {inCart ? "View Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
            ))
          }
        </div>
      </div>
    </main>
  );
}
