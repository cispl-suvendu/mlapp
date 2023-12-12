"use client"
import Image from "next/image"
import { Dialog } from '@headlessui/react'
import { useState } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FaCheckCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, subDays } from 'date-fns';


const bookingSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('First Name is Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Last Name is Required'),
    email: Yup.string().email('Invalid email').required('Email is Required'),
    dateTime: Yup.string().required('Date and Time is Required'),
});

export default function Service({ _id, name, cost, description, images, category, createdBy, servicestatus, createdAt }) {

    let [isOpen, setIsOpen] = useState(false)
    const [showMessage, setShowMessage] = useState({
        status: false,
        message: "",
        type: 0
    })

    const handleBook = async ({ serviceId, categoryId, serviceCratedBy, firstName, lastName, email, dateTime }) => {
        const res = await fetch(`https://multilevelapp-api.vercel.app/api/v1/global/customer/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ serviceId, categoryId, serviceCratedBy, firstName, lastName, email, dateTime })
        })
        if (!res.ok) {
            setShowMessage(prev => ({
                ...prev,
                status: true,
                message: "Something went wrong. Please try after some time",
                type: 0
            }))
        }
        setShowMessage(prev => ({
            ...prev,
            status: true,
            message: "Your Service has been booked, Please check your email for the details",
            type: 1
        }))
    }

    const [startDate, setStartDate] = useState(null);

    return (
        <>
            <div className="bg-white rounded p-2 shadow w-full mb-6 flex justify-between items-center">
                <div className="w-1/4 border border-gray-light2 rounded">
                    {images.length > 0 ? <div className="w-full flex justify-center items-center"><Image src={images[0].data_url} width={100} height={100} alt={name} className="w-40" /></div> : <div className="w-full flex justify-center items-center text-gray-light3">no images</div>}
                </div>
                <div className="w-3/4 p-4">
                    <h2 className="font-sans text-md font-bold mb-[2px] capitalize">{name}</h2>
                    <div className="font-sans text-sm mb-[2px] font-[500] text-gray-dark">Cost: Rs:{cost} / hour</div>
                    <p className="text-sans text-active text-xs">by <span className="capitalize">{createdBy.firstName} {createdBy.lastName}</span></p>
                    <div className="mt-4">
                        <button className="bg-dark text-white text-sm px-6 py-2 rounded hover:bg-active" onClick={() => setIsOpen(true)}>Book Service</button>
                    </div>
                </div>
            </div>
            <Dialog
                open={isOpen}
                onClose={() => { setIsOpen(false), setShowMessage(prev => ({ ...prev, status: false, message: "", type: Number })) }}
                className="relative z-50"
            >
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-[rgba(0,0,0,.5)]">
                    <Dialog.Panel className="w-full max-w-xl rounded bg-white p-4">
                        {showMessage.status !== true ?
                            <>
                                <Dialog.Title className="font-bold font-sans text-sm">Complete Booking</Dialog.Title>
                                <Formik
                                    initialValues={{
                                        firstName: '',
                                        lastName: '',
                                        email: '',
                                        dateTime: null
                                    }}
                                    validationSchema={bookingSchema}
                                    onSubmit={values => {
                                        handleBook({ serviceId: _id, categoryId: category._id, serviceCratedBy: createdBy._id, ...values })
                                    }}
                                >
                                    {({ errors, touched, setFieldValue }) => (
                                        <Form>
                                            <div className="flex flex-col gap-4 mt-4">
                                                <div>
                                                    <label className="font-sans text-xs m-0 text-gray-dark tracking-wider mb-1 block">Email</label>
                                                    <Field name="email" type="email" className="border w-full px-2 py-2 rounded border-gray-light3 text-sm text-gray-dark" placeholder="johndeo@gmail.com" />
                                                    {errors.email && touched.email ? <div className="text-sans text-error text-xs mt-1">{errors.email}</div> : null}
                                                </div>
                                                <div className="flex flex-col md:flex-row justify-between gap-4">
                                                    <div className="flex-1">
                                                        <label className="font-sans text-xs m-0 text-gray-dark tracking-wider mb-1 block">First Name</label>
                                                        <Field name="firstName" className="border w-full px-2 py-2 rounded border-gray-light3 text-sm text-gray-dark" placeholder="John" />
                                                        {errors.firstName && touched.firstName ? (
                                                            <div className="text-sans text-error text-xs mt-1">{errors.firstName}</div>
                                                        ) : null}
                                                    </div>
                                                    <div className="flex-1">
                                                        <label className="font-sans text-xs m-0 text-gray-dark tracking-wider mb-1 block">Last Name</label>
                                                        <Field name="lastName" className="border w-full px-2 py-2 rounded border-gray-light3 text-sm text-gray-dark" placeholder="Deo" />
                                                        {errors.lastName && touched.lastName ? (
                                                            <div className="text-sans text-error text-xs mt-1">{errors.lastName}</div>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="font-sans text-xs m-0 text-gray-dark tracking-wider mb-1 block">Date and Time</label>
                                                    <div className="border w-full py-1 rounded border-gray-light3 text-sm text-gray-dark font-sans">
                                                        <DatePicker
                                                            name="dateTime"
                                                            showIcon
                                                            selected={startDate}
                                                            onChange={(date) => { setFieldValue('dateTime', date), setStartDate(date) }}
                                                            showTimeSelect
                                                            dateFormat="Pp"
                                                            minDate={subDays(new Date(), 0)}
                                                            maxDate={addDays(new Date(), 30)}
                                                            placeholderText="Select date and time"
                                                        />
                                                    </div>
                                                    {errors.dateTime && touched.dateTime ? (
                                                        <div className="text-sans text-error text-xs mt-1">{errors.dateTime}</div>
                                                    ) : null}
                                                </div>
                                                <div>
                                                    <button className="bg-active text-white text-sm px-6 py-2 rounded hover:bg-dark" type="submit">Book Service</button>
                                                </div>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </>
                            : <div className="flex flex-col items-center justify-center">
                                <div>
                                    {showMessage.type === 1 ? <FaCheckCircle className="text-success text-6xl my-2" /> : <MdError className="text-error text-6xl my-2" />}
                                </div>
                                <div className="font-bold font-sans text-md text-center px-12">{showMessage.message}</div>
                            </div>}
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    )
}
