import '../../index.css';
import React, { useEffect } from 'react';
import axios from 'axios';
import VoteSection from '../../sections/votesSection.jsx';
import { useParams } from 'react-router-dom';

function Home() {
  const { username } = useParams(); 

  useEffect(() => {
    const fetchUsername = async () => {
      if (username) {
        try {
          const url = 'http://localhost/pollingapp/check-login.php';
          let checkData = new FormData();
          checkData.append('username', username);
  
          const response = await axios.post( url, checkData);
  
          if (response.data.status === 'success') {
            console.log(response);
          } else if (response.data.status === 'logged-out') {
            console.log(response); 
            alert('Login expired, please login again');
            window.location.href = '/login';
          } else {
            console.log(response);
          }
        } catch (error) {
          console.error('Error fetching username:', error);
        }
      } else {
        console.error('Username is not defined');
      }
    };
  
    fetchUsername();
    const intervalId = setInterval(fetchUsername, 30000);

    return () => clearInterval(intervalId);

  }, [username]);

  return (
    <div className="w-full h-full pt-[7rem] md:pt-[25rem] flex flex-col justify-center items-center ">
      <h1 className='px-4 self-start lemon font-semibold text-[1.3rem] '>Welcome, {username}!</h1>
      <h1 className="px-4 self-start lemon text-[1.5rem] mt-[1.5rem] text-gray-700 font-sans font-medium ">
        Active Polls...
      </h1>
      
      <VoteSection />
    </div>
  );
}

export default Home;
