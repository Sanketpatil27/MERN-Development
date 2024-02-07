import { useEffect, useState } from 'react';
import './App.css';

function App() {

  return (
    <div>
      <Card> </Card>
    </div>
  )
}

function Card() {
	const [userData, setUserData] = useState({});

    useEffect(() => {
      	fetch("https://api.github.com/users/SanketPatil27")
		.then(async (res) => {
			const json = await res.json();
			setUserData(json);
		})
		console.log(userData.login);
    }, []);

    return <div className="flex h-full w-full mt-16 justify-center content-center">
			<div className="flex flex-col h-auto w-90 justify-center w-96 bg-white rounded shadow-lg">
				<div className="rounded overflow-hidden">
					<img src="https://camo.githubusercontent.com/0098703ad5c181d8623faea88d68cacc4ad6d36139b97938a6a9daa326e68ffa/68747470733a2f2f6d656469612e6c6963646e2e636f6d2f646d732f696d6167652f433445313241514671454850703076527151412f61727469636c652d636f7665725f696d6167652d736872696e6b5f3732305f313238302f302f313633343339333337343733323f653d3231343734383336343726763d6265746126743d4b476778466f4669695139797970356747455648765574476831484e357a3076555937326b4b5a6345354d" alt="photo" />
				</div>	

				<div className="absolute top-69 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-20 w-20 rounded-3xl overflow-hidden">
					<img src={userData.avatar_url} alt="" />
				</div>

				{/* other info */}
				<div className="flex flex-col h-1/3 p-10 text-center justify-center content-center ">
					<p className="font-extrabold"> {userData.name} </p>
					<p className="font-normal">Learning MERN Stack</p>
				</div>
				
				{/* followers */}
				<div className="flex pb-10 text-center justify-around content-center ">
					<div className="flex flex-col">
						<p className="font-bold">Following</p>
						<p>{userData.following}</p>
					</div>
					<div className="flex flex-col">
						<p className="font-bold">Followers</p>
						<p>{userData.followers}</p>
					</div>
				</div>
			</div>
	</div>
}

export default App
