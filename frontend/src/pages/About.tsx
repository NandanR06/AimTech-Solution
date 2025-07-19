import React from "react";
import { ShieldCheck, Target, Star, Users } from "lucide-react";
import person1  from "../assets/pexels-chloekalaartist-1043474.jpg"
import person2  from "../assets/pexels-olly-733872.jpg"

import person3  from "../assets/pexels-stefanstefancik-91227.jpg"


const About: React.FC = () => {

  
const teamMembers = [
  { id: 1, name: "Alice Johnson", role: "CEO",image : person1},
  { id: 2, name: "Bob Smith", role: "CTO" ,image : person2},
  { id: 3, name: "Charlie Brown", role: "Lead Developer" ,image : person3},]

  return (
    <section className="bg-gray-100 py-44 px-6 md:px-20  text-gray-800">
      {/* Company Overview */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-4">About AimTech</h2>
        <p className="text-gray-600">
          AimTech Solution is a forward-thinking technology company dedicated to
          delivering world-class digital solutions. Our team blends innovation,
          expertise, and passion to empower businesses through scalable web
          platforms, automation, and DevOps practices.
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16 text-gray-800 mt-[95px]">
        <div className="text-center mb-8 md:mb-0 border  rounded-lg bg-gray-50 shadow hover:shadow-lg transition duration-200  p-10 flex flex-col items-center">
                     <Target size={40} className="text-blue-600" />

          <h3 className="text-2xl font-semibold mb-2  flex justify-center items-center  item-center">
            <h1> Our Vision</h1>
          </h3>
          <p className="text-gray-600 text-center">
            To be a global leader in tech innovation, transforming how
            businesses operate in a digital-first world.
          </p>
        </div>
        <div className="text-center mb-8 md:mb-0 border  rounded-lg bg-gray-50 shadow hover:shadow-lg transition duration-200  p-10 flex flex-col items-center">
                      <ShieldCheck size={40} className="text-green-600" />

          <h3 className="text-2xl font-semibold mb-2  flex justify-center items-center  item-center">
            <h1> Our Mission</h1>
          </h3>
          <p className="text-gray-600 text-center">
            To provide cutting-edge, reliable, and scalable technology solutions
            that empower our clients to grow and succeed.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="text-center mb-16">
        <h3 className="text-3xl font-bold mb-6">Our Core Values</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {["Innovation", "Integrity", "Customer First", "Excellence"].map(
            (value, index) => (
              <div
                key={index}
                className="bg-gray-100 px-6 py-4 rounded-xl shadow w-48 text-center"
              >
                <Star className="text-yellow-500 mx-auto mb-2" />
                <p className="font-semibold">{value}</p>
              </div>
            )
          )}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-4xl mx-auto mb-16 flex flex-col items-center">
        <h3 className="text-3xl font-bold text-center mb-6">
          Why Choose AimTech?
        </h3>
        <ul className="grid  gap-4 text-gray-600 text-lg text-left">
          <li className="p-3 md:text-[20px]  bg-gray-50 px-20 hover:shadow rounded  ">Client-Centric Approach with Tailored Solutions</li>
          <li className="p-3 md:text-[20px] bg-gray-50 px-20 hover:shadow rounded ">Experienced Professionals in Web, DevOps, and Automation</li>
          <li className="p-3 md:text-[20px] bg-gray-50 px-20 hover:shadow rounded ">Fast Turnaround Times with High-Quality Delivery</li>
          <li className="p-3 md:text-[20px] bg-gray-50 px-20 hover:shadow rounded ">Dedicated Post-Deployment Support</li>
        </ul>
      </div>

      {/* Optional: Meet the Team */}
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-6">Meet the Team</h3>
        <div className="flex flex-wrap justify-evenly gap-8">
          {teamMembers.map((member,id) => (
            <div key={id} className="w-48 p-4  text-center flex justify-between flex-col items-center ">
              <img src={member.image} alt="" className="w-44 h-44 mx-auto rounded-full bg-gray-300 mb-2" />
              <p className="font-semibold">{member.id}</p>
              <p className="text-sm text-gray-500">{member.name}</p>
               <p className="text-sm text-gray-500">{member.role}</p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
