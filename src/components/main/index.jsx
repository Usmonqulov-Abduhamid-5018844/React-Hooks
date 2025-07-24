import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import uuid4 from "uuid4"

export default function Index() {
  const [full_name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [data, setData] = useState([]);

  const heandelSubmid = (event) => {
    event.preventDefault();

    if (full_name && email && password && password && date && gender) {
      const data = {
        id: uuid4(),
        full_name,
        email,
        password,
        date,
        gender,
      };
      
      setData((prov) => [...prov, data]);

      setUsername("");
      setEmail("");
      setPassword("");
      setDate("");
      setGender("");
    }
  };

  const deletItem = (id) => {
    setData((val)=>val.filter((item)=> item.id != id))
  };

  return (
    <div>
      <div className="container flex gap-8 justify-center h-[540px] mt-[70px]">
        <div className="form w-[400px] h-[540px] rounded-2xl pb-[30px] bg-white">
          <h1 className="flex font-bold text-[25px] justify-center mb-[20px] pt-[20px]">
            Sign Form
          </h1>
          <form
            onSubmit={heandelSubmid}
            action=""
            className="flex flex-col pl-[20px] pr-[20px] gap-4"
          >
            <div>
              <span className="font-bold text-[14px]">Full Name</span>
              <input
                value={full_name}
                onChange={(event) => setUsername(event.target.value)}
                className="border-[1px] border-gray-400 w-[360px] rounded-[5px] indent-2.5 py-1.5 outline-none"
                type="text"
                placeholder="Enter your full nmae"
                required
              />
            </div>

            <div>
              <span className="font-bold text-[14px]">Email Address</span>

              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="border-[1px] border-gray-400 w-[360px] rounded-[5px] indent-2.5 py-1.5  outline-none"
                type="email"
                placeholder="Enter your email address "
                required
              />
            </div>

            <div>
              <span className="font-bold text-[14px]">Password</span>
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="off"
                className="border-[1px] border-gray-400 w-[360px] rounded-[5px] indent-2.5 py-1.5  outline-none"
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <div>
              <span className="font-bold text-[14px]">Birth Date</span>
              <input
                value={date}
                onChange={(event) => setDate(event.target.value)}
                className="border-[1px] border-gray-400 w-[360px] rounded-[5px] indent-2.5 py-1.5  outline-none"
                type="date"
                required
              />
            </div>
            <div>
              <span className="font-bold text-[14px]">Gender</span>
              <select
                value={gender}
                onChange={(event) => setGender(event.target.value)}
                className="border-[1px] border-gray-400 w-[360px] rounded-[5px] indent-2.5 py-1.5  outline-none"
                name=""
                id=""
                required
              >
                <option value=""> Enter gender</option>
                <option value="Erkak">Erkar</option>
                <option value="Ayol">Ayol</option>
              </select>
            </div>
            <div>
              <button className="w-[360px] py-2 rounded-[5px] bg-[#50957C] font-bold text-[14px] text-white border-[1px] cursor-pointer">
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* <div className=" table w-auto h-[540px] overflow-hidden bg-amber-50 rounded-[12px]">
          <table className=" w-[800px]">
            <thead className=" bg-[#50957C] text-white">
              <tr>
                <th className="py-3 px-5">N</th>
                <th className="text-start  px-5">Name</th>
                <th className="text-start  px-5">Email</th>
                <th className="text-start  px-5">Password</th>
                <th className="text-start  px-5">Date</th>
                <th className="text-start  px-5">Gender</th>
                <th className="text-center  px-5">Delet</th>
              </tr>
            </thead>

            <tbody>
              {data?.map((item, index) => {
                if ((index + 1) % 2 == 0) {
                  return (
                    <tr className="border-y-2 border-[#DBDBDB] bg-[#F3F3F3] text-[#4B8A6F] hover:bg-blue-300 ">
                    <th className="pl-[23px] px-5 py-[10px] text-start">{index + 1}</th>
                    <th className="text-start px-5">{item.full_name}</th>
                    <th className="text-start px-5">{item.email}</th>
                    <th className="text-start px-5 text-wrap">{item.password}</th>
                    <th className="text-start px-5">{item.date}</th>
                    <th className="text-start px-5">{item.gender}</th>
                    <th>
                    <AiFillDelete
                      onClick={() => deletItem(item.id)}
                      className="text-black w-7 h-7 rounded-2xl m-auto mt-2.5 hover:bg-amber-600 cursor-pointer"
                    />
                    </th>
                  </tr>
                  )
                }
                else{
                  return (
                  <tr className=" bg-white text-gray-600 hover:bg-gray-300 ">
                    <th className="pl-[23px] px-5 py-[10px] text-start">{index + 1}</th>
                    <th className="text-start px-5">{item.full_name}</th>
                    <th className="text-start px-5">{item.email}</th>
                    <th className="text-start px-5">{item.password}</th>
                    <th className="text-start px-5">{item.date}</th>
                    <th className="text-start px-5">{item.gender}</th>
                    <th>
                    <AiFillDelete
                      onClick={() => deletItem(item.id)}
                      className="text-black w-7 h-7 rounded-2xl m-auto mt-2.5 hover:bg-amber-600 cursor-pointer"
                    />
                    </th>
                  </tr>
                  )
                }
              })}
            </tbody>
          </table>
        </div> */}
        <div className="overflow-x-auto h-[540px] bg-amber-50 rounded-[12px] p-4">
  <table className="min-w-[800px] w-full">
    <thead className="bg-[#50957C] text-white">
      <tr>
        <th className="py-3 px-5 text-left">N</th>
        <th className="px-5 text-left">Name</th>
        <th className="px-5 text-left">Email</th>
        <th className="px-5 text-left">Password</th>
        <th className="px-5 text-left">Date</th>
        <th className="px-5 text-left">Gender</th>
        <th></th>
      </tr>
    </thead>

    <tbody>
      {data?.map((item, index) => {
        const isEven = (index + 1) % 2 === 0;
        return (
          <tr
            key={item.id}
            className={`border-y border-[#DBDBDB] ${
              isEven ? 'bg-[#F3F3F3] text-[#4B8A6F]' : 'bg-white text-gray-600'
            } hover:bg-gray-300 transition`}
          >
            <td className="py-2 px-5">{index + 1}</td>
            <td className="px-5">{item.full_name}</td>
            <td className="px-5">{item.email}</td>
            <td className="px-5 break-words">{item.password}</td>
            <td className="px-5 text-nowrap">{item.date}</td>
            <td className="px-5">{item.gender}</td>
            <td className="px-5">
              <div className="flex justify-center">
                <AiFillDelete
                  onClick={() => deletItem(item.id)}
                  className="text-black w-7 h-7 hover:text-red-600 cursor-pointer transition"
                />
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
</div>

      </div>
    </div>
  );
}
