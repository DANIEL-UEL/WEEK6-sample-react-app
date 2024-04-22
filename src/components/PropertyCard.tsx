import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Input,
  Button,
} from "@nextui-org/react";
import { useState } from "react";
import Bungalow from "/workspaces/sample-react-app/src/assets/Bungalow.png";
import Cottage from "/workspaces/sample-react-app/src/assets/Cottage.png"; 
import Flat from "/workspaces/sample-react-app/src/assets/Flat.png";
import Terraced from "/workspaces/sample-react-app/src/assets/Terraced.png";
import { getPropertyData } from "../api/actions";

const PropertyCard: React.FC = () => {
  const [data, setData] = useState<PropertyData>();
  const [loadingState, setLoadingState] = useState(false);
  const [Type, setType] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    console.log("Fetching Property Data...");
    console.log(Type);
    setLoadingState(true);
    getPropertyData(Type)
      .then((res) => {
        setError("");
        if (res) {
          console.log(res);
          setData(res);
          setLoadingState(false);
        }
      })
      .catch((error) => {
        console.error(error);
        setLoadingState(false);
        setData(undefined);
        setError(error);
      });
  };

  const getLogo = (make: string) => {
    switch (make) {
      case "BMW":
        return Bungalow;
      case "Toyota":
        return Cottage;
      case "Lamborghini":
        return Flat;
      case "Bugatti":
        return Terraced;
      default:
        return ""; // Default case if no logo is found
    }
  };

  return (
    <Card className="max-w-[400px] items-center">
      <CardHeader className="flex gap-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <div className="flex flex-col w-full p-2 space-y-4">
            <Input
              id="carname"
              type="text"
              label="Car Company"
              value={Type}
              onChange={(e) => {
                setType(e.target.value);
              }}
            />
            <Button
              className=""
              color="primary"
              isLoading={loadingState}
              type="submit"
            >
              Search
            </Button>
          </div>
        </form>
      </CardHeader>
      <Divider />
      {data ? (
        <CardBody>
          <div className="flex flex-col items-center">
          <img
              src={getLogo(data.Type)} // Get logo based on manufacturer
              alt={`${data.Type} logo`}
              className="w-40 h-40 mb-4"
            />
            <p className="text-3xl font-bold"> Type {data.Type}</p>
            <p className="text-lg">Buying Price: {data.Buying_Price}</p>
            <p className="text-lg">Rent Price: £{data.Rent_price}</p>
            <p className="text-lg">Selling Price: £{data.Selling_Price}</p>
          </div>
        </CardBody>
      ) : (
        <CardBody>
          <div className="flex flex-col items-center">
            <p className="text-xl font-bold">Please enter a car company</p>
          </div>
        </CardBody>
      )}
      <Divider />
      <CardFooter>
        <div className="flex flex-col items-left">
          {error && <p className="text-xs text-red-600 ">{error}</p>}
          {data && (
            <p className="text-xs  text-gray-600 ">Last update successful.</p>
          )}
          {!data && (
            <p className="text-xs  text-gray-600 ">Waiting for input...</p>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
