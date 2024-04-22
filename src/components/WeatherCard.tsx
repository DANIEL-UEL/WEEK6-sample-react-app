
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Divider,
//   Input,
//   Button,
// } from "@nextui-org/react";
// import { useState } from "react";
// import { TiWeatherDownpour, TiWeatherSunny } from "react-icons/ti";
// import { getWeatherData } from "../api/actions";
// import { MdWidthFull } from "react-icons/md";



// const WeatherCard: React.FC = () => {
//   const [data, setData] = useState<WeatherData>();
//   const [loadingState, setLoadingState] = useState(false);
//   const [city, setCity] = useState("");
//   const [error, setError] = useState("");

//   const CardStyle = {
//     color: "red", // CSS property: value
//     fontSize: "18px", // CSS property: value
//     fontWeight: "bold", // CSS property: value
//     //backgroundColor: "blue"
//   };

//   const bodyStyle = {
//     backgroundImage: "url('/Users/macbook/Desktop/PUBLIC/ DAPP/ MEDIA/Screenshot/ 2024-04-20/ at/ 13.14.22.png')",
//     minHeight: "100vh", // Ensure the body/container fills the viewport height
//     display: "flex", // Use flexbox layout
//     alignItems: "center", // Center vertically
//     justifyContent: "center", // Center horizontally
//     padding: "250px", // Add padding for better readability
//     width: "100%",

//   };
 
  

//   const handleSearch = () => {
//     console.log("Fetching Weather Data...");
//     console.log(city);
//     setLoadingState(true);
//     getWeatherData(city)
//       .then((res) => {
//         setError("");
//         if (res) {
//           console.log(res);
//           setData(res);
//           setLoadingState(false);
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//         setLoadingState(false);
//         setData(undefined);
//         setError(error);
//       });
//   };

//   return (
   

//     <div style={bodyStyle}> {/* Apply style to a wrapping div */}
//       <Card className="max-w-[400px]">
//         <CardHeader className="flex gap-3">
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               handleSearch();
//             }}
//           >
//             <div className="flex flex-col w-full p-2 space-y-4">
//               <p style={CardStyle}>United Kingdom Weather Forecast.</p>
//               <Input
//                 id="cityname"
//                 type="text"
//                 label="City"
//                 value={city}
//                 onChange={(e) => {
//                   setCity(e.target.value);
//                 }}
//               />
//               <Button
//                 className=""
//                 color="primary"
//                 isLoading={loadingState}
//                 type="submit"
//               >
//                 Search
//               </Button>
//             </div>
//           </form>
//         </CardHeader>
//         <Divider />
//         {data ? (
//           <CardBody>
//             <div className="flex flex-col items-center">
//               <h1 className="text-3xl font-bold">{data.city}</h1>
//               {data.temperature > 20 ? (
//                 <div>
//                   <TiWeatherSunny className="w-36 h-36" />
//                 </div>
//               ) : (
//                 <div>
//                   <TiWeatherDownpour className="w-36 h-36" />
//                 </div>
//               )}
//               <p className="text-3xl font-bold">{data.temperature}30°C</p>
//               <p className="text-lg">Humidity: {data.humidity}82%</p>
//               <p className="text-lg">Wind: {data.wind} km/h</p>
//               <p className="text-lg">Rain: {data.rain} %</p>
//             </div>
//           </CardBody>
//         ) : (
//           <CardBody>
//             <div className="flex flex-col items-center">
//               <p className="text-xl font-bold">Please enter a city</p>
//             </div>
//           </CardBody>
//         )}
//         <Divider />
//         <CardFooter>
//           <div className="flex flex-col items-left">
//             {error && <p className="text-xs text-red-600 ">{error}</p>}
//             {data && (
//               <p className="text-xs  text-gray-600 ">Last update successful.</p>
//             )}
//             {!data && (
//               <p className="text-xs  text-gray-600 ">Waiting for input...</p>
//             )}
//           </div>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// };

// export default WeatherCard;
