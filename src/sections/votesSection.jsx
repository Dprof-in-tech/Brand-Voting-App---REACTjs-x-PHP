import '../index.css';
import Nike from '../images/nike.jpg';
import Jordans from '../images/air-jordans.png';
import Avatar from '../images/avatar.png';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function VoteSection() {
  const [nikeVotes, setNikeVotes] = useState(0);
  const [jordansVotes, setJordansVotes] = useState(0);
  const [votes, setVotes] = useState([]);
  const [hasVoted, setHasVoted] = useState(false);
  const { username } = useParams();

  useEffect(() => {
    const fetchVotes = async () => {
      try {
        const response = await axios.get('http://localhost/pollingapp/retrieve-votes.php');

        if (response.data.status === 'success') {
          const voteData = response.data.votes;
          setVotes(voteData);

          const nikeVotesData = voteData.find((vote) => vote.brand === 'Nike');
          const jordansVotesData = voteData.find((vote) => vote.brand === 'Jordans');

          setNikeVotes(nikeVotesData ? nikeVotesData.total_votes : 0);
          setJordansVotes(jordansVotesData ? jordansVotesData.total_votes : 0);
        } else {
          console.log('Error fetching votes:', response);
        }
      } catch (error) {
        console.error('Error fetching votes:', error);
      }
    };

    fetchVotes();
    const intervalId = setInterval(fetchVotes, 20000);

    return () => clearInterval(intervalId);
  }, []);

  const addVotes = async (brand, username) => {
    const url = 'http://localhost/pollingapp/add-votes.php';
    const voteData = new FormData();
    voteData.append('brand', brand);
    voteData.append('username', username);

    try {
      const response = await axios.post(url, voteData);

      if (response.data.status === 'success') {
        console.log(response);
        console.log('Vote added successfully');
        alert('Vote added successfully');
      } else {
        console.log(response);
        console.log('Vote not added');
      }
    } catch (error) {
      console.error('Error adding vote:', error);
    }
  };

  const handleVote = (brand) => {
    if (hasVoted) {
      alert('You have already voted!');
      return;
    }

    if (brand === 'Nike') {
      setNikeVotes((prevVotes) => prevVotes + 1);
    } else if (brand === 'Jordans') {
      setJordansVotes((prevVotes) => prevVotes + 1);
    }

    setHasVoted(true);
    addVotes(brand, username);
  };

  return (
    <section className='flex flex-col items-start '>
      <div className="flex flex-row justify-evenly w-[95vw] h-[20rem]  md:h-[30rem]  rounded-xl px-0 py-2">
        <div className='w-[60%] md:w-[45vw]  h-[95%] px-2 py-6 mt-2 md:mt-[1%] bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border flex flex-col items-start gap-[2rem] rounded-xl'>
          <h2 className="lemon text-[1.2rem] md:text-[3rem] md:max-w-[80%] md:pl-[4%] justify-center text-white font-bold ">
            Which of the below Shoe Brands is better ??
          </h2>
          <p className='text-white font-sans md:pl-[4%]'>
            Updated 10 seconds ago!
          </p>
        </div>
        <div className="flex flex-col justify-evenly gap-4 w-[35vw] md:h[100%] rounded-xl px-0 py-2">
          <span className="w-[100%] h-[100%]  md:h-[46%] rounded-xl ">
            <img src={Nike} alt="Nike" className="w-full h-full object-cover rounded-xl" />
          </span>
          <span className="w-[100%]  h-[100%] md:h-[46%] rounded-xl ">
            <img src={Jordans} alt="Air Jordans" className="w-full h-full object-cover rounded-xl" />
          </span>
        </div>
      </div>
      <div className="flex flex-row gap-[1rem] md:gap-[2rem] px-4 py-2 w-fit mb-[5rem] pl-[5%]">
        <button
          onClick={() => handleVote('Nike')}
          className='rounded-full w-[fit-content] h-[fit-content] px-4 py-2 bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border text-white lemon cursor-pointer '>
          Vote Nike
        </button>
        <button
          onClick={() => handleVote('Jordans')}
          className='bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border rounded-full w-[fit-content] h-[fit-content] px-4 py-2 text-white lemon cursor-pointer' >
          Vote Jordans
        </button>
      </div>
      <h2 className="lemon text-[1.5rem] text-gray-700 font-bold mb-[1rem] pl-[5%]">Poll results</h2>
      <div className="flex flex-col justify-evenly ml-[5%] w-95[vw]">
        {votes.map((vote) => (
          <h4 key={vote.id} className='lemon text-[1.2rem] flex flex-row Justify-between items-center  mb-4 bg-gray-300 px-4 py-2  rounded-xl w-[fit-content] font-bold'>
            <div className='w-[50vw] h-[fit-content] flex flex-row gap-[1rem]'>
              <span className='h-[40px] w-[40px]'>
                <img src={Avatar} alt="Voter avatar" className='rounded-full w-full h-full object-cover' />
              </span>{vote.voter} voted for
            </div>

            <div className='w-[30vw] h-[fit-content] flex flex-row gap-[1rem]'>
              <span className='h-[40px] w-[40px]'>
                <img src={Jordans} alt="Voter avatar" className=' rounded-full w-full h-full object-cover' />
              </span>{vote.brand}
            </div>
          </h4>
        ))}
      </div>
    </section>
  );
}

export default VoteSection;
