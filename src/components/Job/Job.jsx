import { MdLocationOn } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { id, logo, job_title, company_title, remote_or_onsite, location, job_type, salary } = job;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_title}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{job_type}</button>
                </div>
                <div className="mt-4 flex gap-2">
                    <h2 className="flex"><MdLocationOn className="text-2xl mr-2"> </MdLocationOn>{location}</h2>
                    <h2 className="flex"><BiDollarCircle className="text-2xl mr-2"></BiDollarCircle>{salary}</h2>
                </div>
                <div className="card-actions ">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;