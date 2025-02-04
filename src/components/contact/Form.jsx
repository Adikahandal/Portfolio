"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from "@emailjs/browser";
import { toast, Toaster } from 'sonner';

export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const sendEmail = (params) => {
        const toastId = toast.loading("Finding Aditya...,ahhh! wait for few seconds ");

        emailjs
            .send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, params, {
                publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
                limitRate: {
                    throttle: 10000, // cannot send more than 1 email per 10 sec
                }
            })
            .then(
                () => {
                    toast.success("Oh!! Found him.. Your message has been sent. If You aren't a muggle you'll get response soon...", { id: toastId })
                },
                (error) => {
                    toast.error("I guess your magic power is less, try harder.. you need to say 'Accio Aditya'", { id: toastId })
                },
            );
    };

    const onSubmit = data => {
        const templateParams = {
            to_name: "Aditya Kahandal",
            from_name: data.Name,
            reply_to: data.Email,
            message: data.Message,
        }
        sendEmail(templateParams);
    };

    return (
        <>
            <Toaster richColors={true} position='bottom-center' />
            <form onSubmit={handleSubmit(onSubmit)}
                className='max-w-md w-full flex flex-col items-center justify-center space-y-4 px-6'>

                <input type="text" placeholder="Name"
                    {...register("Name", { required: "This field is required!", max: 30, minLength: { value: 3, message: ' Name should be at least 3 characters long' } })}
                    className='w-[90%] p-3 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-blue_accent/50 custom-bg1 text-lg md:text-base sm:text-sm'
                />
                {errors.Name && <span className='inline-block self-start text-accent text-sm'>{errors.Name.message}</span>}

                <input type="email" placeholder="Email"
                    {...register("Email", { required: "This field is required!", maxLength: 80 })}
                    className='w-[90%] p-3 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-blue_accent/50 custom-bg1 text-lg md:text-base sm:text-sm'
                />
                {errors.Email && <span className='inline-block self-start text-accent text-sm'>{errors.Email.message}</span>}

                <textarea placeholder="Message"
                    {...register("Message", {
                        required: "This field is required!", maxLength: { value: 500, message: 'Message should be less than 500 characters' },
                        minLength: { value: 50, message: 'Message should be more than 50 characters' }
                    })}
                    className='w-[90%] p-3 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-blue_accent/50 custom-bg1 text-lg md:text-base sm:text-sm'
                />
                {errors.Message && <span className='inline-block self-start text-accent text-sm'>{errors.Message.message}</span>}

                <input value="Miscalculate the spell,and I vanish forever" type="submit"
                    className='w-full xs:w-fit px-3  xs:px-10 py-4 rounded-md shadow-lg bg-background/80 border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-blue_accent/50 cursor-pointer capitalize text-xs xs:text-sm md:text-lg '
                />
            </form>
        </>
    );
}
