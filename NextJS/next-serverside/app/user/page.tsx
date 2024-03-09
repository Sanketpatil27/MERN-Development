import axios from "axios";
import client from "@/db"

async function getUserData() {
    // don't do it, not good practice for fetching
    // const response = await axios.get("http://localhost:3000/api/user")
    // await new Promise(r => setTimeout(r, 1000));  // adding delay
    // return response.data;

    // use directly this instead
    const user = await client.user.findFirst();
    
    return {
        email: user?.email,
        name: 'dummy'
    }
}

// async component
export default async function User() {
  const userDetails = await getUserData();

  return (
    <div className="text-white">
      { userDetails.email } 
      <br />
      { userDetails.name }
    </div>
  );
}
