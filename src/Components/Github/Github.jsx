import React, { useEffect, useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";

const Github = () => {
  const [githubData, setGithubData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.github.com/users/qadirjaved1999")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGithubData(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="flex items-center justify-center text-center m-4 bg-slate-600 text-white p-4 text-3xl">
      {loading ? (
        <div className="loader text-green-600 animate-spin mt-32">
          <BiLoaderCircle size={80} />
        </div>
      ) : (
        githubData && (
          <div className="flex">
            <div className="w-[40%]">
              <img
                className="rounded-full"
                src={githubData.avatar_url}
                alt="Avatar"
              />
            </div>
            <div className="w-[50%] mt-24">
              <div className="flex">
                <h3 className="text-orange-700 font-bold text-[22px]">
                  User Name :
                </h3>
                <p className="ms-3 text-[20px]">{githubData.name}</p>
              </div>
              <div className="flex">
                <h3 className="text-orange-700 font-bold text-[22px]">
                  Company Name :
                </h3>
                <p className="ms-3 text-[20px]">{githubData.company}</p>
              </div>
              <div className="flex">
                <h3 className="text-orange-700 font-bold text-[22px]">
                  Followers :
                </h3>
                <p className="ms-3 text-[20px]">{githubData.followers}</p>
              </div>
              <div className="flex">
                <h3 className="text-orange-700 font-bold text-[22px]">
                  Location :
                </h3>
                <p className="ms-3 text-[20px]">{githubData.location}</p>
              </div>
              <div className="flex">
                <h3 className="text-orange-700 font-bold text-[22px]">Bio:</h3>
                <p className="ms-3 text-[20px]">{githubData.bio}</p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Github;
