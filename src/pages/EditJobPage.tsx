import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import { Job } from "../types/JobJsonType.ts";
import { toast } from "react-toastify";

enum SalaryRangeType {
    Under50K = "Under $50K",
    K50To60K = "$50K - 60K",
    K60To70K = "$60K - 70K",
    K70To80K = "$70K - $80K",
    K80To90K = "$80K - $90K",
    K90To100K = "$90K - $100K",
    K100To125K = "$100K - $125K",
    K125To150K = "$125K - $150K",
    K150To175K = "$150K - $175K",
    K175To200K = "$175K - $200K",
    Over200K = "Over $200K"
}


const EditJobPage = ({updateJobSubmit}) => {
    const job:Job = useLoaderData();

    const [title, setTitle] = useState<string>(job.title)
    const [type, setType] = useState<string>(job.type)
    const [location, setLocation] = useState<string>(job.location)
    const [description, setDescription] = useState<string>(job.description)

    const [salary, setSalary] = useState<SalaryRangeType>(
        Object.values(SalaryRangeType).includes(job.salary as SalaryRangeType)
            ? (job.salary as SalaryRangeType)
            : SalaryRangeType.Under50K
    );
    const [companyName, setCompanyName] = useState<string>(job.company.name)
    const [companyDescription, setCompanyDescription] = useState<string>(job.company.description)
    const [contactEmail, setContactEmail] = useState<string>(job.company.contactEmail)
    const [contactPhone, setContactPhone] = useState<string>(job.company.contactPhone)

    const navigate = useNavigate()
    const { id } = useParams()

    console.log(`edit job ${updateJobSubmit} `)
    console.log(` job id ${id} `)

    const submitForm = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const updatedJob:Job = {
            id,
            title,
            type,
            location,
            description,
            salary,
            company : {
                name: companyName,
                description: companyDescription,
                contactEmail,
                contactPhone
            }
        }
        updateJobSubmit(updatedJob)
        toast.success('Job Updated Successfully')
        return navigate(`/jobs/${job.id}`)
    }


    return (<>
        <section className="bg-indigo-50">
            <div className="container m-auto max-w-2xl py-24">
                <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                    <form onSubmit={submitForm}>
                        <h2 className="text-3xl text-center font-semibold mb-6">
                            Update
                        </h2>

                        <div className="mb-4">
                            <label
                                htmlFor="type"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                Job Type
                            </label>
                            <select
                                id="type"
                                name="type"
                                className="border rounded w-full py-2 px-3"
                                required
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            >
                                <option value="Full-Time">Full-Time</option>
                                <option value="Part-Time">Part-Time</option>
                                <option value="Remote">Remote</option>
                                <option value="Internship">Internship</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                Job Listing Name
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                className="border rounded w-full py-2 px-3 mb-2"
                                placeholder="eg. Beautiful Apartment In Miami"
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="description"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                className="border rounded w-full py-2 px-3"
                                rows={4}
                                placeholder="Add any job duties, expectations, requirements, etc"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="type"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                Salary
                            </label>
                            <select
                                id="salary"
                                name="salary"
                                className="border rounded w-full py-2 px-3"
                                required
                                value={salary}
                                onChange={(e) => setSalary(e.target.value)}
                            >
                                <option value={SalaryRangeType.Under50K}>{SalaryRangeType.Under50K}</option>
                                <option value={SalaryRangeType.K50To60K}>{SalaryRangeType.K50To60K}</option>
                                <option value={SalaryRangeType.K60To70K}>{SalaryRangeType.K60To70K}</option>
                                <option value={SalaryRangeType.K70To80K}>{SalaryRangeType.K70To80K}</option>
                                <option value={SalaryRangeType.K80To90K}>{SalaryRangeType.K80To90K}</option>
                                <option value={SalaryRangeType.K90To100K}>
                                    {SalaryRangeType.K90To100K}
                                </option>
                                <option value={SalaryRangeType.K100To125K}>
                                    {SalaryRangeType.K100To125K}
                                </option>
                                <option value={SalaryRangeType.K125To150K}>
                                    {SalaryRangeType.K125To150K}
                                </option>
                                <option value={SalaryRangeType.K150To175K}>
                                    {SalaryRangeType.K150To175K}
                                </option>
                                <option value={SalaryRangeType.K175To200K}>
                                    {SalaryRangeType.K175To200K}
                                </option>
                                <option value={SalaryRangeType.Over200K}>{SalaryRangeType.Over200K}</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                Location
                            </label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                className="border rounded w-full py-2 px-3 mb-2"
                                placeholder="Company Location"
                                required
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>

                        <h3 className="text-2xl mb-5">Company Info</h3>

                        <div className="mb-4">
                            <label
                                htmlFor="company"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                Company Name
                            </label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                className="border rounded w-full py-2 px-3"
                                placeholder="Company Name"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="company_description"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                Company Description
                            </label>
                            <textarea
                                id="company_description"
                                name="company_description"
                                className="border rounded w-full py-2 px-3"
                                rows={4}
                                placeholder="What does your company do?"
                                value={companyDescription}
                                onChange={(e) => setCompanyDescription(e.target.value)}
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="contact_email"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                Contact Email
                            </label>
                            <input
                                type="email"
                                id="contact_email"
                                name="contact_email"
                                className="border rounded w-full py-2 px-3"
                                placeholder="Email address for applicants"
                                required
                                value={contactEmail}
                                onChange={(e) => setContactEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="contact_phone"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                Contact Phone
                            </label>
                            <input
                                type="tel"
                                id="contact_phone"
                                name="contact_phone"
                                className="border rounded w-full py-2 px-3"
                                placeholder="Optional phone for applicants"
                                value={contactPhone}
                                onChange={(e) => setContactPhone(e.target.value)}
                            />
                        </div>

                        <div>
                            <button
                                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Update Job
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    </>)
}
export default EditJobPage